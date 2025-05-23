import React, { useState } from "react";

import {
  BellIcon,
  CloseIcon,
  GridIcon,
  MenuIcon,
  MicIcon,
  SearchIcon,
  SpeedoIcon,
  UserIcon,
  VectorIcon,
} from "./Icon";
import { navItems } from "./Helper";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-[linear-gradient(180deg,_#000000_0%,_rgba(0,_0,_0,_0)_100%)/45] border-b border-gray-800 px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <SpeedoIcon />

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-white hover:text-[#FD0100]/70 transition-colors font-helvetica font-normal text-[18px] ${
                  item.highlight ? "text-[#FD0100] font-medium" : ""
                }`}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right side - Icons and Profile */}
        <div className="flex items-center gap-2 min-sm:gap-6">
          <SearchIcon />
          <div className="max-sm:hidden">
            <GridIcon />
          </div>
          <span className="w-[1px] bg-white/33 h-[38px] max-sm:hidden"></span>
          <MicIcon />
          <BellIcon />

          <div className="flex items-center gap-2 min-sm:gap-6">
            <UserIcon />

            <div className="max-sm:hidden">
              <VectorIcon />
            </div>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#111] z-50 flex flex-col space-y-4 p-4">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`text-white hover:text-[#FD0100] transition-colors font-helvetica font-normal text-base md:text-[18px] ${
                item.highlight ? "text-[#FD0100] font-medium" : ""
              }`}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
