import React from "react";

export default function NavbarDropdown({ padding, margin }) {
  return (
    <ul
      className={`flex flex-col rounded  bg-white w-full`}
      style={{
        marginTop: margin,
        padding: padding,
      }}
    >
      <li className=" text-gray-700 hover:text-primary hover:bg-gray-50 rounded p-2 text-[14px] font-medium ">
        Layouts
      </li>
      <li className=" text-gray-700 hover:text-primary hover:bg-gray-50 rounded p-2 text-[14px] font-medium ">
        Sidebar
      </li>
      <li className=" text-gray-700 hover:text-primary hover:bg-gray-50 rounded p-2 text-[14px] font-medium ">
        Pages
      </li>
      <li className=" text-gray-700 hover:text-primary hover:bg-gray-50 rounded p-2 text-[14px] font-medium ">
        Gallery
      </li>
      <li className=" text-gray-700 hover:text-primary hover:bg-gray-50 rounded p-2 text-[14px] font-medium ">
        Sponsered Posts
      </li>
    </ul>
  );
}
