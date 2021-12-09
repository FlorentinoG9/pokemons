import Details from '../components/Details';
import List from '../components/List';
import PokemonsProvider from '../contexts/PokemonsContext';

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center xl:flex-row xl:max-h-36 lg:items-start lg:justify-around'>
			<PokemonsProvider>
				<List />
        <Details/>
			</PokemonsProvider>
		</div>
	);
};

export default Home;
