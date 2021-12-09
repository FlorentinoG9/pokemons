import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import config from '../firebase/config';

initializeApp(config);

const db = getFirestore();

const colRef = collection(db, 'pokemons');


const dex = [];

getDocs(colRef).then((snap) => {

	snap.forEach((doc) => {
		dex.push({
			id: doc.id,
			...doc.data(),
		});
	});

	dex.sort((a, b) => a.id - b.id);

});

export default dex;


