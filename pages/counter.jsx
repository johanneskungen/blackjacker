import Box from "@/components/Box";
import Footer2 from "@/components/Footer2";
import Sidebar from "@/components/Sidebar";
import React from "react";

function counter() {
  return (
    <div className="box_container">
      <Box />
      <Sidebar />
      <div className="absolute bottom-5 left-[50%] translate-x-[-50%]"><Footer2 /></div>
    </div>
  );
}

export default counter;
