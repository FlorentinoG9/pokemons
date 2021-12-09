import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import config from '../firebase/config';

initializeApp(config);

const db = getFirestore();

const colRef = collection(db, 'pokemons');

const pokemons = getDocs(colRef).then((snap) => {
	let dex = [];

	snap.forEach((doc) => {
		dex.push({
			id: doc.id,
			...doc.data(),
		});
	});

	dex.sort((a, b) => a.id - b.id);

	console.log(dex);
	return dex;
})
.catch(err => {
  console.log(err);
})

export default pokemons;
