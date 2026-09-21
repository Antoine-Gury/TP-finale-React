import { Link, useParams } from 'react-router-dom'

export default function PokemonDetails() {
  const { id } = useParams()

  return (
    <section>
      <h1>Détail du Pokémon</h1>
      <p>L’identifiant du Pokémon sélectionné est : {id}</p>
      <p>Les données seront affichées ici par ton binôme.</p>
      <Link to="/pokedex">Retour au Pokédex</Link>
    </section>
  )
}