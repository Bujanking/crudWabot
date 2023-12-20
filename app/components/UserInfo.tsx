"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col">
        <span>Email : {session?.user?.email}</span>
        <button
          onClick={() => signOut()}
          className="text-white bg-red-500 cursor-pointer"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
