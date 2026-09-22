import { Link } from 'react-router-dom'
import { usePokemonList } from '../hooks/usePokemonList'
import { useFavorites } from '../hooks/useFavorites'

function getPokemonId(url: string): string {
  const parts = url.split('/').filter(Boolean)
  return parts[parts.length - 1]
}

export function PokemonList({
  query = '',
  type = '',
  favoritesOnly = false,
}: {
  query?: string
  type?: string
  favoritesOnly?: boolean
}) {
  const { pokemons, loading, error } = usePokemonList()
  const { favorites, toggleFavorite } = useFavorites()

  if (loading) return <p>Chargement...</p>
  if (error) return <p>{error}</p>

  const filteredPokemons = pokemons.filter((pokemon) =>
    {
      const id = getPokemonId(pokemon.url)
      const isFavorite = favorites.includes(id)
      const matchesName = pokemon.name.toLowerCase().includes(query.toLowerCase())
      const matchesType = type === '' || pokemon.types.includes(type)

      return (!favoritesOnly || isFavorite) && matchesName && matchesType
    },
  )

  return (
    <ul>
      {filteredPokemons.map((p) => {
        const id = getPokemonId(p.url)
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
          <li key={p.name}>
            <Link to={`/pokedex/${id}`}>
              <img src={imageUrl} alt={p.name} width={96} height={96} />
              <p>#{id} {p.name}</p>
            </Link>
            <button onClick={() => toggleFavorite(id)}>
              {favorites.includes(id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
