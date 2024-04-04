import React from "react";
import { sidebarMenu } from "./sidebar-menu";
import { TbHandStop } from "react-icons/tb";
import { IoHandLeftOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiMiniHandRaised } from "react-icons/hi2";

const MenuSidebar = () => {
  return (
    <header className="flex flex-row justify-between h-fit">
      <main className="flex flex-col justify-center items-center space-y-16 bg-bgWhiteColor rounded-xl px-2 py-5">
        <div className="flex items-center justify-center bg-primaryColor px-1 py-2 rounded-lg">
          <HiMiniHandRaised
            size={20}
            className="translate-x-[2px] text-bgWhiteColor"
          />
          <HiMiniHandRaised
            size={20}
            className="translate-x-[-2px] text-bgWhiteColor"
          />
        </div>
        <div className="flex flex-col gap-5">
          {sidebarMenu?.map((menu) => (
            <span className="bg-bgColor p-1 rounded-full">{menu}</span>
          ))}
        </div>

        <div className=" bg-primaryColor rounded-xl px-3 py-2.5">
          <FaHandHoldingHeart size={20} className="text-bgWhiteColor" />
        </div>
      </main>
    </header>
  );
};

export default MenuSidebar;
