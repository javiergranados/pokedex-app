import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemon';
import { PokemonDetails } from '../interfaces/pokemonDetails';

const URL = 'https://pokeapi.co/api/v2/pokemon/';

const usePokemonDetails = (id: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails | null>(null);

  const loadPokemonDetails = async () => {
    const resp = await pokemonApi.get<PokemonDetails>(`${URL}${id}`);
    setPokemonDetails(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonDetails();
  }, []);

  return { isLoading, pokemonDetails };
};

export { usePokemonDetails };
