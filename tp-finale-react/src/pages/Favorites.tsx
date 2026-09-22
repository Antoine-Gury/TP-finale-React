import { PokemonList } from '../components/PokemonList'

export default function Favorites() {
  return (
    <section>
      <h1>Mes favoris</h1>
      <PokemonList favoritesOnly />
    </section>
  )
}