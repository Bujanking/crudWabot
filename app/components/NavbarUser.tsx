import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill, BsSuitcaseLgFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function NavbarUser() {
  const [hamburger, setHamburger] = useState(false)

  return (
    <div className="w-full h-20 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center">
        <Link
          href={"/dashboard"}
          className="w-auto h-20 bg-transparent flex items-center"
        >
          <img src="/logoEducate.png" alt="logo" className="w-18 h-12" />
        </Link>
        <input
          type="text"
          className="px-5 w-68 h-10 bg-blue-100 border-0 rounded-full"
          placeholder={`Seacrh`}
        />
      </div>


    {
      hamburger === false &&(
        <div className="px-6 lg:hidden xl:hidden 2xl:hidden">
          <span className="text-xl cursor-pointer" onClick={() => setHamburger(true)}><GiHamburgerMenu /></span>
        </div>
      )
    }

      {
        hamburger && (
          <div className="w-72 h-72 bg-slate-300 shadow-3xl absolute z-50 top-10 right-10 p-2 flex flex-col gap-5">
            <div className="w-full bg-slate-300 flex justify-end items-center">
              <span className="text-2xl cursor-pointer" onClick={() => setHamburger(false)}><IoMdClose /></span>
            </div>
            <div className="w-full h-48 bg-slate-300 flex justify-center items-center gap-3">
                <div className="flex items-start flex-col gap-5">

                  <div className="flex gap-3 items-center cursor-pointer text-slate-500 group">
                    <span className="text-xl group-hover:text-black"><FaHome /></span>
                    <span className="text-sm group-hover:text-black">Halaman Utama</span>
                  </div>

                  <div className="flex gap-3 items-center cursor-pointer text-slate-500 group">
                    <span className="text-xl group-hover:text-black"><BsPeopleFill /></span>
                    <span className="text-sm group-hover:text-black">Jaringan Saya</span>
                  </div>

                  <div className="flex gap-3 items-center cursor-pointer text-slate-500 group">
                    <span className="text-xl group-hover:text-black"><BsSuitcaseLgFill /></span>
                    <span className="text-sm group-hover:text-black">Pekerjaan</span>
                  </div>

                  <div className="flex gap-3 items-center cursor-pointer text-slate-500 group">
                    <span className="text-xl group-hover:text-black"><AiFillMessage /></span>
                    <span className="text-sm group-hover:text-black">Pesan</span>
                  </div>

                  <div className="flex gap-3 items-center cursor-pointer text-slate-500 group">
                    <span className="text-xl group-hover:text-black"><FaBell /></span>
                    <span className="text-sm group-hover:text-black">Notifikasi</span>
                  </div>
                </div>
            </div>
          </div>
        )
      }
      

      {/* non hamburger */}
      <div className="items-center gap-5 px-20 hidden sm:hidden md:hidden lg:flex">
        <div className="flex flex-col items-center text-center">
          <span className="text-xl">
            <FaHome />
          </span>
          <span className="text-sm">Halaman Utama</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xl">
            <BsPeopleFill />
          </span>
          <span className="text-sm">Jaringan Saya</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xl">
            <BsSuitcaseLgFill />
          </span>
          <span className="text-sm">Pekerjaan</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xl">
            <AiFillMessage />
          </span>
          <span className="text-sm">Pesan</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xl">
            <FaBell />
          </span>
          <span className="text-sm">Notifikasi</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-lg">
            <div className="w-7 h-7 text-white bg-red-500 text-base flex justify-center items-center rounded-full">
              R
            </div>
          </span>
          <span className="text-sm">Saya</span>
        </div>
      </div>
    </div>
  );
}
