import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Profile from "../profile/Profile";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen ">
      <Navbar />
      <div className="max-w-[1720px] w-full mx-auto flex flex-col xl:flex-row gap-8 px-4 py-10">
        <div className="w-full xl:w-[370px] xl:max-w-[455px]">
          <Sidebar />
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default MainLayout;
