import React from "react";
import SearchBarToggler from "./SearchBarToggler";
import SidebarToggler from "./SidebarToggler";

export default function MobileNavbar() {
  return (
    <ul className="list-none flex text-[16px] text-white font-bold gap-3">
      <SearchBarToggler />
      <SidebarToggler />
    </ul>
  );
}
