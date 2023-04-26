import React from "react";
import { FaTiktok, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="hidden absolute md:flex justify-between w-24 rounded-full bottom-16 left-[50%] translate-x-[-50%]">
        <p className="h-4 w-4 rounded-full bg-[#ff8000] cursor-pointer"></p>
        <p className="h-4 w-4 rounded-full bg-[#ff8000] cursor-pointer"></p>
        <p className="h-4 w-4 rounded-full bg-[#ff8000] cursor-pointer"></p>
      </div>
      <footer className="md:h-[170px] w-screen pt-8 flex flex-col gap-4 md:gap-0 justify-between font-semibold bg-[#56929c] shadow-xl absolute right translate-x-[-50%] left-[50%] md:relative bottom-[-4.5rem] md:bottom-0">
        <div className="flex flex-row justify-evenly md:justify-center md:gap-24">
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
          <button className="bg-white p-2 text-[#2a3134] rounded-sm anibutton duration-150">
            submit
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;
