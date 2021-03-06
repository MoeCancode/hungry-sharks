import React from "react";

const Player2View = ({
  p1Cards,
  cardPlayedHandler,
  fullname,
  activePlayer,
  drawCardHandler,
  playedCard,
  p2Cards,
  info,
}) => {
  return (
    <>
      <div className="player1Deck" style={{ pointerEvents: "none" }}>
        <p className="playerDeckText text-orange-700">P1</p>
        {p1Cards.map((item, i) => (
          <div className="shadow-xl">
            <img
              key={i}
              className="Card"
              onClick={() => cardPlayedHandler(item)}
              src={require(`../assets/back.png`)}
              alt={`${fullname(item)}`}
            />
          </div>
        ))}
        {activePlayer === "P1"}
      </div>
      <br />
      <div
        className="middleInfo"
        style={activePlayer === "P1" ? { pointerEvents: "none" } : null}
      >
        <button
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-700 border-orange-700 bg-red-700 bg-opacity-40"
          disabled={activePlayer !== "P2"}
          onClick={drawCardHandler}
        >
          DRAW CARD
        </button>
        <div className="card w-96 bg-[#051222] text-neutral-content shadow-2xl bg-opacity-40">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-orange-700 text-2xl">Info</h2>
            <p className="text-gray-300 text-xl">{info}</p>
          </div>
        </div>
        {playedCard && (
          <div className="shadow-xl flex flex-col justify-center items-center">
            <img
              className="Card"
              src={require(`../assets/${playedCard}.png`)}
              alt={`${fullname(playedCard)}`}
            />
            <h3 className="text-orange-700 mt-3">{fullname(playedCard)}</h3>
          </div>
        )}
      </div>
      <br />
      <div
        className="player2Deck"
        style={activePlayer === "P2" ? null : { pointerEvents: "none" }}
      >
        <p className="playerDeckText text-orange-600">P2</p>
        {p2Cards.map((item, i) => (
          <div className="player1DeckCards shadow-xl">
            <img
              key={i}
              className="Card"
              onClick={() => {if(item !== "WC" && item !== "SG") {cardPlayedHandler(item)}}}
              src={require(`../assets/${item}.png`)}
              alt={`${fullname(item)}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Player2View;
