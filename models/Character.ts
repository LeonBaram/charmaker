class CharacterJSON {
  name: string;
  timestamp: Date;
  class: Class;
  race: Race;
  background: Background;
}

class Character extends CharacterJSON {
  static MAX_LEVEL = 20;

  id: string;

  constructor(info: CharacterJSON) {
    super();
    Object.assign(this, info);

    if (this.level === undefined) {
      this.level = 1;
    }
  }

  get level(): number {
    return this.class.level;
  }

  set level(n: number) {
    if (n < 1 || isNaN(n)) {
      n = 1;
    }
    if (n > Character.MAX_LEVEL) {
      n = Character.MAX_LEVEL;
    }
    this.class.level = Math.floor(n);
  }

  toJSON(): CharacterJSON {
    return {
      name: this.name,
      timestamp: this.timestamp,
      class: this.class,
      race: this.race,
      background: this.background,
    };
  }

  static compareTimestamps(a: Character, b: Character): number {
    return +b.timestamp - +a.timestamp;
  }
}

type Class = {
  name: string;
  level: number;
};

type Race = {
  name: string;
};

type Background = {
  name: string;
};

export { Character, CharacterJSON };
export type { Class, Race, Background };
