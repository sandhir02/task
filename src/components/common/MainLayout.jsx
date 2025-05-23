import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    // <div className="bg-black min-h-screen ">
    //   <Navbar />
    //   <div className="max-w-[1720px] w-full mx-auto flex flex-col xl:flex-row gap-8 px-4 py-10">
    //     <div className="w-full xl:w-[370px] xl:max-w-[455px]">
    //       <Sidebar />
    //     </div>
    //     <Profile />
    //   </div>
    // </div>
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="max-w-[1720px] w-full mx-auto flex flex-col xl:flex-row gap-8 px-4 py-10">
        <div className="w-full xl:w-[370px] xl:max-w-[455px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
