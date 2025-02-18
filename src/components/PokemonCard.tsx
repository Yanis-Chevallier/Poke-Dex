const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];
function PokemonCard({ pokemon }: { pokemon: { name: string; imgSrc?: string } }) {
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>Un Pokemon adorable</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
function PokemonList() {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
}
export default PokemonList;