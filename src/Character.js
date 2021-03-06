class Character {

    constructor({name, level, race, charClass: dndClass, background}) {
        
        this.name = name;
        this.race = {
            name: race,
            desc: descriptions.race[race]
        };
        this.dndClass = {
            name: dndClass,
            desc: descriptions.dndClass[dndClass],
            level: level
        };
        this.background = {
            name: background,
            desc: descriptions.background[background]
        }
    }

    get level() {
        return this.dndClass.level;
    }
}

const descriptions = {
    race: {
        // elf
        // dwarf
    },
    dndClass: {
        // wizard
        // rogue
    },
    background: {
        // sage
        // criminal
    }
};

export default Character;