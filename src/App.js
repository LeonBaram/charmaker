// sass
import './styles/App.scss';
// data
import firebase from './data/firebase';
import Character from './data/character';
// hooks
import { useEffect, useState } from 'react';
// components
import CharacterForm from './components/CharacterForm';
import CharacterDisplay from './components/CharacterDisplay';

// firebase aliases
// pathref for specifying paths, dbref for root
const pathref = path => firebase.database().ref(path);
const dbref = pathref();


function App() {
  
  useEffect(() => {
    dbref.on('value', (data) => {
  
    })
  }, []);

  const gary = new Character({
    name: 'gary',
    level: 5,
    race: 'human',
    dndclass: 'wizard',
    background: 'criminal'
  });

  return (
    <>
    <CharacterForm/>
    </>
  );
}

export default App;