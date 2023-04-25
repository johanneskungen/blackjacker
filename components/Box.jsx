import React, { useState } from "react";
import { rec } from "@/fu/recomendation";
import toast, { Toaster } from "react-hot-toast";
import Cards from "./Cards";

function Box() {
  const [dealer, setDealer] = useState({ value: 0, ace: 0 });
  const [player, setPlayer] = useState({ value: 0, ace: 0 });
  const [recomendation, setRecomendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("dealer");

  const next = () => {
    setDealer(() => ({
      value: 0,
      ace: 0,
    }));
    setPlayer(() => ({
      value: 0,
      ace: 0,
    }));
  };

  const recommend = () => {
    const res = rec(parseInt(player.value), parseInt(dealer.value), player.ace);
    res === undefined
      ? setRecomendation("No recomendation available")
      : setRecomendation(res.message);
  };

  const saveGame = async () => {
    setLoading(true);
    if (dealer === "" || player === "") {
      setLoading(false);
      return alert("Need to fill in dealer or player value.");
    }

    const response = await fetch("/api/savegame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dealer,
        player,
      }),
    });
    // fix backend
    const statusMessage = await response.json();
    toast(statusMessage.message);
    setLoading(false);
  };

  return (
    <div className="md:w-full w-screen mx-auto flex flex-col justify-evenly pt-44 md:pt-64 items-center p-3 h-[360px] md:box">
      <Toaster
        className="text-sm"
        toastOptions={{
          success: {
            duration: 2500,
          },
        }}
      />
      <div
        onClick={() => setRecomendation("")}
        className={`absolute bg-orange-600 top-44 right-64 text-white h-8 flex items-center px-2 rounded-sm shadow-xl text-sm font-semibold cursor-pointer ${
          !recomendation && "hidden"
        }`}
      >
        {recomendation}
      </div>
      <div className="flex md:flex-row flex-col-reverse md:w-[65%] justify-evenly items-center">
        <Cards
          setPlayer={setPlayer}
          setDealer={setDealer}
          active={active}
          setActive={setActive}
        />
        <div className="flex md:flex-col mb-8 md:mb-0 gap-4">
          <label>
            <p className="text-sm text-white font-semibold">Dealer value</p>
            <div
              className={`px-4 py-2 text-xl rounded-sm shadow-xl w-24 bg-white cursor-pointer ${
                active === "dealer" && "outline outline-green-400 outline-2"
              }`}
              onClick={() => setActive("dealer")}
            >
              {dealer.value}
            </div>
          </label>
          <label>
            <p className="text-sm text-white font-semibold">Player value</p>
            <div
              className={`px-4 py-2 text-xl rounded-sm shadow-xl w-24 bg-white cursor-pointer ${
                active === "player" && "outline outline-green-400 outline-2"
              }`}
              onClick={() => setActive("player")}
            >
              {player.value}
            </div>
          </label>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <button className="b" onClick={recommend}>
            Recommend Move
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              next();
              setActive("dealer");
            }}
            className="b"
          >
            Next Hand
          </button>
        </div>
        <div>
          <button onClick={saveGame} className="b">
            {loading ? "Loading..." : "Save to Database"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
