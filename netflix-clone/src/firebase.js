import firebase from 'firebase/app'

import 'firebase/firestore'

  
console.log('here')
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCUgMVy4B5gr8ygxKmGpYI_oeKbmvj7xNs",
  authDomain: "netflix-clone-jg-64c64.firebaseapp.com",
  projectId: "netflix-clone-jg-64c64",
  storageBucket: "netflix-clone-jg-64c64.appspot.com",
  messagingSenderId: "159055278371",
  appId: "1:159055278371:web:8b4938acbfa2b7b3389c96"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;