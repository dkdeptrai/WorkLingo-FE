import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Profile.css";
import passwordImg from "../../assets/images/password-img.png";
interface ProfileProps {
  // Define your component props here
}

const Profile: React.FC<ProfileProps> = () => {
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
            <div className="flex flex-row flex-start">
              <img
                src="https://via.placeholder.com/150"
                alt="profile"
                className="rounded-full w-24 h-24 mr-auto m-10"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg ml-4 h-10 my-auto">
                Save
              </button>
            </div>
            <div className="border-b-2 border-gray-300"></div>
            {/* create a form here */}
            <form className="flex flex-col">
              <label className="text-lg font-bold mt-5 text-black">First Name</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
              />
              <label className="text-lg font-bold mt-5 text-black">Last Name</label>
              <input
                type="text"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
              />
              <label className="text-lg font-bold mt-5 text-black">Email</label>
              <input
                type="email"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
              />
              <label className="text-lg font-bold mt-5 text-black">About Me</label>
                <textarea
                    className="border-2 border-gray-300 rounded-lg p-2 text-black bg-white"
                    rows={4}
                />
            </form>
          </TabPanel>
          <TabPanel style={{ display: "flex", flexDirection: "column" }}>
            <img src={passwordImg} alt="profile" className="rounded-full w-36 h-36 m-10 mx-auto" />
            {/* create a form here */}
            <form className="flex flex-col">
              <label className="text-lg font-bold mt-5 text-black">Current Password</label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
                placeholder="Enter your current password"
              />
              <label className="text-lg font-bold mt-5 text-black">New Password</label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
                placeholder="Enter your new password"
              />
              <label className="text-lg font-bold mt-5 text-black">Confirm New Password</label>
              <input
                type="password"
                className="border-2 border-gray-300 rounded-lg p-2 text-black"
                placeholder="Confirm your new password"
              />
              <button style={{width: "12rem"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-lg h-10 mt-5 ml-auto">
                Change Password
              </button>
            </form>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
