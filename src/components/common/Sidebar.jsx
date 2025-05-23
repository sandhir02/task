import React from "react";
import { menuItems } from "./Helper";

const Sidebar = () => {
  return (
    <div className="w-full xl:w-auto md:mb-8 xl:mb-0">
      <h2 className="text-white text-[28px] md:text-[36px] font-helvetica font-medium mb-6">
        Account
      </h2>

      <div className="space-y-2 max-lg:flex max-lg:items-center max-md:gap-2 max-lg:gap-4 max-lg:overflow-x-auto max-sm:p-2 bg-[#0E0E0E] border border-[#333] backdrop-blur-[4px] max-sm:py-1 p-4 md:px-6 xl:px-10 py-6 md:py-[33px] rounded-lg">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`group flex items-center mb-0 space-x-3 p-3 rounded-lg cursor-pointer transition-colors font-helvetica font-medium  ${
              item.active ? "text-white" : "text-[#717173] hover:text-white"
            }`}>
            {React.cloneElement(item.icon, {
              className:
                "fill-[#717173] group-hover:fill-white transition-colors",
            })}
            <span className="text-[18px] md:text-[22px] lg:text-[25px]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
