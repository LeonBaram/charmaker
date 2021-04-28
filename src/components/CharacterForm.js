// hooks
import { Fragment, useState } from 'react';
// data
import { dbref } from '../data/firebase';
import descriptions from '../data/descriptions';
import { MAX_LEVEL, randomCharacterInfo } from '../data/character';
// 3rd party
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

// const generateDropdown = (strings, vals = strings) => strings.map(
//   (str, i) => <option value={vals[i]}>{str}</option>
// );

function CharacterForm({ formVisible, setFormVisible }) {

  /* 
  a characterInfo object (see src/data/character.js),
  whose fields update live with user dropdown selections.
  if the user submits the form, this object is pushed to the database.
  for convenience and humor reasons, initial states are set to random values.
  */
  const [characterInfo, setCharacterInfo] = useState(randomCharacterInfo());

  const uploadCharacter = () => dbref.characters.push(characterInfo);

  return (
    <Modal
      open={formVisible}
      onClose={() => setFormVisible(false)}
      classNames={{ modal: 'modal', overlay: 'overlay' }}
    >
      <section className='character-form'>

        <h2>A New Murder Hobo Rises</h2>
        <form>

          <label htmlFor="name">Name:</label>

          <input
            required
            type="text"
            id="name"
            className="name"
            placeholder="Gary Gygax"

            // bindings
            value={characterInfo.name}
            onChange={e => setCharacterInfo(
              { ...characterInfo, name: e.target.value }
            )}
          />

          <label htmlFor="level">Level (1-{MAX_LEVEL}):</label>

          <input
            required
            type="number"
            id="level"
            className="level"
            max="20"
            min="1"
            placeholder="1"

            // bindings
            value={characterInfo.level}
            onChange={e => setCharacterInfo(
              { ...characterInfo, level: e.target.value }
            )}
          />

          {/* 1.for each category (class, race, etc), generate a dropdown
              2.for each dropdown, generate a list of options 
                (human, elf, etc) 
              3.for each category, generate a description of the 
                currently selected dropdown option */}
          {Object.keys(descriptions).map(category => (
            <Fragment key={category}>
              <label htmlFor={category}>
                {/* switch "dndclass" to "class" when presenting to user */}
                {category === 'dndclass' ? 'class' : category}:
              </label>

              <div className="grid-cell">
                <select
                  required
                  id={category}

                  // bindings
                  value={characterInfo[category]}
                  onChange={e => setCharacterInfo(
                    { ...characterInfo, [category]: e.target.value }
                  )}
                >

                  {/* 
                1. access descriptions[category] (e.g. descriptions['race'])
                2. turn the keys found there into an array 
                (e.g. ['human', 'elf', 'dwarf', 'halfling']) 
                3. sort that array (returns sorted array)
                4. display each element as option in dropdown
                */}
                  {Object.keys(descriptions[category]).sort().map(
                    element => (
                      // (element can be 'human', 'elf', etc)
                      <option value={element} key={element}>
                        {element}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* e.g. descriptions['race']['elf'] */}
              <p>{descriptions[category][characterInfo[category]]}</p>
            </Fragment>
          ))}

        </form>
        <button
          id="save"
          className="save"
          onClick={() => {
            if (characterInfo.name) {
              uploadCharacter();
              setCharacterInfo(randomCharacterInfo());
              setFormVisible(false);
            }
          }}
        >
          Save
        </button>
      </section>
    </Modal>
  );
}

export default CharacterForm;