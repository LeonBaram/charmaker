import { Character, CharacterJSON, Class, Race, Background } from "../models";
import { rand } from "./randomize";

const randomName = (names: string[]): string => rand(...names);

const randomClass = (classes: string[]): Class => ({
  name: rand(...classes),
  level: Math.ceil(Math.random() * Character.MAX_LEVEL),
});

const randomRace = (races: string[]): Race => ({
  name: rand(...races),
});

const randomBackground = (backgrounds: string[]): Background => ({
  name: rand(...backgrounds),
});

const randomCharacterJSON =
  (seed: {
    names: string[];
    classes: string[];
    races: string[];
    backgrounds: string[];
  }): CharacterJSON => ({
    name: randomName(seed.names),
    class: randomClass(seed.classes),
    race: randomRace(seed.races),
    background: randomBackground(seed.backgrounds),
    timestamp: new Date(),
  });

export { randomCharacterJSON };
