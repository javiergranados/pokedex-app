import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemon';
import { Pokemon, PokemonPaginatedResponse, SimplePokemon } from '../interfaces/pokemon';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1200';

const usePokemonList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const loadPokemonList = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(URL);
    const pokemons = resp.data.results.map(getPokemon);

    setPokemonList(pokemons);
    setIsLoading(false);
  };

  const getPokemon = (simplePokemon: SimplePokemon): Pokemon => {
    const urlSplitted = simplePokemon.url.split('/');
    const pokemonId = urlSplitted[urlSplitted.length - 2];

    return {
      id: pokemonId,
      name: simplePokemon.name,
      picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
    };
  };

  useEffect(() => {
    loadPokemonList();
  }, []);

  return { isLoading, pokemonList };
};

export { usePokemonList };
