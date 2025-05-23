import React from "react";
import { menuItems } from "./Helper";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract active tab from URL
  const activeTab = location.pathname.split("/").pop() || "profile";

  const handleTabClick = (tabKey) => {
    navigate(`/account/${tabKey}`);
  };
  return (
    <div className="max-w-[1720px] w-full mx-auto flex flex-col xl:flex-row gap-8 px-4 py-10">
      <div className="w-full xl:w-[370px] xl:max-w-[455px]">
        <div className="w-full xl:w-auto md:mb-8 xl:mb-0">
          <h2 className="text-white text-[28px] md:text-[36px] font-helvetica font-medium mb-6">
            Account
          </h2>

          <div className="space-y-2 max-lg:flex max-lg:items-center max-md:gap-2 max-lg:gap-4 max-lg:overflow-x-auto max-sm:p-2 bg-[#0E0E0E] border border-[#333] backdrop-blur-[4px] max-sm:py-1 p-4 md:px-6 xl:px-10 py-6 md:py-[33px] rounded-lg">
            {menuItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(item.key)}
                className={`group flex items-center mb-0 space-x-3 p-3 rounded-lg cursor-pointer transition-colors font-helvetica font-medium ${
                  activeTab === item.key
                    ? "text-white"
                    : "text-[#717173] hover:text-white"
                }`}>
                {React.cloneElement(item.icon, {
                  className: `${
                    activeTab === item.key ? "fill-white" : "fill-[#717173]"
                  } group-hover:fill-white transition-colors`,
                })}
                <span className="text-[18px] md:text-[22px] lg:text-[25px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex-1">{renderContent()}</div> */}
    </div>
  );
};

export default Sidebar;
