import React from "react";

import { SpeedoIcon } from "../common/Icon";

const Signup = () => {
  return (
    <div className="bg-black min-h-screen w-full flex items-center justify-center py-10">
      <div className="max-w-[1720px] w-full max-lg:items-center flex max-lg:flex-col rounded-[10px] overflow-hidden bg-black">
        {/* Left Image Side */}
        <div className="w-full md:w-[60%] xl:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0B0B] z-10 " />
          <div className=" min-xl:overflow-hidden">
            <img
              src="./assets/images/png/signup-img.png"
              alt="Signup Visual"
              className="w-full h-full object-cover z-0 relative"
            />
          </div>
        </div>

        {/* Right Form Side */}
        <div className="w-full md:w-[60%] xl:w-1/2 bg-[#151515] flex items-center justify-center px-4 xl:px-0 py-10 xl:py-18">
          <div className="max-w-[552px] w-full">
            <span>
              <SpeedoIcon />
            </span>
            <h2 className="text-[20px] xl:text-[32px] font-medium text-white font-helvetica pt-[22px]">
              Create an account
            </h2>
            <p className="text-[16px] xl:text-[18px] text-[#757575] font-medium font-helvetica leading-[100%] pt-[1px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>

            {/* Form Fields */}
            <form className="flex flex-col pt-[27px]">
              <input
                placeholder="Full Name"
                className="bg-[#333333] rounded-[10px] text-white font-helvetica font-normal text-base xl:text-[18px] p-3 xl:p-6 "
              />
              <input
                placeholder="Phone Number"
                className="bg-[#333333] rounded-[10px] text-white font-helvetica font-normal text-base xl:text-[18px] p-3 xl:p-6 mt-[22px]"
              />

              {/* Checkbox */}
              <div className="flex items-start space-x-2 text-sm text-[#888] mt-4">
                <label
                  htmlFor="terms"
                  className="flex items-start gap-2 mt-4 cursor-pointer">
                  {/* Hidden Native Checkbox */}
                  <input type="checkbox" id="terms" className="peer hidden" />

                  {/* Custom Checkbox Style */}
                  <div className="w-[45px] xl:w-[22px] h-[22px] rounded-[4px] border-2 border-white peer-checked:bg-[#FD0100] flex items-center justify-center">
                    <svg
                      className="hidden peer-checked:block w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <span className="font-helvetica font-normal text-[12px] xl:text-[14px] text-white xl:max-w-[494px]">
                    You have agreed to Speedo Prime{" "}
                    <span className="text-[#FD0100] underline">
                      Privacy Policy
                    </span>
                    ,{" "}
                    <span className="text-[#FD0100] underline">
                      Rules and Marketing
                    </span>
                    , that you will abide by all the terms and policies of the
                    platform.
                  </span>
                </label>
              </div>

              {/* Verify Button */}
              <button
                type="submit"
                className="font-helvetica cursor-pointer font-bold text-base xl:text-[20px] bg-[#FD0100] hover:bg-[#FD0100]/70 mt-6 w-full text-white py-4 xl:py-[22px] rounded-[10px]">
                Verify Account
              </button>
            </form>
            {/* Login Link */}
            <p className="mt-6 font-helvetica font-medium text-[18px] text-[#757575]">
              Already have account?
            </p>
            <a
              href=""
              className="text-[#FD0100] cursor-pointer hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
