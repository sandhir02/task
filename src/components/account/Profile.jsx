import React from "react";
import { LinerCallIcon, UserIcon } from "../common/Icon";

const Profile = () => {
  return (
    <div className="flex-1 px-4 md:px-6 max-sm:pt-2 py-6 md:py-8 text-white">
      {/* Phone Section */}
      <div className="bg-[linear-gradient(90deg,_#0E0E0E_0%,_#000000_100%)] backdrop-blur-[4px] border border-[#333] rounded-lg p-4 md:p-6 xl:p-[30px] mb-8 md:mb-10 xl:mb-20 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px]">
        <LinerCallIcon />
        <div>
          <p className="text-[#999999] text-sm md:text-base lg:text-[20px] font-helvetica">
            Logged with
          </p>
          <p className="text-lg md:text-[22px] lg:text-[29px] font-medium font-helvetica">
            8699780274
          </p>
        </div>
      </div>

      {/* Profiles Section */}
      <div className="bg-[#0E0E0E] backdrop-blur-[4px] border border-[#333] rounded-lg px-4 md:px-[30px] xl:px-[45px] py-6 md:py-10 xl:pt-[48px] xl:pb-20">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <h3 className="text-[22px] md:text-[25px] font-medium font-helvetica text-white">
            Manage Profiles
          </h3>
          <button className="bg-[#FD0100] hover:bg-[#fd0100cc] text-white text-[16px] md:text-[17px] px-6 md:px-8 py-3 md:py-4 rounded-[10px] font-bold w-full md:w-auto max-w-full md:max-w-[225px]">
            + Add New Profile
          </button>
        </div>

        {/* Profiles List */}
        <div className="space-y-4">
          {[1, 2].map((profile_n, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#0E0E0E] backdrop-blur-[4px] border border-[#333] p-4 rounded-lg hover:bg-[#2a2a2a] cursor-pointer">
              <div className="flex items-center space-x-4">
                <UserIcon />
                <span className="text-[18px] md:text-[21px] font-medium font-helvetica">
                  Profile Name
                </span>
              </div>
              {index === 0 ? (
                <span className="bg-[#323131] text-white rounded-[10px] font-helvetica text-sm md:text-[21px] py-1.5 px-4 max-sm:hidden">
                  Your profile
                </span>
              ) : (
                <span className="text-white text-xl md:text-4xl font-semibold font-helvetica">
                  {">"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
