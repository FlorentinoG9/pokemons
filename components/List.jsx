import Image from 'next/image';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonsContext';

export default function List() {
	const { pokemons, onClickHandler } = useContext(PokemonContext);

	return (
		<ul className='flex flex-wrap justify-center overflow-hidden overflow-y-scroll max-h-48 xl:w-80 xl:max-h-screen lg:justify-start'>
			{pokemons.map((pokemon) => {
				return (
					<li
						key={pokemon.id}
						className='rounded-md hover:bg-gray-600 focus:bg-gray-900'
					>
						<button onClick={() => onClickHandler(pokemon)}>
							<Image src={pokemon.img} width={90} height={90} />
						</button>
					</li>
				);
			})}
		</ul>
	);
}
