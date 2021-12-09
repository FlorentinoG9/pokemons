import { createContext, useState } from 'react';
import dex from '../utils/pokemons';

export const PokemonContext = createContext();

export default function PokemonsProvider({ children }) {
	const [pokemons, setPokemons] = useState(dex);

	return (
		<PokemonContext.Provider value={{ pokemons }}>
			{children}
		</PokemonContext.Provider>
	);
}
