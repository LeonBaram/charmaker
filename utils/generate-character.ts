import { Character, CharacterJSON, Class, Race, Background } from "../models";
import { rand } from "./randomize";

let names: string[], classes: string[], races: string[], backgrounds: string[];

const randomName = (): string => rand(...names);

const randomClass = (): Class => ({
  name: rand(...classes),
  level: Math.ceil(Math.random() * Character.MAX_LEVEL),
});

const randomRace = (): Race => ({
  name: rand(...races),
});

const randomBackground = (): Background => ({
  name: rand(...backgrounds),
});

const randomCharacterJSON = (): CharacterJSON => ({
  name: randomName(),
  class: randomClass(),
  race: randomRace(),
  background: randomBackground(),
  timestamp: new Date(),
});

export { randomCharacterJSON };
