import { useEffect, useState } from 'react'
import type { PokemonListItem, PokemonListResponse } from '../types/pokemon'

type PokemonSummary = PokemonListItem & {
  types: string[]
}

type PokemonTypeResponse = {
  types: { type: { name: string } }[]
}

export function usePokemonList() {
  const [pokemons, setPokemons] = useState<PokemonSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadPokemons() {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
        if (!response.ok) throw new Error('Erreur chargement')

        const data: PokemonListResponse = await response.json()
        const pokemonsWithTypes = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailsResponse = await fetch(pokemon.url)
            if (!detailsResponse.ok) throw new Error('Erreur chargement')

            const details: PokemonTypeResponse = await detailsResponse.json()
            return {
              ...pokemon,
              types: details.types.map(({ type }) => type.name),
            }
          }),
        )

        setPokemons(pokemonsWithTypes)
      } catch (requestError) {
        setError(requestError instanceof Error ? requestError.message : 'Erreur chargement')
      } finally {
        setLoading(false)
      }
    }

    loadPokemons()
  }, [])

  return { pokemons, loading, error }
}
