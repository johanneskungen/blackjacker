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

function Cards({ setPlayer, setDealer, active }) {
  const updateCard = (int) => {
    switch (active) {
      case "dealer":
        setDealer((prev) => prev + int);
        break;
      case "player":
        setPlayer((prev) => prev + int);
        break;
    }
  };
  return (
    <main className="text-white flex flex-col items-center">
      <div className="flex">
        <GiCard2Hearts
          size={40}
          className="card"
          onClick={() => updateCard(2)}
        />
        <GiCard3Hearts
          size={40}
          className="card"
          onClick={() => updateCard(3)}
        />
        <GiCard4Hearts
          size={40}
          className="card"
          onClick={() => updateCard(4)}
        />
        <GiCard5Hearts
          size={40}
          className="card"
          onClick={() => updateCard(5)}
        />
      </div>
      <div className="flex">
        <GiCard6Hearts
          size={40}
          className="card"
          onClick={() => updateCard(6)}
        />
        <GiCard7Hearts
          size={40}
          className="card"
          onClick={() => updateCard(7)}
        />
        <GiCard8Hearts
          size={40}
          className="card"
          onClick={() => updateCard(8)}
        />
        <GiCard9Hearts
          size={40}
          className="card"
          onClick={() => updateCard(9)}
        />
      </div>
      <div className="flex">
        <GiCard10Hearts
          size={40}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardJackHearts
          size={40}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardQueenHearts
          size={40}
          className="card"
          onClick={() => updateCard(10)}
        />
        <GiCardKingHearts
          size={40}
          className="card"
          onClick={() => updateCard(10)}
        />
      </div>
      <div>
        <GiCardAceHearts
          size={40}
          className="card"
          onClick={() => updateCard(11)}
        />
      </div>
    </main>
  );
}

export default Cards;
