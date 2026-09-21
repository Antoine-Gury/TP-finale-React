import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { PokemonListItem, PokemonListResponse } from "../types/pokemon";


function getPokemonId(url: string): string {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
}


export function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur chargement');
        return res.json();
      })
      .then((data: PokemonListResponse) => setPokemons(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;


  return (
    <ul>
      {pokemons.map((p) => {
        const id = getPokemonId(p.url);
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;


        return (
          <li key={p.name}>
            <Link to={`/pokedex/${id}`}>
              <img src={imageUrl} alt={p.name} width={96} height={96} />
              <p>#{id} {p.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
