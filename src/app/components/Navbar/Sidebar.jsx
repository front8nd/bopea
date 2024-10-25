"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavbarDropdown from "./NavbarDropdown";
import CloseIcon from "./CloseIcon";
export default function Sidebar() {
  return (
    <div className="h-full bg-white absolute sm:left-3/4 left-1/4 right-0 top-0 bottom-0 rounded shadow scroll-auto">
      {/* Top Bar */}
      <div className="flex justify-between px-4 py-6 border-b-[1px] items-center">
        <Image
          src="/images/logo-color-black.png"
          height={80}
          width={110}
        ></Image>
        <CloseIcon />
      </div>
      {/* Menu */}
      <div className="flex md:justify-between justify-end w-full">
        <ul className="list-none hidden text-[16px] text-black hover:text-gray-600 font-bold sm:hidden md:flex lg:flex flex-col w-full p-6">
          <li className="cursor-pointer text-black hover:text-gray-600 flex items-center flex-col gap-1 justify-between border-b-[1px] py-3 group">
            <div className="flex flex-row justify-between w-full">
              <span>Home</span>
              <IoIosArrowDown size={20} />
            </div>
            <div className="hidden group-hover:flex w-full">
              <NavbarDropdown />
            </div>
          </li>
          <li className="cursor-pointer text-black hover:text-gray-600 flex items-center flex-col gap-1 justify-between border-b-[1px] py-3 group">
            <div className="flex flex-row justify-between w-full">
              <span>Features</span>
              <IoIosArrowDown />
            </div>
            <div className="hidden group-hover:flex w-full">
              <NavbarDropdown />
            </div>
          </li>
          <li className="cursor-pointer text-black hover:text-gray-600 flex items-center flex-col gap-1 justify-between border-b-[1px] py-3 group ">
            <div className="flex flex-row justify-between w-full">
              <span>Bussiness</span>
              <IoIosArrowDown />
            </div>
            <div className="hidden group-hover:flex w-full">
              <NavbarDropdown />
            </div>
          </li>
          <li className="cursor-pointer text-black hover:text-gray-600 flex items-center flex-col gap-1 justify-between border-b-[1px] py-3 group ">
            <div className="flex flex-row justify-between w-full">
              <span>Active</span>
              <IoIosArrowDown />
            </div>
            <div className="hidden group-hover:flex w-full">
              <NavbarDropdown />
            </div>
          </li>
          <li className="cursor-pointer text-black hover:text-gray-600 flex items-center flex-col gap-1 justify-between border-b-[1px] py-3 group ">
            <div className="flex flex-row justify-between w-full">
              <span>Sports</span>
              <IoIosArrowDown />
            </div>
            <div className="hidden group-hover:flex w-full">
              <NavbarDropdown />
            </div>
          </li>
          <li className="cursor-pointer text-black hover:text-gray-600 flex items-center flex-col gap-1 justify-between border-b-[1px] py-3 group ">
            <div className="flex flex-row justify-between w-full">
              <span>Shop</span>
              <IoIosArrowDown />
            </div>
            <div className="hidden group-hover:flex w-full">
              <NavbarDropdown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
