// hooks
import { useState } from 'react';
// data
import { dbref } from '../data/firebase';
import descriptions from '../data/descriptions';
import { MAX_LEVEL } from '../data/character';
// utils
import rand from '../utils/rand';
// 3rd party
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function CharacterForm({ formVisible, setFormVisible }) {

  // generate random default values for each characterInfo field (assumed to be same as form fields)
  const defaultValues = {
    name: '',
    level: Math.ceil(Math.random() * MAX_LEVEL),
  };
  let keyArray;
  for (let category in descriptions) {

    keyArray = Object.keys(descriptions[category]);
    defaultValues[category] = rand(...keyArray);
  }

  /* 
  a characterInfo object (see src/data/character.js),
  whose fields update live with user dropdown selections.
  if the user submits the form, this object is pushed to the database.
  */
  const [characterInfo, setCharacterInfo] = useState(defaultValues);

  const uploadCharacter = () => dbref.characters.push(characterInfo);

  return (
    <Modal
      open={formVisible}
      onClose={() => setFormVisible(false)}
      classNames={{ modal: 'modal', overlay: 'customOverlay' }}
    >
      <section className='character-form'>

        <h2>A New Murder Hobo Rises</h2>
        <hr />
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

          <label htmlFor="level">Level (1 - {MAX_LEVEL}):
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
          </label>

          {/* 1.for each category (class, race, etc), generate a dropdown
              2.for each dropdown, generate a list of options 
                (human, elf, etc) 
              3.for each category, generate a description of the 
                currently selected dropdown option */}
          {Object.keys(descriptions).map(category => (
            // loops through 1st layer of descriptions -- dndclass, race, etc
            <>
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
                      <option value={element}>
                        {element}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* e.g. descriptions['race']['elf'] */}
              <p>{descriptions[category][characterInfo[category]]}</p>
            </>
          ))}

          <button
            id="cancel"
            className="cancel"
          >
            Cancel
                    </button>
          <button
            id="save"
            className="save"
            onClick={uploadCharacter}
          >
            Save
                    </button>
        </form>
      </section>
    </Modal>
  );
}

export default CharacterForm;