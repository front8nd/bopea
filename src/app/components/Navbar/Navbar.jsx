import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavbarDropdown from "./NavbarDropdown";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="NavbarBG h-16 flex gap-6 items-center sm:px-24 px-8">
      {/* Logo */}
      <Image src="/images/logo.png" height={80} width={110}></Image>
      <div className="flex md:justify-between justify-end w-full">
        {/* Left Menu */}
        <ul className="list-none hidden text-[16px] text-white font-bold gap-6 sm:hidden md:flex lg:flex ">
          <li className="cursor-pointer text-white flex items-center gap-1">
            <span className="hover-underline-animation hover-underline-animation-active">
              Home
            </span>
          </li>
          <li className="cursor-pointer text-white flex items-center gap-1 relative group">
            <span className="hover-underline-animation">Features</span>
            <i className="mt-[2px]">
              <IoIosArrowDown />
            </i>
            {/* Dropdown menu */}
            <div className="hidden group-hover:block absolute top-full -left-4 group-hover:menu-visible rounded shadow min-w-52 max-w-80 ">
              <NavbarDropdown padding="8px" margin="20px" />
            </div>
          </li>

          <li className="cursor-pointer text-white flex items-center gap-1 relative group">
            <span className="hover-underline-animation ">Bussiness</span>
            <i className="mt-[2px] ">
              <IoIosArrowDown />
            </i>
            {/* Dropdown menu */}
            <div className="hidden group-hover:block absolute top-full -left-4 group-hover:menu-visible rounded shadow min-w-52 max-w-80 ">
              <NavbarDropdown padding="8px" margin="20px" />
            </div>
          </li>
          <li className="cursor-pointer text-white flex items-center gap-1 relative group">
            <span className="hover-underline-animation ">Active</span>
          </li>
          <li className="cursor-pointer text-white flex items-center gap-1 relative group">
            <span className="hover-underline-animation ">Sports</span>
            <i className="mt-[2px]">
              <IoIosArrowDown />
            </i>
            {/* Dropdown menu */}
            <div className="hidden group-hover:block absolute top-full -left-4 group-hover:menu-visible rounded shadow min-w-52 max-w-80 ">
              <NavbarDropdown padding="8px" margin="20px" />
            </div>
          </li>
          <li className="cursor-pointer text-white flex items-center gap-1 relative group">
            <span className="hover-underline-animation ">Shop</span>
            <i className="mt-[2px]">
              <IoIosArrowDown />
            </i>
            {/* Dropdown menu */}
            <div className="hidden group-hover:block absolute top-full -left-4 group-hover:menu-visible rounded shadow min-w-52 max-w-80 ">
              <NavbarDropdown padding="8px" margin="20px" />
            </div>
          </li>
        </ul>
        {/* Right Menu */}
        <MobileNavbar />
      </div>
    </div>
  );
}
