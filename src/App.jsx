import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemons = [
    {
      id: 1,
      name: "Bulbasaur",
      type: "Grass",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      id: 2,
      name: "Charmander",
      type: "Fire",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    },
    {
      id: 3,
      name: "Squirtle",
      type: "Water",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    },
  ];
  return (
    <div className="App">
      <h1>My Pokemons</h1>
      <div className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
