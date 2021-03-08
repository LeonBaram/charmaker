import { useEffect } from 'react';
import descriptions from '../data/descriptions';

function CharacterForm() {

    return (
        <form className='character-form'>
            <input type="text" name="name" id="name" />

            {Object.keys(descriptions).map(key => (
                // (key can be "dndclass", "race", etc)

                <select name={key} id={key}>

                    {Object.keys(descriptions[key]).map(subkey => (
                        // (subkey can be "fighter", "wizard", etc)

                        <option value={subkey}>{subkey}</option>
                    ))}
                </select>
            ))}
        </form>
    );
}

export default CharacterForm;