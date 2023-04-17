import React from "react";
import { FaTiktok, FaTwitter, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Footer() {
  return (
    <footer className="h-[200px] pt-8 flex flex-col justify-between font-semibold bg-[#223336] shadow-xl relative bottom-[10rem]">
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
