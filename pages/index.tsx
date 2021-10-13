import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { dbref } from "../utils/firebase";
import { onValue, push, get } from "firebase/database";
import { Character, CharacterJSON } from "../models";
import { CharacterDisplay, CharacterForm } from "../components";
import { randomCharacterJSON } from "../utils/generate-character";

type HomeProps = {
  names: string[];
  classes: string[];
  races: string[];
  backgrounds: string[];
  descriptions: { [key: string]: string };
};

export async function getStaticProps() {
  const props: HomeProps = {
    names: [],
    classes: [],
    races: [],
    backgrounds: [],
    descriptions: {},
  };

  const paths = Object.keys(props);
  const promises = paths.map((path) => get(dbref[path]));
  const results = await Promise.all(promises);

  for (let path: string, i = 0; i < paths.length; i++) {
    path = paths[i];
    props[path] = results[i].val();
  }

  return { props, revalidate: 30 };
}

function Home({ names, classes, races, backgrounds, descriptions }: HomeProps) {
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
      setCharacters(characters.reverse());
    });
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
            names={names}
            classes={classes}
            races={races}
            backgrounds={backgrounds}
            descriptions={descriptions}
          />

          <button
            onClick={() => {
              push(
                dbref.characters,
                randomCharacterJSON({ names, classes, races, backgrounds })
              );
            }}
          >
            p o p u l a t e
          </button>

          <section className="characters">
            {characters.sort(Character.compareTimestamps).map((character) => (
              <CharacterDisplay
                character={character}
                key={character.id}
                descriptions={descriptions}
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
