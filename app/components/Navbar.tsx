import Link from "next/link";

export default function Navbar() {
  return (
    <Link
      href={"/dashboard"}
      className="w-full h-20 bg-transparent flex items-center px-4"
    >
      <img src="/logoEducate.png" alt="logo" className="w-16 h-12 sm:w-18 sm:w-14" />
    </Link>
  );
}
