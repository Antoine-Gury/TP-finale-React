export interface PokemonListItem {
  name: string;
  url: string;
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


export interface PokemonDetail {
  url: string;
 
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonTypeInfo[];
}
