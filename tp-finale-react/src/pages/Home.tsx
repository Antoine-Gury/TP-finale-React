import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Bienvenue sur notre Pokédex</h1>
      <p>Découvrez nos Pokémons.</p>
      <Link to="/pokedex">Voir les Pokémons</Link>
    </section>
  )
}
