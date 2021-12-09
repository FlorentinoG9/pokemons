import Image from 'next/image';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonsContext';

export default function List() {
	const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);
	return (
			<ul className="flex flex-wrap">
        
				{pokemons.map((pokemon) => {
					return (
						<li key={pokemon.id} className="rounded-md hover:bg-gray-600 cursor-pointer">
							
              <Image src={pokemon.img}  width={100} height={100}/>
						</li>
					);
				})}
			</ul>
	);
}
