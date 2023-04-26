import Box from "@/components/Box";
import Footer2 from "@/components/Footer2";
import Sidebar from "@/components/Sidebar";
import React, { useEffect, useState } from "react";
import Head from "next/head";

const isBrowser = () => typeof window !== "undefined";

function counter() {
  const [w, setW] = useState({ v: 0, h: 0 });
  useEffect(() => {
    if (isBrowser()) {
        setW({ v: window.innerWidth, h: window.innerHeight });
    }
  }, []);

  return (
    <div className="box_container">
      <Head>
        <title>Blackjacker Basic Strategy Tool</title>
      </Head>
      <Box w={w}/>
      <Sidebar />
      <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
        <Footer2 />
      </div>
    </div>
  );
}

export default counter;
