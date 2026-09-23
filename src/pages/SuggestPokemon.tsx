import { useState, type FormEvent } from 'react'

const pokemonTypes = [
  'normal', 'fire', 'water', 'electric', 'grass', 'ice',
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug',
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
]

export default function SuggestPokemon() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(false)

    if (!pokemonTypes.includes(type)) {
      setError('Sélectionne un type valide dans la liste.')
      return
    }

    setError('')
    setSubmitted(true)
    setName('')
    setType('')
    setDescription('')
  }

  return (
    <section>
      <h1>Proposer un Pokémon</h1>
      <p>Remplis le formulaire pour proposer un nouveau Pokémon.</p>

      <form onSubmit={handleSubmit} className="pokemon-form">
        <label htmlFor="pokemon-name">Nom du Pokémon</label>
        <input
          id="pokemon-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          minLength={2}
          placeholder="Exemple : Pikachu"
        />

        <label htmlFor="pokemon-type">Type</label>
        <select
          id="pokemon-type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          required
        >
          <option value="">Choisir un type</option>
          {pokemonTypes.map((pokemonType) => (
            <option key={pokemonType} value={pokemonType}>
              {pokemonType}
            </option>
          ))}
        </select>

        <label htmlFor="pokemon-description">Description</label>
        <textarea
          id="pokemon-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
          minLength={10}
          rows={5}
          placeholder="Décris ce Pokémon..."
        />

        <button type="submit">Envoyer la proposition</button>
      </form>

      {error && <p className="form-error" role="alert">{error}</p>}
      {submitted && <p className="form-success" role="status">Ta proposition a bien été enregistrée.</p>}
    </section>
  )
}
