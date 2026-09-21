import { Link } from 'react-router-dom'

export default function Pokedex() {
  return (
    <section>
      <h1>Pokédex</h1>
      <p>La liste des Pokémon sera affichée ici.</p>
      <Link to="/pokedex/25">Voir un détail de Pokémon</Link>
    </section>
  )
}
