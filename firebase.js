import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration -- from firebase console
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyAC4K9iCtCvh4f2JKpytbzJ-e64NYaNL5A',
	authDomain: "gopizza-c17f4.firebaseapp.com",
	databaseURL: "https://gopizza-c17f4.firebaseio.com",
	projectId: 'gopizza-c17f4',
	storageBucket: "gopizza-c17f4.appspot.com",
	messagingSenderId: xxxxxxxxx,
	appId: "gopizza-c17f4",
};

// Nome do projeto
// gopizza
// Código do projeto

// Número do projeto
// 1008040733183
// Local padrão dos recursos do GCP
// southamerica-east1
// Chave de API da Web

// Configurações públicas
// Essas configurações controlam instâncias do seu projeto que são mostradas ao público
// Nome exibido ao público
// project-1008040733183


// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(); // <--- our added firestore module
export default [Firebase, firestore];
