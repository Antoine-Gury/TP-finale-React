import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Pokedex from './pages/Pokedex.tsx'
import PokemonDetails from './pages/PokemonDetails.tsx'
import { PokemonList } from './components/PokemonList';

function App() {
	return (
		<BrowserRouter>
			<div className="app-shell">
				<Header />
				<main className="content">
					<main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      					<h1>Pokédex — Projet React</h1>
      						<PokemonList />
    							</main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pokedex" element={<Pokedex />} />
					<Route path="/pokedex/:id" element={<PokemonDetails />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				</main>
			</div>
		</BrowserRouter>
	)
}

export default App
