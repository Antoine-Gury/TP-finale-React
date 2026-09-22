import { NavLink } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) => isActive ? 'active' : ''

export default function Header() {
  return (
    <header>
      <nav className="nav" aria-label="Navigation principale">
        <NavLink to="/" end className={navClass}>Accueil</NavLink>
        <NavLink to="/pokedex" className={navClass}>Pokédex</NavLink>
        <NavLink to="/favoris" className={navClass}>Favoris</NavLink>
        <NavLink to="/proposer" className={navClass}>Proposer</NavLink>
        <NavLink to="/about" className={navClass}>À propos</NavLink>
      </nav>
    </header>
  )
}
