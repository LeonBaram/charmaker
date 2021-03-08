function CharacterDisplay({ character }) {

    return (
        <div className="character">
            <p>name: {character.name}</p>
            <p>level: {character.level}</p>
            <p>class: {character.dndclass.name}</p>
            <p>race: {character.race.name}</p>
            <p>background: {character.background.name}</p>
        </div>
    );
}

export default CharacterDisplay;