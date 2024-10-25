"use client";
import React, { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import Sidebar from "./Sidebar";

export default function SidebarToggler() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  // Handle Click outside to close the sidebar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarVisible(false);
      }
    };

    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.background = "#0000000f";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.background = "white";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <li
      onClick={() => {
        setIsSidebarVisible(!isSidebarVisible);
      }}
      ref={sidebarRef}
    >
      <LuMenu size={24} className="hover:text-gray-300 cursor-pointer" />
      {isSidebarVisible && (
        <div
          // Prevent the sidebar from being hidden when clicking inside
          onClick={(e) => e.stopPropagation()}
        >
          <Sidebar />
        </div>
      )}
    </li>
  );
}
