// sass
import './styles/App.scss';
// firebase
import firebase from './firebase-configs.js';
// hooks
import { useEffect, useState } from 'react';
// classma
import Character from './Character.js';

// firebase aliases
// pathref for specifying paths, dbref for root
const pathref = path => firebase.database().ref(path);
const dbref = pathref();

function App() {

  // empty array to hold character objects (see Character.js)
  const [characters, setCharacters] = useState([]);

  return (
    <>
    </>
  );
}

export default App;
