import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Pokedex from './pages/Pokedex.tsx'
import PokemonDetails from './pages/PokemonDetails.tsx'
import SuggestPokemon from './pages/SuggestPokemon.tsx'

function App() {
	return (
		<BrowserRouter>
			<div className="app-shell">
				<Header />
				<main className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pokedex" element={<Pokedex />} />
					<Route path="/pokedex/:id" element={<PokemonDetails />} />
					<Route path="/proposer" element={<SuggestPokemon />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App
