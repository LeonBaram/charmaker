import React, { Dispatch, SetStateAction, useState } from "react";
import { dbref, randomCharacterJSON, hasBadWords } from "../utils";
import { push } from "firebase/database";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Character } from "../models";

const dropdown = (options: string[]) =>
  options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

type CharacterFormProps = {
  formVisible: boolean;
  setFormVisible: Dispatch<SetStateAction<boolean>>;
  names: string[];
  classes: string[];
  races: string[];
  backgrounds: string[];
  descriptions: { [key: string]: string };
  wordfilter: string[];
};

function CharacterForm(props: CharacterFormProps) {
  const { formVisible, setFormVisible, descriptions, wordfilter, ...data } =
    props;

  const [characterInfo, setCharacterInfo] = useState(randomCharacterJSON(data));

  const { classes, races, backgrounds } = data;

  return (
    <Modal
      open={formVisible}
      onClose={() => {
        setFormVisible(false);
        setTimeout(() => setCharacterInfo(randomCharacterJSON(data)), 750);
      }}
      classNames={{ modal: "modal", overlay: "overlay" }}
    >
      <section className="character-form">
        <h2>A New Hero Rises</h2>
        <form>
          <label htmlFor="name">Name:</label>

          <input
            required
            type="text"
            id="name"
            className="name"
            placeholder="Gary Gygax"
            // bindings
            value={characterInfo.name}
            onChange={(e) =>
              setCharacterInfo((prev) => {
                const info = { ...prev };
                info.name = e.target.value;
                return info;
              })
            }
          />

          <label htmlFor="level">Level (1-{Character.MAX_LEVEL}):</label>

          <input
            required
            type="number"
            id="level"
            className="level"
            max="20"
            min="1"
            placeholder="1"
            value={characterInfo.class.level}
            onChange={(e) =>
              setCharacterInfo((prev) => {
                const info = { ...prev };
                info.class.level = +e.target.value;
                return info;
              })
            }
          />

          <label htmlFor="class">class</label>
          <div className="grid-cell">
            <select
              required
              name="class"
              id="class"
              value={characterInfo.class.name}
              onChange={(e) =>
                setCharacterInfo((prev) => {
                  const info = { ...prev };
                  info.class.name = e.target.value;
                  return info;
                })
              }
            >
              {dropdown(classes)}
            </select>
          </div>

          <p>{descriptions[characterInfo.class.name]}</p>

          <label htmlFor="race">race</label>
          <div className="grid-cell">
            <select
              required
              name="class"
              id="class"
              value={characterInfo.race.name}
              onChange={(e) =>
                setCharacterInfo((prev) => {
                  const info = { ...prev };
                  info.race.name = e.target.value;
                  return info;
                })
              }
            >
              {dropdown(races)}
            </select>
          </div>

          <p>{descriptions[characterInfo.race.name]}</p>

          <label htmlFor="background">background</label>
          <div className="grid-cell">
            <select
              required
              name="background"
              id="background"
              value={characterInfo.background.name}
              onChange={(e) =>
                setCharacterInfo((prev) => {
                  const info = { ...prev };
                  info.background.name = e.target.value;
                  return info;
                })
              }
            >
              {dropdown(backgrounds)}
            </select>
          </div>

          <p>{descriptions[characterInfo.background.name]}</p>
        </form>
        <button
          id="save"
          className="save"
          disabled={hasBadWords(characterInfo.name ?? "", wordfilter)}
          onClick={() => {
            if (characterInfo.name) {
              characterInfo.timestamp = Date.now();
              push(dbref.characters, characterInfo);
              setFormVisible(false);
            }
          }}
        >
          Save
        </button>
      </section>
    </Modal>
  );
}

export { CharacterForm };
