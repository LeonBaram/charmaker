import { useEffect } from 'react';
import Character from '../data/character';
import descriptions from '../data/descriptions';
import {MAX_LEVEL} from '../data/character';

function CharacterForm() {

    return (
        <form className='character-form'>

            <label htmlFor="name" className="sr-only">Name:</label>
            <input type="text" id="name" class="name" />

            <label htmlFor="level" className="sr-only">Level (between 1 and {MAX_LEVEL}):</label>
            <input type="number" id="level" class="level" />

            {/* generate dropdowns from predefined list of classes/races/etc */}
            {Object.keys(descriptions).map(key => (
                // (key can be "dndclass", "race", etc)

                <select name={key} id={key}>

                    {Object.keys(descriptions[key]).map(subkey => (
                        // (subkey can be "fighter", "wizard", etc)

                        <option value={subkey}>{subkey}</option>
                    ))}
                </select>
            ))}

            <button id="cancel" class="cancel">Cancel</button>
            <button id="save" className="save">Save</button>

        </form>
    );
}

export default CharacterForm;