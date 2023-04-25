import React from "react";
import Image from "next/image";
import clown from "@/assets/clown_2.png";
import Footer from "./Footer";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  return (
    <main className="text-white flex">
      <div className="w-screen md:w-fit mx-auto">
        <div className="md:w-[1024px] w-[200px] h-[100px] md:h-[545px] 2xl:h-[600px] mt-8 overflow-hidden">
          {/*<Image alt="Scary clown" src={clown} className="object-contain w-full h-full img" /> */}
        </div>
        <div className="md:w-fit w-[300px] mx-auto md:text-center md:relative md:bottom-[22rem]">
          <h1 className="md:text-5xl font-bold text-2xl mb-[3px]">
            Your online Black jack card-counter
          </h1>
          <h3 className="md:text-lg italic">
            Card-counting made super simple with Blackjacker, free to use when
            signing up for an account.
          </h3>
          <button className="button" onClick={() => router.push("/counter")}>
            Try now!
          </button>
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default Hero;
