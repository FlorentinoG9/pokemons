import Details from '../components/Details';
import List from '../components/List';
import PokemonsProvider from '../contexts/PokemonsContext';

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center py-2 md:flex-row md:items-start md:justify-start'>
			<PokemonsProvider>
				<List />
        <Details/>
			</PokemonsProvider>
		</div>
	);
};

export default Home;
