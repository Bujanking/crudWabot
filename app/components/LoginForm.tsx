"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("invalid credentials");
        return;
      }
      router.replace("country");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-white flex flex-col items-center">
        <h1 className="text-2xl mb-10 text-center">
          Make the most of your professional life
        </h1>
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
              Sign in
            </button>
          </div>

          <div className="w-[350px] border-t border-gray-300 mt-10" />
          <div className="flex flex-col justify-center items-center">
            or
            <button className="w-[320px] text-sm border border-gray-600 rounded-full p-3 text-center">
              Continue with Google
            </button>
            <span className="my-4 text-[14px]">
              Dont have account?{" "}
              <Link href={"/register"} className="text-blue-700">
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
