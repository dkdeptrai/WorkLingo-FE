import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Profile.css";
import passwordImg from "../../assets/images/password-img.png";
import userService from "../../services/user.service";
import authService from "../../services/auth.service";
import { useAuth } from "../../contexts/AuthContext";
interface ProfileProps {
  // Define your component props here
}

const Profile: React.FC<ProfileProps> = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user, setUser } = useAuth();

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      try {
        // Use createImageBitmap to load the image
        const imgBitmap = await createImageBitmap(file);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const MAX_WIDTH = 150;
        const MAX_HEIGHT = 150;
        let width = imgBitmap.width;
        let height = imgBitmap.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(imgBitmap, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) {
            setImageUrl(URL.createObjectURL(blob));
            const resizedFile = new File([blob], file.name, {
              type: blob.type,
            });
            setSelectedImage(resizedFile);

            console.log("Selected image:", resizedFile);
          } else {
            console.log("Failed to create blob");
            setImageUrl(null);
            setSelectedImage(null);
          }
        }, file.type);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    }
  };

  const fetchUserInfo = async () => {
    const response = await userService.getUser(user.id);
    setUser(response);
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    const response = await userService.changePassword(
      user?.id,
      currentPassword,
      newPassword
    );
    console.log(response);
    alert("Password changed successfully");
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");
  };
  const handleProfileChange = async () => {
    console.log("handle profile change", user.id);
    const profile = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      bio: bio,
    };
    const responseBody = JSON.stringify(profile);

    const response = await userService.updateProfile(user.id, responseBody);
    if (!response.ok) {
      throw new Error("Failed to update profile");
    }
    alert("Profile updated successfully");
  };

  const handleAvatarChange = async () => {
    try {
      if (!selectedImage) {
        alert("Please select an image");
        return;
      }
      console.log("Selected image:", selectedImage);
      const response = await userService.updateAvatar(user.id, selectedImage);
      if (!response.ok) {
        throw new Error("Failed to update avatar");
      }
      alert("Avatar updated successfully");
    } catch (error) {
      alert("Failed to update avatar");
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    setFirstname(user?.firstname);
    setLastname(user?.lastname);
    setEmail(user?.email);
    setBio(user?.bio);
    setImageUrl(user?.avatarUrl);
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col container text-left items-center">
      <div className="bg-[#fff] p-12">
        <div style={{ width: "50rem" }} className="">
          <p className="text-4xl font-bold m-3 ml-12 text-black text-left ">
            Settings
          </p>
        </div>
        <Tabs style={{ width: "50rem" }} className="custom-tab-bar ">
          <TabList>
            <Tab style={{ marginLeft: "3rem" }}>Profile</Tab>
            <Tab>Password</Tab>
          </TabList>
          <TabPanel style={{ display: "flex", flexDirection: "column" }}>
            <div className="flex flex-row flex-start justify-between">
              {imageUrl || user.avatarURL ? (
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                    src={imageUrl || user.avatarURL}
                    alt="Selected"
                    className="rounded-full w-24 h-24 mr-auto m-10 cursor-pointer"
                  />
                </label>
              ) : (
                <label htmlFor="image-upload" className="cursor-pointer">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="profile"
                    className="rounded-full w-24 h-24 mr-auto m-10 cursor-pointer"
                  />
                </label>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg ml-4 h-10 my-auto"
                onClick={handleAvatarChange}
              >
                Save new image
              </button>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            <label className="text-lg font-bold mt-5 text-black">
              First Name
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black"
            />
            <label className="text-lg font-bold mt-5 text-black">
              Last Name
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black"
            />
            <label className="text-lg font-bold mt-5 text-black">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black"
            />
            <label className="text-lg font-bold mt-5 text-black">
              About Me
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black bg-white"
              rows={4}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg h-10 mt-5 ml-auto"
              onClick={handleProfileChange}
            >
              Submit
            </button>
          </TabPanel>
          <TabPanel style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={passwordImg}
              alt="profile"
              className="rounded-full w-36 h-36 m-10 mx-auto"
            />
            <label className="text-lg font-bold mt-5 text-black">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black"
              placeholder="Enter your current password"
            />
            <label className="text-lg font-bold mt-5 text-black">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black"
              placeholder="Enter your new password"
            />
            <label className="text-lg font-bold mt-5 text-black">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border-2 border-gray-300 rounded-lg p-2 text-black"
              placeholder="Confirm your new password"
            />
            <button
              style={{ width: "12rem" }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg h-10 mt-5 ml-auto"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
