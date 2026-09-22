export interface PokemonListItem {
  name: string;
  url: string;
  types?: string[];
}


export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}


export interface PokemonTypeInfo {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}


export interface PokemonSprites {
  front_default: string | null;
  other?: {
    'official-artwork'?: {
      front_default: string | null;
    };
  };
}

export interface PokemonStatInfo {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonAbilityInfo {
  ability: {
    name: string;
  };
}


export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonTypeInfo[];
  stats: PokemonStatInfo[];
  abilities: PokemonAbilityInfo[];
  moves: { move: { name: string } }[];
}
