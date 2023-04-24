import {
  GiCardAceHearts,
  GiCardKingHearts,
  GiCardQueenHearts,
  GiCardJackHearts,
  GiCard10Hearts,
  GiCard9Hearts,
  GiCard8Hearts,
  GiCard7Hearts,
  GiCard6Hearts,
  GiCard5Hearts,
  GiCard4Hearts,
  GiCard3Hearts,
  GiCard2Hearts,
} from "react-icons/gi";

import React from "react";

function Cards({ setPlayer, setDealer, active, setActive }) {
  const updateCard = (int, aces) => {
    switch (active) {
      case "dealer":
        setDealer((prev) => ({
          value: prev.value + int,
        }));
        setActive("player")
        break;
      case "player":
        setPlayer((prev) => ({
          value: prev.value + int,
          ace: aces ? prev.ace + aces : prev.ace
        }));
        break;
    }
  };
  return (
    <main className="text-white flex flex-col items-center">
      <div className="flex">
        <GiCard2Hearts
          size={60}
          className="card"
          onClick={() => updateCard(2)}
        />
        <GiCard3Hearts
          size={60}
          className="card"
          onClick={() => updateCard(3)}
        />
        <GiCard4Hearts
          size={60}
          className="card"
          onClick={() => updateCard(4)}
        />
        <GiCard5Hearts
          size={60}
          className="card"
          onClick={() => updateCard(5)}
        />
      </div>
      <div className="flex">
        <GiCard6Hearts
          size={60}
          className="card"
          onClick={() => updateCard(6)}
        />
        <GiCard7Hearts
          size={60}
          className="card"
          onClick={() => updateCard(7)}
        />
        <GiCard8Hearts
          size={60}
          className="card"
          onClick={() => updateCard(8)}
        />
        <GiCard9Hearts
          size={60}
          className="card"
          onClick={() => updateCard(9)}
        />
      </div>
      <div className="flex">
        <GiCard10Hearts
          size={60}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardJackHearts
          size={60}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardQueenHearts
          size={60}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardKingHearts
          size={60}
          className="card"
          onClick={() => updateCard(10)}
        />
      </div>
      <div>
        <GiCardAceHearts
          size={60}
          className="card"
          onClick={() => updateCard(11, 1)}
        />
      </div>
    </main>
  );
}

export default Cards;
