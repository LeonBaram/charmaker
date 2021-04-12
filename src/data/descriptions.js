const descriptions = {
  race: {
    dwarf:
      "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.",
    elf:
      "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.",
    halfling:
      "The comforts of home are the goals of most halflings' lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation.",
    human:
      "In the reckonings of most worlds, humans are the theyngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given.",
    dragonborn:
      "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.",
    gnome:
      "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close­knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
    "half-elf":
      "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children.",
    "half-orc":
      "Half-ores most often live among ores. Of the other races, humans are most likely to accept half-ores, and half­orcs almost always live in human lands when not living among ore tribes. Whether proving themselves among rough barbarian tribes or scrabbling to survive in the slums of larger cities, half-ores get by on their physical might, their endurance, and the sheer determination they inherit from their human ancestry.",
    tiefling:
      "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fe ar in every eye: this is the lot of the tiefting. And to twist the knife, tiefiings know that this is because a pact struck generations ago infused the essence of Asmodeus-overlord of the Nine Hells-into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children's children will always be held accountable.",
  },
  dndclass: {
    artificer: "Ar­tificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting magical objects. To cast a spell, an artificer could use al­chemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power on an ally's armor, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents.",
    barbarian:
      "Barbarians are defined by their rage: ubridled, unquenchable, and unthinking fury. To them, civilization is no virtue, but a sign of weakness -- they are most at home in the wilderness, outside of cities. Barbarians come truly alive in the chaos of combat.",
    bard:
      "In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.",
    cleric:
      "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
    druid:
      "Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.",
    fighter:
      "Fighters are perhaps the most diverse class. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings-as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.",
    monk:
      "Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse-specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities.",
    paladin:
      "Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
    ranger:
      "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
    rogue:
      "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    sorcerer:
      "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
    warlock:
      "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.",
    wizard:
      "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
  },
  background: {
    acolyte:
      "They've spent their life in the service of a temple to a specific god or pantheon of gods. They act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. They are not necessarily a cleric -- performing sacred rites is not the same thing as channeling divine power.",
    criminal:
      "They are an experienced criminal with a history of breaking the law. They've spent a lot of time among other criminals and still have contacts within the criminal underworld. They're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and they've survived up to this point by flouting the rules and regulations of society.",
    sage:
      "They spent years learning the lore of the multiverse. they scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest them. Their efforts have made them a master in their fields of study.",
    soldier:
      "War has been their life for  as long as they care to remember. They trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. They might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.",
  },
};

export default descriptions;
