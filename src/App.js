// data
import { dbref } from './data/firebase';
import Character from './data/character';
// hooks
import { useEffect, useState } from 'react';
// components
import CharacterForm from './components/CharacterForm';
import CharacterDisplay from './components/CharacterDisplay';
// sass
import './styles/App.scss';

function App() {

  const [characters, setCharacters] = useState([]);

  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    dbref.characters.on('value', (response) => {
      const data = response.val();
      const tempCharacters = [];
      let character;
      for (let key in data) {
        character = new Character(data[key]);
        character.firebaseID = key;
        tempCharacters.push(character);
      }
      setCharacters(tempCharacters);
    })
  }, []);

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="heading-block">
            <h1>murderHobo</h1>
            <h2>a simple character creator</h2>
          </div>
          <button
            className={`create${formVisible? ' pressed' : ''}`}
            onClick={() => {
              setFormVisible(true);
              console.log(formVisible);
            }}
          >
            Create +
          </button>
        </div>
      </header>
      <main>
        <div className="wrapper">

          <CharacterForm 
            formVisible={formVisible} 
            setFormVisible={setFormVisible}
          />

          <section className="characters">
            {characters.map(character =>
              <CharacterDisplay character={character} />
            )}
          </section>
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>made at <a href="https://junocollege.com/">Juno</a></p>
          <p className="dnd">Dungeons and Dragons belongs to <a href="https://company.wizards.com/en">Wizard of the Coast</a>. <br />
        check out their D&D website, <a href="https://www.dndbeyond.com/">dndbeyond</a>.
        </p>
        </div>
      </footer>
    </>
  );
}

export default App;