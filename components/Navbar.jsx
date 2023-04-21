import React from "react";
import { useRouter } from "next/router";
import { FaUserCircle } from 'react-icons/fa'

function Navbar() {
  const router = useRouter()
  return (
    <nav className="h-24 flex items-center shadow-xl justify-between px-12">
      <div></div>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <h1 className="navheading text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>Blackjacker</h1>
      </div>
      <div>
        <FaUserCircle size={27} color="#ff8000" className="cursor-pointer"/>
      </div>
    </nav>
  );
}

export default Navbar;
