import { useEffect, useState } from 'react'
import type { PokemonDetail } from '../types/pokemon'

export function usePokemonDetails(id: string | undefined) {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    async function loadPokemonDetails() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) throw new Error('Pokémon introuvable')

        const data: PokemonDetail = await response.json()
        setPokemon(data)
      } catch (requestError) {
        setError(requestError instanceof Error ? requestError.message : 'Erreur chargement')
      }
    }

    loadPokemonDetails()
  }, [id])

  return { pokemon, error }
}
