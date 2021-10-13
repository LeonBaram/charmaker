import { Character } from "../models";

type CharacterDisplayProps = {
  character: Character;
  descriptions: {
    [key: string]: string;
  };
};

function CharacterDisplay(props: CharacterDisplayProps) {
  const { character, descriptions } = props;
  return (
    <div className="character">
      <div className="wrapper">
        {/* "Gary Gygax, Level 5 Dwarf Rogue" */}
        <h3>
          {character.name}, level {character.level} {character.race.name} {character.class.name}
        </h3>
        <hr />
        <h4>Characteristics</h4>
        <p>{descriptions[character.class.name]}</p>
        <p>{descriptions[character.race.name]}</p>
        <h4>Background: {character.background.name}</h4>
        <p>{descriptions[character.background.name]}</p>
      </div>
    </div>
  );
}

export { CharacterDisplay };