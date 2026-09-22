import { useState } from 'react';
import { PokemonList } from '../components/PokemonList'

export default function Pokedex() {
  const [query, setQuery] = useState('');

  return (
    <section>
      <h1>Pokédex</h1>

      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Rechercher un Pokémon"
      />

      <PokemonList query={query} />
    </section>
  )
}
