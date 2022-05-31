export interface PokemonPaginatedResponse {
  count: number;
  next: string;
  previous: null;
  results: SimplePokemon[];
}

export interface SimplePokemon {
  name: string;
  url: string;
}

export interface Pokemon {
  id: string;
  name: string;
  picture: string;
  color?: string;
}
