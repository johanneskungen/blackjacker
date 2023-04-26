import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Play blackjack like it is supposed to with Blackjacker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A Blackjack tool that help beginners to learn and play as the basic strategy says" />
        <meta charSet="UTF-8" />
      </Head>
      <Hero />
    </>
  );
}

export default index;
