import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { dbref } from "../utils/firebase";
import { onValue, push, get } from "firebase/database";
import { Character, CharacterJSON } from "../models";
import { CharacterDisplay, CharacterForm } from "../components";
import { randomCharacterJSON } from "../utils/generate-character";

export default function App() {

  const classes = useRef<string[]>([]);
  const races = useRef<string[]>([]);
  const backgrounds = useRef<string[]>([]);
  const descriptions = useRef<{ [key: string]: string; }>({});

  const [characters, setCharacters] = useState<Character[]>([]);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    onValue(dbref.characters, (snapshot) => {
      const data: { [id: string]: CharacterJSON } = snapshot.val();
      const characters: Character[] = [];
      let character: Character;
      for (const id in data) {
        character = new Character(data[id]);
        character.id = id;
        characters.push(character);
      }
      setCharacters(characters);
    });

    onValue(dbref.classes, (snapshot) => {
      classes.current = Object.values(snapshot.val());
    }, { onlyOnce: true });

    onValue(dbref.races, (snapshot) => {
      races.current = Object.values(snapshot.val());
    }, { onlyOnce: true });

    onValue(dbref.backgrounds, (snapshot) => {
      backgrounds.current = Object.values(snapshot.val());
    }, { onlyOnce: true });

    onValue(dbref.descriptions, (snapshot) => {
      descriptions.current = snapshot.val();
    }, { onlyOnce: true });
  }, []);

  return (
    <>
      <Head>
        <title>charMaker</title>
      </Head>
      <header>
        <div className="wrapper">
          <div className="heading-block">
            <h1>charMaker</h1>
            <h2>a simple character creator</h2>
          </div>
          <button
            className={`create${formVisible ? " pressed" : ""}`}
            onClick={() => {
              setFormVisible(true);
              console.log(formVisible);
            }}
          >
            Create +
          </button>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <CharacterForm
            formVisible={formVisible}
            setFormVisible={setFormVisible}
            classes={classes.current}
            races={races.current}
            backgrounds={backgrounds.current}
            descriptions={descriptions.current}
          />

          <button
            onClick={() => {
              push(dbref.characters, randomCharacterJSON())
            }}
          >
            p o p u l a t e
          </button>

          <section className="characters">
            {characters.sort(Character.compareTimestamps).map((character) => (
              <CharacterDisplay
                character={character}
                key={character.id}
                descriptions={descriptions.current}
              />
            ))}
          </section>
        </div>
      </main>
      <footer>
        <div className="wrapper">
          <p>
            made at <a href="https://junocollege.com/">Juno</a>
          </p>
          <p className="dnd">
            Dungeons and Dragons belongs to{" "}
            <a href="https://company.wizards.com/en">Wizard of the Coast</a>.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
