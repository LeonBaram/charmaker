import { useEffect, useState } from 'react';
import Character from '../data/character';
import descriptions from '../data/descriptions';
import { MAX_LEVEL } from '../data/character';

function CharacterForm() {

    const [charRef, setCharRef] = useState({});

    const uploadCharacter = () => console.log('hi');

    return (
        <form className='character-form'>

            <h2>A New Murder Hobo Rises</h2>
            <hr />

            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="name"
                className="name"
                placeholder="Gary Gygax"
                required
            />

            <label htmlFor="level">Level (1 - {MAX_LEVEL}):</label>
            <input
                type="number"
                id="level"
                className="level"
                max="20"
                min="1"
                placeholder="1"
                required
            />

            {/* 1. for each category (class, race, etc), generate a dropdown
                    2. for each dropdown, generate a list of options 
                    (human, elf, etc) */}
            {Object.keys(descriptions).map(category => (
                // (key can be "dndclass", "race", etc)

                <>
                    <label htmlFor={category}>{category}</label>
                    <select name={category} id={category} required>

                        {Object.keys(descriptions[category]).map(subkey => (
                            // (subkey can be "fighter", "wizard", etc)

                            <option value={subkey}>{subkey}</option>
                        ))}
                    </select>
                </>
            ))}

            <button id="cancel" className="cancel">Cancel</button>
            <button id="save" className="save" onClick={uploadCharacter}>
                Save
            </button>

        </form>
    );
}

export default CharacterForm;