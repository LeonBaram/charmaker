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
        <div className="wrapper">
          <h1>murderHobo</h1>
        </div>
        <hr />
        <div className="wrapper">
          <h2>the world's simplest D&D character creator</h2>
          <button className="create">Create</button>
        </div>
      </header>
      <main>
      <CharacterForm />

      <section className="characters">
        {characters.map(character =>
          <CharacterDisplay character={character} />
        )}
      </section>
      </main>
      <footer>
        <hr/>
        <p>made at <a href="https://junocollege.com/">Juno</a></p>
        <p>Dungeons and Dragons belongs to <a href="https://company.wizards.com/en">Wizard of the Coast</a>. <br/> 
        check out their D&D website, <a href="https://www.dndbeyond.com/">dndbeyond</a>.
        </p>
      </footer>
    </>
  );
}

export default App;