import React from 'react';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonsContext';

export default function Card(props) {
	const { pokemons } = useContext(PokemonContext);
	const {} = props;

	return <div></div>;
}
