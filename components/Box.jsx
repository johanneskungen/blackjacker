import React, { useRef, useState } from "react";
import { rec } from "@/fu/recomendation";
import toast, { Toaster } from "react-hot-toast";
import Cards from "./Cards";

function Box() {
  const dRef = useRef();
  const [countState, setCountState] = useState(0);
  const [cardsDealth, setCardsDealth] = useState(0);
  const [dealer, setDealer] = useState(0);
  const [player, setPlayer] = useState(0);
  const [decks, setDecks] = useState(1);
  const [recomendation, setRecomendation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("dealer");
  const [popup, setPopup] = useState(false)

  const next = () => {
    setDealer(0);
    setPlayer(0);

    setPopup(true)

  };

  const count = (value) => {
    setCountState((prev) => prev + value);
    setCardsDealth((prev) => prev + 1);
    cardsDealth === 52 && setDecks((prev) => prev - 1);
  };

  const recommend = () => {
    const trueC = Math.round(countState / decks);
    const res = rec(parseInt(player), parseInt(dealer), trueC, 0);
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
        countState,
        dealer,
        player,
        cards: cardsDealth,
        trueC: Math.round(countState / decks),
      }),
    });
    const statusMessage = await response.json();
    toast(statusMessage.message);
    setLoading(false);
  };

  return (
    <div className="w-full mx-auto flex flex-col justify-evenly pt-44 items-center p-3 h-[360px] box">
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
      <div className={`${popup ? "block" : "hidden"} absolute w-screen h-screen bg-black/70 top-0 left-0 flex items-center justify-center`}>
        <div className="w-96 h-44 bg-white rounded-md">
          <p className="p-2 text-center font-semibold">Did you win the hand?</p>
          <div className="flex justify-center gap-12">
            <button onClick={() => setPopup(false)}>yes</button>
            <button onClick={() => setPopup(false)}>no</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[65%] justify-evenly">
        <Cards setPlayer={setPlayer} setDealer={setDealer} active={active} />
        <div className="flex flex-col gap-4">
          <label>
            <p className="text-sm text-white font-semibold">Dealer value</p>
            <div
              className={`px-4 py-1 rounded-sm shadow-xl w-24 bg-white cursor-pointer ${
                active === "dealer" && "outline outline-green-400 outline-2"
              }`}
              onClick={() => setActive("dealer")}
            >
              {dealer}
            </div>
          </label>
          <label>
            <p className="text-sm text-white font-semibold">Player value</p>
            <div
              className={`px-4 py-1 rounded-sm shadow-xl w-24 bg-white cursor-pointer ${
                active === "player" && "outline outline-green-400 outline-2"
              }`}
              onClick={() => setActive("player")}
            >
              {player}
            </div>
          </label>
        </div>
        <div className="flex flex-col justify-evenly gap-2 h-44">
          <button className="cbutton" onClick={() => count(1)}>
            2, 3, 4, 5, 6
          </button>
          <button className="cbutton" onClick={() => count(0)}>
            7, 8, 9
          </button>
          <button className="cbutton" onClick={() => count(-1)}>
            10, J, Q, K, A
          </button>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div>
          <button
            className="bg-white px-5 py-2 rounded-sm w-44 button mt-5 font-semibold text-sm"
            onClick={recommend}
          >
            Recommend Move
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              next()
              setActive("dealer")
            }}
            className="bg-white px-5 py-2 rounded-sm w-44 button mt-5 font-semibold text-sm"
          >
            Next Hand
          </button>
        </div>
        <div>
          <button
            onClick={saveGame}
            className="bg-white px-5 py-2 rounded-sm w-44 mt-5 font-semibold text-sm button"
          >
            {loading ? "Loading..." : "Save to Database"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
