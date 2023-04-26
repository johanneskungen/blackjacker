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

function Cards({ setPlayer, setDealer, active, setActive, w }) {
  const updateCard = (int, aces) => {
    switch (active) {
      case "dealer":
        setDealer((prev) => ({
          value: prev.value + int,
        }));
        setActive("player");
        break;
      case "player":
        setPlayer((prev) => ({
          value: prev.value + int,
          ace: aces ? prev.ace + aces : prev.ace,
        }));
        break;
    }
  };

  const cardSize = w.v < 490 ? "60" : "70"
  return (
    <main className="text-white flex flex-col items-center">
      <div className="flex">
        <GiCard2Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(2)}
        />
        <GiCard3Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(3)}
        />
        <GiCard4Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(4)}
        />
        <GiCard5Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(5)}
        />
      </div>
      <div className="flex">
        <GiCard6Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(6)}
        />
        <GiCard7Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(7)}
        />
        <GiCard8Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(8)}
        />
        <GiCard9Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(9)}
        />
      </div>
      <div className="flex">
        <GiCard10Hearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardJackHearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardQueenHearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardKingHearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(10)}
        />
      </div>
      <div>
        <GiCardAceHearts
          size={cardSize}
          className="card"
          onClick={() => updateCard(11, 1)}
        />
      </div>
    </main>
  );
}

export default Cards;
