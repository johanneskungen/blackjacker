import React from "react";
import { FaTiktok, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="md:h-[170px] w-screen pt-8 flex flex-col gap-4 md:gap-0 justify-between font-semibold bg-[#56929c] shadow-xl absolute bottom-0 right translate-x-[-50%] left-[50%] md:relative md:bottom-[10rem]">
      <div className="flex flex-row justify-evenly">
        <h3>
          <FaGithub size={30} className="cursor-pointer" />
        </h3>
        <h3>
          <FaTwitter size={30} className="cursor-pointer" />
        </h3>
        <h3>
          <FaTiktok size={30} className="cursor-pointer" />
        </h3>
      </div>
      <div className="flex items-center justify-center mb-8 gap-4 text-sm">
        <MdOutlineMail size={30} />
        <input
          placeholder="Emailaddress"
          className="p-2 text-black rounded-sm focus:outline-[#ff8000]"
        />
        <button className="bg-white p-2 text-[#2a3134] rounded-sm anibutton duration-150">submit</button>
      </div>
    </footer>
  );
}

export default Footer;
