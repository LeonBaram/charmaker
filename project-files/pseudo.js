/* Pseudo-code for murderHobo (main "App" component)

- on page load, establish link with firebase,
  and parse DB data into a local array of Character objects

- display each local Character object
  - each object is passed as a prop to a <CharacterDisplay/> component

- when "create new character" button is pressed, reveal <CharacterCreator/>
  essentially the entire component is a wrapper for a form
  will appear as modal box; user can save or cancel out of box

- if user saves, form data is used to create a new character object,
  which is pushed to the DB
*/

// Pseudo-Code for specific components (other than "App")

/* 
CharacterDisplay

input (props): 
    a Character object

logic:
    use descriptions of class, race, & background to generate summary of character

output (JSX render): 
    a short summary of the character,
    which is based on the input Character object's properties 
*/

/* 
CharacterCreator

input (props): 
    none

logic:
    if User cancels:
        ask "Are you sure?"
        hide this component if "yes"
    
    if User saves:
        if form fields are incomplete
            tell User to either finish or cancel
        if form fields are complete
            create new Character object from form inputs
            push new Character object to DB*
            hide this component


output (JSX render):
    A form:
        text box for character name
        numerical text box for character level
        dropdown for character class
        dropdown for character race
        dropddown for character background
        a "Cancel" and "Save" button
*/

/* 
Character
[note: not a component, just a class defining the Character object]

fields:
    name: string
    characterClass: {
        name: string
        level: int
        description: string
    }
    race: {
        name: string
        description: string
    }
    background: {
        name: string
        description: string
    }

methods:
    constructor (obviously)
    getLevel: returns characterClass.level
*/
