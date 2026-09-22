import { Link } from "react-router-dom";
import { usePokemonList } from '../hooks/usePokemonList'


function getPokemonId(url: string): string {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
}


export function PokemonList({ query = '', type = '' }: { query?: string; type?: string }) {
  const { pokemons, loading, error } = usePokemonList()


  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase()) &&
    (type === '' || pokemon.types?.includes(type))
  );

  return (
    <ul>
      {filteredPokemons.map((p) => {
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
