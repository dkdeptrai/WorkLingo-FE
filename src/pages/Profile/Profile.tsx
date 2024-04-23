import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Profile.css";
import passwordImg from "../../assets/images/password-img.png";
import userService from "../../services/user.service";
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
  const [user, setUser] = useState();

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

  const handleFormSubmit = () => {};
  const handleAvatarChange = async () => {
    try {
      if (!selectedImage) {
        alert("Please select an image");
        return;
      }
      console.log("Selected image:", selectedImage);
      const response = await userService.updateAvatar(user.id, selectedImage);
      console.log(response);
    } catch (error) {
      console.error("Failed to update avatar", error);
      alert("Failed to update avatar");
    }
  };

  useEffect(() => {
    setUser(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null
    );
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
            <Tab>Your Lessons</Tab>
          </TabList>
          <TabPanel style={{ display: "flex", flexDirection: "column" }}>
            <div className="flex flex-row flex-start justify-between">
              {imageUrl || user.avatarURL ? (
                <img
                  src={imageUrl || user.avatarURL}
                  alt="Selected"
                  className="rounded-full w-24 h-24 mr-auto m-10 cursor-pointer"
                />
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
            {/* create a form here */}
            <form className="flex flex-col">
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
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg h-10 mt-5 ml-auto"
              >
                Submit
              </button>
            </form>
          </TabPanel>
          <TabPanel style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={passwordImg}
              alt="profile"
              className="rounded-full w-36 h-36 m-10 mx-auto"
            />
            {/* create a form here */}
            <form className="flex flex-col">
              <label className="text-lg font-bold mt-5 text-black">
                Current Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
                placeholder="Enter your current password"
              />
              <label className="text-lg font-bold mt-5 text-black">
                New Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
                placeholder="Enter your new password"
              />
              <label className="text-lg font-bold mt-5 text-black">
                Confirm New Password
              </label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
                placeholder="Confirm your new password"
              />
              <button
                style={{ width: "12rem" }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg h-10 mt-5 ml-auto"
                onClick={handleFormSubmit}
              >
                Change Password
              </button>
            </form>
          </TabPanel>
          <TabPanel style={{ display: "flex", flexDirection: "column" }}>
            <div className="flex flex-row justify-between">
              <div className="text-3xl font-semibold  text-start">
                0 Lessons
              </div>
              <div>
                <button className="bg-transparent px-3 py-1 border-2 border-primary-color rounded-[2px] text-primary-color">
                  Create your lesson
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4"></div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
