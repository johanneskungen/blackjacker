import React from "react";
import Image from "next/image";
import clown from "@/assets/clown_2.png";
import Footer from "./Footer";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  return (
    <main className="text-white">
      <div className="w-fit mx-auto">
        <div className="w-[1024px] h-[545px] 2xl:h-[600px] mt-8 overflow-hidden">
          {/*<Image alt="Scary clown" src={clown} className="object-contain w-full h-full img" /> */}
        </div>
        <div className="w-fit mx-auto text-center relative bottom-[22rem]">
          <h1 className="text-5xl font-bold text mb-[3px]">
            Your online Black jack card-counter
          </h1>
          <h3 className="text-lg italic">
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
