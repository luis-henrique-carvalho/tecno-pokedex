import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <p>{pokemon.type}</p>
    </div>
  );
};

export default PokemonCard;
