"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { SearchBar } from "./SearchBar";

export default function SearchBarToggler() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const searchRef = useRef(null);

  // Handle Click outside to close search bar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchVisible(false);
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.background = "#0000000f";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.background = "white";
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <li
      className="relative"
      onClick={() => {
        setIsSearchVisible(!isSearchVisible);
      }}
      ref={searchRef}
    >
      <IoSearch size={24} className="hover:text-gray-300 cursor-pointer" />
      {isSearchVisible && (
        <div
          className="absolute -left-[240px] top-full rounded shadow bg-transparent"
          // Prevent search bar from being hidden
          onClick={(e) => e.stopPropagation()}
        >
          <SearchBar />
        </div>
      )}
    </li>
  );
}
