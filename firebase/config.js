import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyAAyD2ExZm22rgjwDKsCKetZndhIz5C8bM',
	authDomain: 'estudio-cactus-backend-test.firebaseapp.com',
	projectId: 'estudio-cactus-backend-test',
	storageBucket: 'estudio-cactus-backend-test.appspot.com',
	messagingSenderId: '817399094377',
	appId: '1:817399094377:web:ea6c3a4e77bd909f4996f8',
};

initializeApp(config);

const db = getFirestore()

export default db;
