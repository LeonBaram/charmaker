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
// dbref for root, pathref for specifying paths
const pathref = path => firebase.database().ref(path);
const dbref = pathref();

function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    pathref('characters').on('value', (response) => {
      const data = response.val();
      const tempCharacters = [];
      for (let key in data) {
        tempCharacters.push(new Character(data[key]));
      }
      setCharacters(tempCharacters);
    })
  }, []);

  return (
    <>
      <header>
        <h1>murderHobo</h1>
      </header>

      <h2>your characters. our website. let's make it happen.</h2>

      <button className="create">Create</button>

      <CharacterForm />

      <section className="characters">
        {characters.map(character =>
          <CharacterDisplay character={character} />
        )}
      </section>
    </>
  );
}

export default App;