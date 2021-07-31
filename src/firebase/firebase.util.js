import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAt8nz8EEmsCcso00CaK1herWcl9gTOQgw",
    authDomain: "weebstore-539e2.firebaseapp.com",
    projectId: "weebstore-539e2",
    storageBucket: "weebstore-539e2.appspot.com",
    messagingSenderId: "880830118695",
    appId: "1:880830118695:web:9e7c06f37070a41a484702",
    measurementId: "G-12XLRC70HN"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;