import { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import db from '../firebase/config';

export const PokemonContext = createContext();

export default function PokemonsProvider({ children }) {
	const [pokemons, setPokemons] = useState([]);
	const [selected, setSelected] = useState(null);
	const [evolution, setEvolution] = useState(null);

	useEffect(() => {
		const colRef = collection(db, 'pokemons');
		const q = query(colRef, orderBy('id', 'asc'));

		const dex = onSnapshot(q, (snap) => {
			setPokemons(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});

		return dex;
	}, []);

	const onClickHandler = (pokemon) => {
		if (!selected || selected.id !== pokemon.id) {
			setSelected(pokemon);
			setEvolution(null);
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
				evolutionHandler,
				selected,
				evolution,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
}
