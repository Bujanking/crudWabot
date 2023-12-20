"use client";
import Navbar from "./Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CountryForm() {
  const { data: session } = useSession();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState(`${session?.user?.email}`);
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!country || !city || !email) {
      setError("Harap isi semua bidang!");
      return;
    }
    try {
      const res = await fetch("api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          country,
          city,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/profileform");
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
        <h1 className="text-2xl mb-10 text-center">
          Make the most of your professional life
        </h1>
        <form className="max-w-[350px]" onSubmit={handleSubmit}>
          <div className="flex flex-col w-[350px] my-4">
            <input
              type="text"
              className="border border-gray-800 rounded-[5px] h-[32px] mb-1 hidden"
              value={`${session?.user?.email}`}
              onChange={(e) => setEmail(e.target.value)}
            />

            <span className="text-[13px] text-gray-900 font-light mb-1">
              Country/Region
            </span>
            <input
              type="text"
              className="border border-gray-800 rounded-[5px] h-[32px] mb-1"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
            <span className="text-[13px] text-gray-900 font-light my-2 mb-1">
              City/District
            </span>
            <input
              type="text"
              className="border border-gray-800 rounded-[5px] h-[32px]"
              required
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="max-w-[350px] my-5">
            <button className="w-[350px] h-10 bg-blue-600 p-6 text-white rounded-full flex justify-center items-center text-center hover:bg-blue-700 transition-all">
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
