import React, { useState } from "react";
import { rec } from "@/fu/recomendation";

function Box() {
  const [countState, setCountState] = useState(0);
  const [cardsDealth, setCardsDealth] = useState(0);
  const [dealer, setDealer] = useState("");
  const [player, setPlayer] = useState("");
  const [decks, setDecks] = useState(1);
  const [recomendation, setRecomendation] = useState(null);

  const next = () => {
    setDealer("")
    setPlayer("")
  }

  const count = (value) => {
    setCountState((prev) => prev + value);
    setCardsDealth((prev) => prev + 1);
    cardsDealth === 52 && setDecks((prev) => prev - 1);
  };

  const recommend = () => {
    const trueC = Math.round(countState / decks);
    const res = rec(parseInt(player), parseInt(dealer), trueC);
    res === undefined
      ? setRecomendation("No recomendation available")
      : setRecomendation(res.message);
  };
  return (
    <div className="w-[720px] mx-auto bg-black shadow-xl flex justify-evenly items-center p-3 h-[360px] mt-24">
      <div
        className={`absolute bg-orange-600 top-44 right-64 text-white h-8 flex items-center px-2 rounded-sm shadow-xl text-sm font-semibold ${
          !recomendation && "hidden"
        }`}
      >
        {recomendation}
      </div>
      <div>
        <label>
          <p className="text-sm text-white font-semibold">Decks to be dealth</p>
          <input
            type="number"
            className="px-4 py-1 rounded-sm shadow-xl w-24"
            min={1}
            max={10}
            value={decks}
            onChange={(e) => setDecks(e.target.value)}
          />
        </label>
        <label>
          <p className="text-sm text-white font-semibold">Dealer value</p>
          <input
            max={30}
            min={0}
            type="number"
            className="px-4 py-1 rounded-sm shadow-xl w-24"
            value={dealer}
            onChange={(e) => setDealer(e.target.value)}
          />
        </label>
        <label>
          <p className="text-sm text-white font-semibold">Player value</p>
          <input
            max={30}
            min={0}
            type="number"
            className="px-4 py-1 rounded-sm shadow-xl w-24"
            value={player}
            onChange={(e) => setPlayer(e.target.value)}
          />
        </label>
        <div>
          <button
            className="bg-white px-4 py-1 rounded-sm shadow-xl mt-5 font-semibold text-sm"
            onClick={recommend}
          >
            Recommend move
          </button>
        </div>
        <div>
          <button onClick={next} className="bg-white px-4 py-1 rounded-sm shadow-xl mt-5 font-semibold text-sm">
            next hand
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <p className="text-white text-lg my-3 font-semibold">
            Current Running-Count: {countState}
          </p>
          <p className=" text-white text-lg my-3 font-semibold">
            Cards Counted: {cardsDealth}
          </p>
          <p className=" text-white text-lg my-3 font-semibold">
            True Count: {countState == 0 ? 0 : Math.round(countState / decks)}
          </p>
        </div>
        <div className="flex flex-row justify-center gap-12">
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
    </div>
  );
}

export default Box;
