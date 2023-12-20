"use client";

import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Harap isi semua bidang!");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("email already exists");
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white flex flex-col  items-center">
        <h1 className="text-3xl mb-10">Sign up</h1>
        <form className="max-w-[350px]" onSubmit={handleSubmit}>
          <div className="flex flex-col w-[350px] my-4">
            <span className="text-[13px] text-gray-900 font-light mb-1">
              Email or phone number
            </span>
            <input
              type="text"
              className="border border-gray-800 rounded-[5px] h-[32px] mb-1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-[13px] text-gray-900 font-light my-2 mb-1">
              Password (6+ characters)
            </span>
            <input
              type="password"
              className="border border-gray-800 rounded-[5px] h-[32px]"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                {error}
              </div>
            )}
          </div>
          <div className="flex justify-center items-center max-w-[320px] text-center w-full">
            <span className="text-gray-600 text-[11px]">
              By clicking Agree & Join, you agree to the Educate{" "}
              <span className="text-blue-600 text-[11px] font-semibold">
                User Agreement, Privacy Policy,<span>and</span> Cookie Policy.{" "}
              </span>{" "}
            </span>
          </div>
          <div className="max-w-[350px] my-5">
            <button className="w-[350px] h-10 bg-blue-600 p-6 text-white rounded-full flex justify-center items-center text-center hover:bg-blue-700 transition-all">
              Agree & Join
            </button>
          </div>

          <div className="w-[350px] border-t border-gray-300 mt-10" />
          <div className="flex flex-col justify-center items-center">
            or
            <div className="w-[320px] text-sm border border-gray-600 rounded-full p-3 text-center">
              Continue with Google
            </div>
            <span className="my-4 text-[14px]">
              Already on Educate?{" "}
              <Link href={"/"} className="text-blue-700">
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
