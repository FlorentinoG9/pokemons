import List from '../components/List';
import PokemonsProvider from '../contexts/PokemonsContext';

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<PokemonsProvider>
				<List />
        
			</PokemonsProvider>
		</div>
	);
};

export default Home;
