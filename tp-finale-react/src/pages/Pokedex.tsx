import { useState } from 'react';
import { PokemonList } from '../components/PokemonList'

export default function Pokedex() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const types = [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice',
    'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
    'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
  ];

  return (
    <section>
      <h1>Pokédex</h1>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Rechercher un Pokémon"
      />

      <select value={type} onChange={(event) => setType(event.target.value)}>
        <option value="">Tous les types</option>
        {types.map((pokemonType) => (
          <option key={pokemonType} value={pokemonType}>
            {pokemonType}
          </option>
        ))}
      </select>

      <PokemonList query={query} type={type} />
    </section>
  )
}
