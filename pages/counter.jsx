import Box from "@/components/Box";
import Footer2 from "@/components/Footer2";
import Sidebar from "@/components/Sidebar";
import React from "react";
import Head from "next/head";

function counter() {
  return (
    <div className="box_container">
      <Head>
        <title>Blackjacker Basic Strategy Tool</title>
      </Head>
      <Box />
      <Sidebar />
      <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
        <Footer2 />
      </div>
    </div>
  );
}

export default counter;
