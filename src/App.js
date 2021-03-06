// sass
import './styles/App.scss';
// data
import firebase from './data/firebase-configs';
import Character from './data/character';
// hooks
import { useEffect, useState } from 'react';
// components

// firebase aliases
// pathref for specifying paths, dbref for root
const pathref = path => firebase.database().ref(path);
const dbref = pathref();

function App() {

  // empty array to hold character objects (see Character.js)
  const [characters, setCharacters] = useState([]);

  const bepis = new Character({
    name: 'bepis',
    dndclass: 'wizard',
    race: 'human',
    background: 'sage',
    level: 19,
  });

  console.log('bepis:', bepis);
  
  const bepisJSON = bepis.toJSON();
  const bepis2 = new Character(bepisJSON);

  console.log('bepis2:',bepis2);

  return (
    <>
    </>
  );
}

export default App;
