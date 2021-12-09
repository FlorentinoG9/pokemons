import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonsContext';
import Card from './Card';

export default function Details() {
	const { selected, evolution } = useContext(PokemonContext);
	return (
		<div className="flex flex-col md:flex-row md:justify-around w-7xl mx-auto my-2">
			<Card pokemon={selected} />
			<Card pokemon={evolution} evolution={true}/>
		</div>
	);
}
