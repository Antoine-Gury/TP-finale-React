# Pokédex

Application web réalisée avec React, TypeScript, Vite et React Router.
Elle permet de consulter des Pokémon depuis PokéAPI, de rechercher par nom, de filtrer par type et de consulter leurs détails.

## Fonctionnalités

- Liste des 50 premiers Pokémon
- Recherche par nom
- Filtre par type
- Page de détails avec une route dynamique
- Formulaire pour proposer un Pokémon
- Navigation avec lien actif
- Page 404

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm run dev
```

## Vérifications

```bash
npm run lint
npm run build
```

## Routes principales

- `/` : accueil
- `/pokedex` : liste et recherche des Pokémon
- `/pokedex/:id` : détails d'un Pokémon
- `/proposer` : formulaire de proposition
- `/about` : à propos
- Toute autre URL affiche la page 404

## API utilisée

- Liste : `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
- Détail : `https://pokeapi.co/api/v2/pokemon/{id}`

Les données sont chargées avec `useEffect` et les réponses utilisées sont typées avec TypeScript.

## Organisation

```text
src/
├── components/  # composants réutilisables
├── hooks/       # logique de chargement des données
├── pages/       # pages liées aux routes
├── types/       # types TypeScript
└── assets/      # images
```
