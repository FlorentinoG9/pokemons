import { createContext, useState } from 'react';
import dex from '../utils/pokemons';

export const PokemonContext = createContext();

export default function PokemonsProvider({ children }) {
	const [pokemons, setPokemons] = useState(dex);
	const [selected, setSelected] = useState(null);
	const [evolution, setEvolution] = useState(null);

	const onClickHandler = (pokemon) => {
		if (!selected || selected.id !== pokemon.id) {
			setSelected(pokemon);
      setEvolution(null)
		} else {
			setSelected(null);
			setEvolution(null);
		}

	};

	const evolutionHandler = (id) => {
    const index = parseInt(id) - 1;
		setEvolution(pokemons[index]);
		console.log(evolution);
	};

	return (
		<PokemonContext.Provider
			value={{
				pokemons,
				onClickHandler,
				selected,
				evolution,
				evolutionHandler,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
}
