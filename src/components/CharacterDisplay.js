function CharacterDisplay({ character }) {

    const summary = "";

    return (
        <div className="character">
            <div className="wrapper">
                {/* "Gary Gygax, Level 5 Dwarf Rogue" */}
                <h3>
                    {character.name}, level {character.level} {character.race.name} {character.dndclass.name}
                </h3>
                <hr />
                <h4>Aptitudes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium facere nam quidem obcaecati saepe consequatur repudiandae esse commodi laudantium.</p>
                <h4>Background: {character.background.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis quibusdam itaque eligendi iure libero laboriosam reprehenderit nihil ea adipisci odit.</p>
            </div>
        </div>
    );
}

export default CharacterDisplay;