import React from "react";
import { HiSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-textColor text-2xl font-bold ">Dua Page</h1>

      <div className="relative">
        <input
          type="search"
          placeholder="Search by Dua Name"
          className="py-2 px-3 pr-4 block w-[300px] rounded-md border shadow-sm sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center bg-bgGrayColor m-1 rounded-sm pointer-events-none">
          <HiSearch className="h-5 w-5 flex items-center justify-center ml-3 text-gray-400 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
