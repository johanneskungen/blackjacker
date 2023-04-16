import React from "react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter()
  return (
    <nav className="h-24 flex items-center shadow-xl justify-between px-12">
      <div></div>
      <div className="absolute left-[50%] translate-x-[-50%]">
        <h1 className="navheading text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>Blackjacker</h1>
      </div>
      <div className="text-sm flex gap-8 text-white font-semibold underline-offset-2 underline">
        <p className="cursor-pointer">Usuage</p>
        <p className="cursor-pointer">Help</p>
        <p className="cursor-pointer">Legal Terms</p>
      </div>
    </nav>
  );
}

export default Navbar;
