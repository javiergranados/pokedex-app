import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemon';
import { Pokemon, PokemonPaginatedResponse, SimplePokemon } from '../interfaces/pokemon';

const INITIAL_URL = 'https://pokeapi.co/api/v2/pokemon?limit=40';

const usePokemonPaginated = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const nextUrl = useRef(INITIAL_URL);

  const loadPokemons = async () => {
    setIsLoading(true);
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextUrl.current);
    nextUrl.current = resp.data.next;

    const pokemons = resp.data.results.map(getPokemon);
    setPokemonList([...pokemonList, ...pokemons]);
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
    loadPokemons();
  }, []);

  return { isLoading, pokemonList, loadPokemons };
};

export { usePokemonPaginated };
