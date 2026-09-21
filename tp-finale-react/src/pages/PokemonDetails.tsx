import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { PokemonDetail } from '../types/pokemon'

export default function PokemonDetails() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Pokémon introuvable')
        return response.json()
      })
      .then((data: PokemonDetail) => setPokemon(data))
      .catch((requestError: Error) => setError(requestError.message))
  }, [id])

  if (error) return <section><p>{error}</p><Link to="/pokedex">Retour au Pokédex</Link></section>
  if (!pokemon) return <section><p>Chargement...</p></section>

  return (
    <section>
      <h1>#{pokemon.id} {pokemon.name}</h1>
      <img src={pokemon.sprites.other?.['official-artwork']?.front_default ?? pokemon.sprites.front_default ?? ''} alt={pokemon.name} width={240} />
      <p>Types : {pokemon.types.map(({ type }) => type.name).join(', ')}</p>
      <p>Taille : {pokemon.height / 10} m</p>
      <p>Poids : {pokemon.weight / 10} kg</p>
      <h2>Statistiques</h2>
      <ul>{pokemon.stats.map(({ base_stat, stat }) => <li key={stat.name}>{stat.name} : {base_stat}</li>)}</ul>
      <h2>Capacités</h2>
      <p>{pokemon.abilities.map(({ ability }) => ability.name).join(', ')}</p>
      <h2>Attaques</h2>
      <p>{pokemon.moves.map(({ move }) => move.name).join(', ')}</p>
      <Link to="/pokedex">Retour au Pokédex</Link>
    </section>
  )
}