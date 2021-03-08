# Project Scope Outline: "murderHobo"

## Description

A modern, in-browser character creator & editor for Dungeons and Dragons (5th Edition)

## Minimum Viable Product

1. User is greeted with a list of existing D&D characters, as well as the option to create a new one
2. Clicking "create a new character" launches a character creation dialog box, containing a form which will ask the user to select:
  - a name
  - a level (1-5)
  - a race (human, dwarf, elf, or halfling)
  - a class (fighter, wizard, rogue, cleric)
  - a background (e.g. sage, soldier, criminal, acolyte)
3. The user's character will be written to a Firebase Real-Time Database, and displayed on the site with an auto-generated description based on their race/class/background

## Stretch Goals

- Add authentication
  - User can log in/out
  - User needs an account to create characters (each character will have an "author" property)
  - User can set character to public/private (private characters will be saved in Firebase, but not rendered on page)
  - User can delete characters they created
  - User can delete their account, choosing whether to delete or archive their existing characters on the website

- Expand character creator
  - add full range of D&D 5e races/classes/backgrounds 
    (only what's legal to add, i.e. in the SRD)
  - add the ability for users to create their own custom races/classes/backgrounds, and (optionally) share them on the website
  - add the ability to use these cusom races/classes/backgrounds in character creation dialog

- Add a file importer/exporter
  - User can import/export characters, as well as custom races/classes/backgrounds
  - User can choose export formats (importer recognizes all options offered by exporter)
    - options will be JSON or "plain" (variant of CSV) -- far future stretch goal, pdf?

- Add sorting functionality; users will be able to sort characters (as well as races/classes/backgrounds) by name, author name, or timestamp

- Add a search bar; User will be able to search through public characters & races/classes/backgrounds

- Extend levels to 20

- Add Ability Scores
  - Add attack/skill/save bonuses
  - Add initiative
  - Add HP
  - Add Hit Dice
  - Add AC

- Add a Spell tracker
  - Spell slots
  - Base spell repo (from SRD)
  - ability to create/public custom spells

## Pseudo-Code

(see pseudo.js)
