import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAb0XS0KGqRqfb3CYb7IN_rRZRv2kHpN_s",
    authDomain: "portfolio-c648b.firebaseapp.com",
    projectId: "portfolio-c648b",
    storageBucket: "portfolio-c648b.appspot.com",
    messagingSenderId: "485234004352",
    appId: "1:485234004352:web:1ef4fd4a56ff7e20377165"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase alias
const pathref = path => firebase.database().ref(path);

// static aliases for pathref (alias^2)
const dbref = {
  root: pathref(),
  characters: pathref('characters'),
}

export default firebase;
export { dbref, pathref };