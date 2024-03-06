"use client";

import Link from "next/link";
import { RiNetflixFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {!openMenu && (
        <div className="w-full py-8 px-16 flex justify-between items-center">
          <Link
            href={"/"}
            className="w-[70%] text-red-700 text-2xl font-bold flex items-center"
          >
            <RiNetflixFill size={30} />
            <h1 className="-translate-x-1.5">otflix</h1>
          </Link>
          <div className="w-[30%] hidden sm:flex justify-between font-semibold">
            <Link href={"/"} className="hover:text-red-700">
              Home
            </Link>
            <Link href={"../movie"} className="hover:text-red-700">
              Movies
            </Link>
            <Link href={"../about"} className="hover:text-red-700">
              About
            </Link>
            <Link href={"../contact"} className="hover:text-red-700">
              Contact
            </Link>
          </div>
          <div
            onClick={() => setOpenMenu(true)}
            className="cursor-pointer sm:hidden"
          >
            <IoMenu size={25} />
          </div>
        </div>
      )}
      {openMenu && (
        <div className="w-full h-[100%] fixed left-0 top-0 bg-black text-white flex flex-col gap-8 justify-center items-center">
          <Link onClick={() => setOpenMenu(false)} href={"/"} className="hover:text-red-700">
            Home
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={"../movie"} className="hover:text-red-700">
            Movies
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={"../about"} className="hover:text-red-700">
            About
          </Link>
          <Link onClick={() => setOpenMenu(false)} href={"../contact"} className="hover:text-red-700">
            Contact
          </Link>
          <button onClick={() => setOpenMenu(false)} className="border p-2 text-white translate-x-[10rem] -translate-y-[25rem] bg-transparent rounded-lg">
            <ImCross />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
