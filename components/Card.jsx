import Image from 'next/image';
import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonsContext';

export default function Card({ pokemon, evolution = true }) {
	const { evolutionHandler } = useContext(PokemonContext);
	return (
		<>
			{pokemon && (
				<div className='flex flex-col m-6'>
					<div className='bg-gradient-to-tl flex flex-col items-center from-blue-400 rounded-md to-blue-900 h-96 mb-5  border-white border '>
						{pokemon.img && (
							<Image src={pokemon.img} width='150' height='150' />
						)}
						<div className='bg-white text-black flex flex-col rounded-md justify-between h-60 w-72 -my-10 px-4 py-10 m-3'>
							<p className='self-center text-lg'>{pokemon.name}</p>
							<div className='self-center'>
								{pokemon.type.map((item, idx) => {
									return (
										<span
											key={idx}
											className='border-red-600 border text-red-600 text-sm font-thin rounded-md px-2 mx-1'
										>
											{item}
										</span>
									);
								})}
							</div>
							<ul>
								<li>Height: {pokemon.height}</li>
								<li>Weight: {pokemon.weight}</li>
								<li>
									Weaknesses:
									{pokemon.weaknesses.map((weakness, idx) =>
										idx > 0 ? ', ' + weakness : ' ' + weakness,
									)}
								</li>
							</ul>
						</div>
					</div>

					{evolution && (
						<div className='flex border-t justify-around'>
							{pokemon.prev_evolution &&
								pokemon.prev_evolution.map(({ num, name }) => {
									return (
										<button
											className='text-sm hover:text-blue-500'
											key={num}
											onClick={() => evolutionHandler(num)}
										>
											prev evolution
											<span className='text-lg block'>{name}</span>
										</button>
									);
								})}

							{pokemon.next_evolution &&
								pokemon.next_evolution.map(({ num, name }) => {
									return (
										<button
											className='text-sm hover:text-blue-500'
											key={num}
											onClick={() => evolutionHandler(num)}
										>
											next evolution
											<span className='text-lg block'>{name}</span>
										</button>
									);
								})}
						</div>
					)}
				</div>
			)}

			{!pokemon && <Image src='/pokeball.svg' width={100} height={100} />}
		</>
	);
}
