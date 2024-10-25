"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function CloseIcon() {
  const [animation, setAnimation] = useState({
    entranceAnimation: false,
    exitAnimation: false,
  });

  return (
    <i
      onMouseEnter={() => {
        setAnimation({ entranceAnimation: true, exitAnimation: false });
      }}
      onMouseLeave={() => {
        setAnimation({ entranceAnimation: false, exitAnimation: true });
      }}
      className={`text-black cursor-pointer ${
        animation.entranceAnimation ? "rotate-center" : ""
      } 
      ${animation.exitAnimation ? "rotate-back" : ""}
      `}
    >
      <AiOutlineClose size={28} />
    </i>
  );
}
