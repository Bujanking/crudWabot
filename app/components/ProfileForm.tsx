"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";

export default function ProfileForm() {
  const [showpage, setShowPage] = useState(true);

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white flex flex-col  items-center">
        <h1 className="text-2xl mb-10 text-center">
          Your profile helps you discover new people and opportunities
        </h1>
        <form className="max-w-[350px]">
          {showpage && (
            <div>
              <div className={`flex flex-col w-[350px] my-4`}>
                <span className="text-[13px] text-gray-900 font-light mb-1">
                  Most recent job title
                </span>
                <input
                  type="text"
                  className="border border-gray-800 rounded-[5px] h-[32px] mb-1"
                />
              </div>

              <div
                className="bg-white flex justify-center items-center cursor-pointer hover:bg-gray-200 p-4 transition-all"
                onClick={() => setShowPage(false)}
              >
                <h1 className="text-gray-600 font-medium text-[17px] tracking-wide">
                  I'm a Student
                </h1>
              </div>
            </div>
          )}
          {!showpage && (
            <div>
              <div className="flex flex-col w-[350px] my-4">
                <span className="text-[13px] text-gray-900 font-light mb-1">
                  School or College/University
                </span>
                <input
                  type="text"
                  className="border border-gray-800 rounded-[5px] h-[32px] mb-1"
                />
                <div className="grid grid-cols-2 grid-rows-1 gap-4">
                  <div>
                    <span className="text-[13px] text-gray-900 font-light mb-1">
                      Start year
                    </span>
                    <select className="border border-gray-800 rounded-[5px] h-[32px] mb-1 w-full px-2 bg-white">
                      <option value="-">-</option>
                      <option value="-">2023</option>
                      <option value="-">2022</option>
                      <option value="-">2021</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-[13px] text-gray-900 font-light mb-1">
                      End year (or expected)
                    </span>
                    <select className="border border-gray-800 rounded-[5px] h-[32px] mb-1 w-full px-2 bg-white">
                      <option value="-">-</option>
                      <option value="-">2030</option>
                      <option value="-">2029</option>
                      <option value="-">2028</option>
                    </select>
                  </div>
                </div>
                <div className="border border-gray-400 rounded-[5px] h-[55px] my-2 w-full flex justify-between items-center px-5">
                  <span className="text-[14px] font-light text-gray-700">
                    I'm over 16
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-800"></div>
                  </label>
                </div>
              </div>

              <div
                className="bg-white flex justify-center items-center cursor-pointer hover:bg-gray-200 p-4 transition-all"
                onClick={() => setShowPage(true)}
              >
                <h1 className="text-gray-600 font-medium text-[17px] tracking-wide">
                  I'm not a Student
                </h1>
              </div>
            </div>
          )}

          <div className="max-w-[350px] my-5">
            <Link
              href={"/dashboard"}
              className="w-[350px] h-10 bg-blue-600 p-6 text-white rounded-full flex justify-center items-center text-center hover:bg-blue-700 transition-all"
            >
              Continue
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
