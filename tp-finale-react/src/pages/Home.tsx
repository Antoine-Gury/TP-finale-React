import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Bienvenue sur notre application</h1>
      <p>Découvrez nos films et gérez votre sélection de favoris.</p>
      <Link to="/movies">Voir les films</Link>
    </section>
  )
}
