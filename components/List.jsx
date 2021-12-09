import Image from 'next/image'
import pokemons from '../utils/pokemons'

export default function List() {
  return (
    <ul>
      {pokemons.map(pokemon => {
        return (
          <li key={pokemon.id}>
            <Image src={pokemon.img}/>
          </li>
        )
      })}
    </ul>
  )
}
