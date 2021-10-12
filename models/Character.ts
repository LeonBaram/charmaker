class CharacterJSON {
  name: string;
  timestamp: Date;
  characterClass: CharacterClass;
  characterRace: CharacterRace;
  characterBackground: CharacterBackground;
}

class Character extends CharacterJSON {
  static MAX_LEVEL = 20;

  constructor(info: CharacterJSON) {
    super();
    Object.assign(this, info);

    if (this.level === undefined) {
      this.level = 1;
    }
  }

  get level(): number {
    return this.characterClass.level;
  }

  set level(n: number) {
    if (n < 1 || isNaN(n)) {
      n = 1;
    }
    if (n > Character.MAX_LEVEL) {
      n = Character.MAX_LEVEL;
    }
    this.characterClass.level = Math.floor(n);
  }

  toJSON(): CharacterJSON {
    return {
      name: this.name,
      timestamp: this.timestamp,
      characterClass: this.characterClass,
      characterRace: this.characterRace,
      characterBackground: this.characterBackground,
    };
  }

  static compareTimestamps(a: Character, b: Character): number {
    return +b.timestamp - +a.timestamp;
  }
}

type CharacterClass = {
  name: string;
  desc: string;
  level: number;
};

type CharacterRace = {
  name: string;
  desc: string;
};

type CharacterBackground = {
  name: string;
  desc: string;
};

export { Character, CharacterJSON };
