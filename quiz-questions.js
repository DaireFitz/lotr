// Function to start the quiz
function startQuiz() {
  // Hide the "Start Quiz" button
  const startButton = document.getElementById('start-btn');
  startButton.style.display = 'none';

  // Show the quiz container
  const quizContainer = document.getElementById('quiz');
  quizContainer.style.display = 'block';

  // Initialize the timer variables
  let timeLeft = 60;
  const timerElement = document.getElementById("timer");
  timerElement.innerText = `Time left: ${timeLeft}s`;

  // Start the timer interval
  const timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = `Time left: ${timeLeft}s`;

    if (timeLeft === 0) {
      clearInterval(timer);
      handleQuizEnd();
    }
  }, 1000);

  // Load the first question
  loadQuiz();
}

// Event listener for the "Start Quiz" button
const startButton = document.getElementById('start-btn');
startButton.addEventListener('click', startQuiz);

const easyQuizData = [

  {
    question: "Who is the author of The Lord of the Rings?",
    a: "J.R.R. Tolkien",
    b: "C.S. Lewis",
    c: "George R.R. Martin",
    d: "J.K. Rowling",
    correct: "a",
  },
  {
    question: "What is the name of the wizard in The Lord of the Rings?",
    a: "Gandalf",
    b: "Saruman",
    c: "Radagast",
    d: "Merlin",
    correct: "a",
  },
  {
    question: "Who is Frodo's loyal friend and companion?",
    a: "Samwise Gamgee",
    b: "Legolas",
    c: "Aragorn",
    d: "Gimli",
    correct: "a",
  },
  {
    question: "How are Bilbo and Frodo Baggins related?",
    a: "Bilbo is Frodo’s father",
    b: "Bilbo is Frodo’s grandfather",
    c: "Bilbo is Frodo’s cousin",
    d: "Bilbo is Frodo’s uncle",
    correct: "d",
  },
  {
    question: "What effect does Bilbo’s ring have on its wearer?",
    a: "It makes him invisible",
    b: "It enables him to see in the dark",
    c: "It gives him great strength",
    d: "It has seemingly no effect",
    correct: "a",
  },
  {
    question: "How did Bilbo come into possession of his ring?",
    a: "He inherited it",
    b: "He won it in a battle",
    c: "He found it in a cave",
    d: "He found it at the bottom of a river",
    correct: "c",
  },
  {
    question: "To which of the following is the landscape of the Shire most similar?",
    a: "The English countryside",
    b: "The Scottish highlands",
    c: "The French Riviera",
    d: "The Swiss Alps",
    correct: "a",
  },
  {
    question: "Which of the following hobbits does not set out on the quest with Frodo?",
    a: "Merry",
    b: "Fatty",
    c: "Sam",
    d: "Pippin",
    correct: "b",
  },
  {
    question: "How many Black Riders are there?",
    a: "Nine",
    b: "Seven",
    c: "Thirteen",
    d: "Eleven",
    correct: "a",
  },
  {
    question: "What type of tree ensnares Merry in the Old Forest?",
    a: "Willow",
    b: "Larch",
    c: "Oak",
    d: "Elm",
    correct: "a",
  },
  {
    question: "What are Tom Bombadil’s origins?",
    a: "He is a being from deep inside the earth",
    b: "He is from the unknown West across the Great Sea",
    c: "He is the brother of Old Man Willow",
    d: "His origins are unknown",
    correct: "b",
  },
  {
    question: "What is the name of the inn at Bree?",
    a: "The Prancing Pony",
    b: "The Golden Goblet",
    c: "The Red Lion",
    d: "The Hungry Traveler",
    correct: "a",
  },
  {
    question: "Which important character do the hobbits meet at the inn?",
    a: "Aragorn",
    b: "Gandalf",
    c: "Elrond",
    d: "Bilbo",
    correct: "a",
  },

  {
    question: "Of what races are Legolas and Gimli, respectively?",
    a: "Elf and Dwarf",
    b: "Man and Dwarf",
    c: "Elf and Man",
    d: "Dwarf and Elf",
    correct: "a",
  },
  {
    question: "What is Legolas’s weapon of choice?",
    a: "A bow and arrows",
    b: "An axe",
    c: "A sword",
    d: "A spear",
    correct: "a",
  },
  {
    question: "Moria was once an ancient realm of which race?",
    a: "Dwarves",
    b: "Elves",
    c: "Orcs",
    d: "Trolls",
    correct: "a",
  },
  {
    question: "Which terrible creature does Gandalf battle during the journey through Moria?",
    a: "The Balrog",
    b: "The Barrow-wight",
    c: "The Nazgûl",
    d: "The Uruk-hai",
    correct: "a",
  },
  {
    question: "What are Gandalf’s final words before he falls into the chasm?",
    a: "“Fly, you fools!”",
    b: "“All that is gold does not glitter!”",
    c: "“Behold Isildur’s Bane!”",
    d: "“Fare Well!”",
    correct: "a",
  },
  {
    question: "Over which realm does Galadriel rule?",
    a: "Lothlórien",
    b: "Gondor",
    c: "Rohan",
    d: "Rivendell",
    correct: "a",
  },
  {
    question: "Which of the following does Frodo not see in Galadriel’s mirror?",
    a: "A glowing sword",
    b: "An old figure dressed in white",
    c: "A white fortress",
    d: "A dark eye rimmed in fire",
    correct: "c",
  },
  {
    question: "Why does Galadriel refuse the Ring when Frodo offers it?",
    a: "She knows it would corrupt her",
    b: "The metal from which it is made is fatal to Elves",
    c: "It does not fit on her finger",
    d: "She dislikes its appearance",
    correct: "a",
  },
  {
    question: "To which city does Boromir suggest the Fellowship go?",
    a: "Minas Tirith",
    b: "Minas Anor",
    c: "Minas Ithil",
    d: "Minas Morgul",
    correct: "a",
  },
  {
    question: "What are lembas?",
    a: "A type of Elvish food",
    b: "A type of flower that grows in Lothlórien",
    c: "Elvish coins",
    d: "Elvish arrows with magical properties",
    correct: "a",
  },
  {
    question: "Which creature does Aragorn assert has been following the Fellowship throughout the journey?",
    a: "Gollum",
    b: "Gwaihir",
    c: "A Balrog",
    d: "A cave-troll",
    correct: "a",
  },
  {
    question: "Which of the following best characterizes Boromir’s attitude toward the Ring?",
    a: "He cannot see the importance of it",
    b: "He thinks its power is merely a myth",
    c: "He begins to be corrupted by it",
    d: "He cannot stand the sight of it",
    correct: "c",
  },
  {
    question: "With which companion does Frodo set out at the end of The Fellowship of the Ring?",
    a: "Aragorn",
    b: "Merry",
    c: "Pippin",
    d: "Sam",
    correct: "d",
  },
];

const mediumQuizData = [
  {
    question: "Who is the son of Denethor II, Steward of Gondor?",
    a: "Boromir",
    b: "Faramir",
    c: "Aragorn",
    d: "Legolas",
    correct: "b",
  },
  {
    question: "What is the name of the river that flows through Lothlórien?",
    a: "Anduin",
    b: "Isen",
    c: "Entwash",
    d: "Celebduin",
    correct: "d",
  },
  {
    question: "Which creature serves as a guide to Frodo and Sam in Mordor?",
    a: "Gollum",
    b: "Gimli",
    c: "Boromir",
    d: "Sauron",
    correct: "a",
  },
  {
    question: "What is the name of the fortress of the Witch-king of Angmar?",
    a: "Barad-dûr",
    b: "Minas Morgul",
    c: "Orthanc",
    d: "Isengard",
    correct: "b",
  },
  {
    question: "What is the name of the horse given to Aragorn by Éomer?",
    a: "Arod",
    b: "Shadowfax",
    c: "Bill",
    d: "Brego",
    correct: "a",
  },
  {
    question: "What gift does Galadriel give to Frodo?",
    a: "A magic ring",
    b: "A sword",
    c: "A cloak of invisibility",
    d: "A vial of light",
    correct: "d",
  },
  {
    question: "What creature does Samwise Gamgee call 'a sneaking, tricksy' one?",
    a: "Gollum",
    b: "Gimli",
    c: "Boromir",
    d: "Legolas",
    correct: "a",
  },
  {
    question: "Who is the father of Legolas?",
    a: "Gimli",
    b: "Thranduil",
    c: "Elrond",
    d: "Celeborn",
    correct: "b",
  },
  {
    question: "Which of the following is NOT one of the Rings of Power for the Dwarves?",
    a: "Narya",
    b: "Nenya",
    c: "Vilya",
    d: "Durin's Ring",
    correct: "d",
  },
  {
    question: "What is the name of the great spider in Mirkwood that captures the dwarves?",
    a: "Shelob",
    b: "Ungoliant",
    c: "Arachne",
    d: "Shelob's Brood",
    correct: "b",
  },
  {
    question: "Who is the Lord of the Eagles that rescues Frodo and Sam at Mount Doom?",
    a: "Gwaihir",
    b: "Radagast",
    c: "Saruman",
    d: "Gandalf",
    correct: "a",
  },
  {
    question: "What is the name of the river that flows through Rohan?",
    a: "Anduin",
    b: "Isen",
    c: "Entwash",
    d: "Limlight",
    correct: "c",
  },
  {
    question: "Who is the ruler of the land of the Haradrim, a sworn enemy of Gondor?",
    a: "The Mouth of Sauron",
    b: "The Witch-king of Angmar",
    c: "Saruman",
    d: "The Corsair of Umbar",
    correct: "d",
  },
  {
    question: "What is the name of the river that borders Gondor and is crossed by the Dead Men of Dunharrow?",
    a: "Anduin",
    b: "Entwash",
    c: "Limlight",
    d: "Mering Stream",
    correct: "b",
  },
  {
    question: "Which Dwarf of Thorin's company is known for his skill in fighting with an axe?",
    a: "Balin",
    b: "Bifur",
    c: "Gloin",
    d: "Dwalin",
    correct: "d",
  },
  {
    question: "Who is the master of Rivendell, also known as Elrond Half-elven?",
    a: "Celeborn",
    b: "Thranduil",
    c: "Galadriel",
    d: "Glorfindel",
    correct: "c",
  },
  {
    question: "What is the name of the sword that Aragorn wields, reforged from the shards of Narsil?",
    a: "Orcrist",
    b: "Anduril",
    c: "Sting",
    d: "Glamdring",
    correct: "b",
  },
  {
    question: "What gift does Bilbo give to Frodo before Frodo sets out on his journey?",
    a: "The One Ring",
    b: "A map of Middle-earth",
    c: "Sting, the sword",
    d: "The Red Book of Westmarch",
    correct: "d",
  },
  {
    question: "Who is known as the Lady of Lothlórien and wears a ring that gives her power and wisdom?",
    a: "Arwen",
    b: "Eowyn",
    c: "Galadriel",
    d: "Rosie Cotton",
    correct: "c",
  },
  {
    question: "Which region is home to the Ents, ancient tree-like creatures?",
    a: "Fangorn Forest",
    b: "Lothlórien",
    c: "Mirkwood",
    d: "The Shire",
    correct: "a",
  },
  {
    question: "What is the name of the sword that Frodo uses to defend himself in Rivendell?",
    a: "Sting",
    b: "Glamdring",
    c: "Orcrist",
    d: "Anduril",
    correct: "a",
  },
  {
    question: "Which Hobbit lives in Crickhollow and helps Frodo leave the Shire?",
    a: "Merry",
    b: "Pippin",
    c: "Sam",
    d: "Fatty Bolger",
    correct: "d",
  },
  {
    question: "What is the name of the fortress in Gondor that holds the Beacon Pippin lights to call for aid?",
    a: "Henneth Annûn",
    b: "Minas Tirith",
    c: "Cirith Ungol",
    d: "Amon Hen",
    correct: "b",
  },
  {
    question: "What is the name of the mountain that houses the realm of the Dwarves, including the city of Erebor?",
    a: "Mount Gundabad",
    b: "Mount Gram",
    c: "Mount Caradhras",
    d: "Lonely Mountain",
    correct: "d",
  },
  {
    question: "Which of the following characters is NOT a member of the Fellowship of the Ring?",
    a: "Boromir",
    b: "Legolas",
    c: "Gimli",
    d: "Faramir",
    correct: "d",
  },
  {
    question: "What is the name of the tower in Mordor where Frodo and Sam are taken after being captured?",
    a: "Barad-dûr",
    b: "Orthanc",
    c: "Minas Morgul",
    d: "Cirith Ungol",
    correct: "d",
  },
  {
    question: "Who is the author of 'The Red Book of Westmarch,' which contains the tales of Bilbo and Frodo's journeys?",
    a: "Gandalf",
    b: "Aragorn",
    c: "Samwise Gamgee",
    d: "Bilbo Baggins",
    correct: "c",
  },
  {
    question: "What is the name of the council that decides to destroy the One Ring?",
    a: "Council of Rivendell",
    b: "Council of Gondor",
    c: "Council of Elrond",
    d: "Council of Isengard",
    correct: "c",
  },
  {
    question: "Who is the heir of Isildur and rightful King of Gondor?",
    a: "Boromir",
    b: "Faramir",
    c: "Aragorn",
    d: "Legolas",
    correct: "c",
  },
  {
    question: "What is the name of the river that Frodo and Sam use to enter Mordor?",
    a: "Anduin",
    b: "Isen",
    c: "Entwash",
    d: "Ciril",
    correct: "d",
  },
  {
    question: "What is the name of the sword that Frodo uses to defend himself in Rivendell?",
    a: "Sting",
    b: "Glamdring",
    c: "Orcrist",
    d: "Anduril",
    correct: "a",
  },
  {
    question: "Who is the head of the Riders of Rohan?",
    a: "Éomer",
    b: "Théoden",
    c: "Éowyn",
    d: "Grima Wormtongue",
    correct: "b",
  },
  {
    question: "Which of the following is NOT one of the Three Rings of the Elves?",
    a: "Narya",
    b: "Nenya",
    c: "Vilya",
    d: "Ring of Barahir",
    correct: "d",
  },
  {
    question: "What is the name of the tower in Gondor where the Steward Denethor resides?",
    a: "Barad-dûr",
    b: "Orthanc",
    c: "Minas Tirith",
    d: "Cirith Ungol",
    correct: "c",
  },
  {
    question: "Who is the master of the spiders in Mirkwood?",
    a: "Ungoliant",
    b: "Shelob",
    c: "Arachne",
    d: "Gollum",
    correct: "b",
  },
  {
    question: "What is the name of the river that forms the eastern border of Gondor?",
    a: "Anduin",
    b: "Entwash",
    c: "Limlight",
    d: "Andrath",
    correct: "a",
  },
  {
    question: "What is the name of the city in Rohan that is known for its horses?",
    a: "Edoras",
    b: "Minas Tirith",
    c: "Bree",
    d: "Dale",
    correct: "a",
  },
  {
    question: "Who is the eldest son of Thranduil, the Elvenking of the Woodland Realm?",
    a: "Legolas",
    b: "Gimli",
    c: "Frodo",
    d: "Boromir",
    correct: "a",
  },
  {
    question: "Which of the following characters is NOT a member of the Fellowship of the Ring?",
    a: "Boromir",
    b: "Legolas",
    c: "Gimli",
    d: "Faramir",
    correct: "d",
  },
  {
    question: "What is the name of the river that Frodo and Sam use to enter Mordor?",
    a: "Anduin",
    b: "Isen",
    c: "Entwash",
    d: "Ciril",
    correct: "d",
  },
  {
    question: "Who is the head of the Riders of Rohan?",
    a: "Éomer",
    b: "Théoden",
    c: "Éowyn",
    d: "Grima Wormtongue",
    correct: "b",
  },
  {
    question: "Which of the following is NOT one of the Three Rings of the Elves?",
    a: "Narya",
    b: "Nenya",
    c: "Vilya",
    d: "Ring of Barahir",
    correct: "d",
  },
  {
    question: "What is the name of the tower in Gondor where the Steward Denethor resides?",
    a: "Barad-dûr",
    b: "Orthanc",
    c: "Minas Tirith",
    d: "Cirith Ungol",
    correct: "c",
  },
  {
    question: "Who is the master of the spiders in Mirkwood?",
    a: "Ungoliant",
    b: "Shelob",
    c: "Arachne",
    d: "Gollum",
    correct: "b",
  },
  {
    question: "What is the name of the river that forms the eastern border of Gondor?",
    a: "Anduin",
    b: "Entwash",
    c: "Limlight",
    d: "Andrath",
    correct: "a",
  },
  {
    question: "What is the name of the city in Rohan that is known for its horses?",
    a: "Edoras",
    b: "Minas Tirith",
    c: "Bree",
    d: "Dale",
    correct: "a",
  },
  {
    question: "Who is the eldest son of Thranduil, the Elvenking of the Woodland Realm?",
    a: "Legolas",
    b: "Gimli",
    c: "Frodo",
    d: "Boromir",
    correct: "a",
  },
  {
    question: "What is the name of the Dark Lord who created the One Ring?",
    a: "Sauron",
    b: "Morgoth",
    c: "Saruman",
    d: "Gollum",
    correct: "a",
  },
  {
    question: "What is the name of the land inhabited by the horse-lords of Rohan?",
    a: "Gondor",
    b: "Mordor",
    c: "Rohan",
    d: "Gondolin",
    correct: "c",
  },
  {
    question: "Which of the following is NOT one of the Seven Rings of the Dwarves?",
    a: "Narya",
    b: "Nenya",
    c: "Vilya",
    d: "Durin's Ring",
    correct: "d",
  },
  {
    question: "What is the name of the tower in Isengard that Saruman resides in?",
    a: "Barad-dûr",
    b: "Orthanc",
    c: "Minas Tirith",
    d: "Cirith Ungol",
    correct: "b",
  },
  {
    question: "Who is the leader of the Nazgûl, also known as the Witch-king of Angmar?",
    a: "Sauron",
    b: "Gollum",
    c: "Saruman",
    d: "Gimli",
    correct: "b",
  },
  {
    question: "What is the name of the river that flows through the Shire?",
    a: "Anduin",
    b: "Brandywine",
    c: "Entwash",
    d: "Greyflood",
    correct: "b",
  },
  {
    question: "What is the name of the city built into the Misty Mountains by the Dwarves?",
    a: "Erebor",
    b: "Rivendell",
    c: "Lothlórien",
    d: "Dale",
    correct: "a",
  },
  {
    question: "Who is the leader of the White Council and resides in Rivendell?",
    a: "Sauron",
    b: "Gandalf",
    c: "Saruman",
    d: "Elrond",
    correct: "b",
  },
  {
    question: "What is the name of the river that flows through the forest of Mirkwood?",
    a: "Anduin",
    b: "Forest River",
    c: "Entwash",
    d: "Celduin",
    correct: "d",
  },
  {
    question: "What is the name of the village where Frodo and his friends meet Tom Bombadil?",
    a: "Bree",
    b: "Rivendell",
    c: "Lothlórien",
    d: "Tom's House",
    correct: "a",
  },
  {
    question: "Who is the master of the Eagles of the Misty Mountains?",
    a: "Radagast",
    b: "Gwaihir",
    c: "Saruman",
    d: "Gandalf",
    correct: "b",
  },
  {
    question: "What is the name of the river that forms the western border of Lothlórien?",
    a: "Anduin",
    b: "Entwash",
    c: "Limlight",
    d: "Silverlode",
    correct: "d",
  },
];



const hardQuizData = [


  {
    question: "What is the name of the fiery mountain where the One Ring was forged?",
    a: "Orodruin",
    b: "Caradhras",
    c: "Dúnedain",
    d: "Orthanc",
    correct: "a",
  },
  {
    question: "Who is the first person to bear the One Ring after it is cut from Sauron's finger?",
    a: "Isildur",
    b: "Gollum",
    c: "Bilbo Baggins",
    d: "Frodo Baggins",
    correct: "b",
  },
  {
    question: "What is the name of the creature that is a hybrid of a human and an orc?",
    a: "Uruk-hai",
    b: "Balrog",
    c: "Nazgûl",
    d: "Ent",
    correct: "a",
  },
  {
    question: "Who is known as the Steward of Gondor, ruling in the absence of the King?",
    a: "Denethor",
    b: "Théoden",
    c: "Faramir",
    d: "Éomer",
    correct: "a",
  },
  {
    question: "What is the name of the fortress that guards the entrance to Mordor and is home to the Dark Lord Sauron?",
    a: "Barad-dûr",
    b: "Orthanc",
    c: "Minas Tirith",
    d: "Minas Morgul",
    correct: "a",
  },
  {
    question: "Who was the last ruler of Gondor during the Third Age?",
    a: "Denethor II",
    b: "Boromir",
    c: "Aragorn",
    d: "Isildur",
    correct: "a",
  },
  {
    question: "What is the name of the ancient tree-like beings in Fangorn Forest?",
    a: "Hobbits",
    b: "Ents",
    c: "Dunedain",
    d: "Eagles",
    correct: "b",
  },
  {
    question: "Who was known as the 'Lord of Balrogs'?",
    a: "Gothmog",
    b: "Durin's Bane",
    c: "Thuringwethil",
    d: "Sauron",
    correct: "a",
  },
  {
    question: "Which two hobbits does Frodo encounter in Bree?",
    a: "Merry and Pippin",
    b: "Sam and Rosie",
    c: "Fatty Bolger and Fredegar Bolger",
    d: "Ted Sandyman and Lotho Sackville-Baggins",
    correct: "c",
  },
  {
    question: "What creature does Legolas refer to as 'Sauron's Creature' during the Council of Elrond?",
    a: "A Nazgul",
    b: "A Balrog",
    c: "Gollum",
    d: "An Uruk-hai",
    correct: "a",
  },
  {
    question: "What are the names of the three Elven Rings of Power?",
    a: "Nenya, Vilya, and Narya",
    b: "Narya, Galadriel, and Elrond",
    c: "Nenya, Palantir, and Vilya",
    d: "Narya, Celebrimbor, and Gandalf",
    correct: "a",
  },
  {
    question: "Who composed the song 'Lament for Boromir'?",
    a: "Aragorn",
    b: "Frodo",
    c: "Beregond",
    d: "Bilbo",
    correct: "a",
  },
  {
    question: "What was the name of the great spider that attacked Frodo and Sam in Mirkwood?",
    a: "Shelob",
    b: "Ungoliant",
    c: "Arachne",
    d: "Sheloboth",
    correct: "a",
  },
  {
    question: "Who was the first Dark Lord of Middle-earth?",
    a: "Sauron",
    b: "gothmog",
    c: "Saruman",
    d: "Melkor",
    correct: "b",
  },
  {
    question: "Which two characters share the same father but have different mothers?",
    a: "Aragorn and Boromir",
    b: "Legolas and Gimli",
    c: "Frodo and Sam",
    d: "Faramir and Boromir",
    correct: "d",
  },
  {
    question: "What was the name of the fortress of Sauron in Mordor?",
    a: "Minas Morgul",
    b: "Orthanc",
    c: "Barad-dûr",
    d: "Isengard",
    correct: "c",
  },
  {
    question: "Who forged the One Ring?",
    a: "Sauron",
    b: "Gandalf",
    c: "Celeborn",
    d: "Bilbo Baggins",
    correct: "a",
  },
  {
    question: "What was the name of the sword that Aragorn wielded?",
    a: "Glamdring",
    b: "Andúril",
    c: "Sting",
    d: "Orcrist",
    correct: "b",
  },
  {
    question: "What was Gollum's name before he obtained the One Ring?",
    a: "Sméagol",
    b: "Deagol",
    c: "Gandalf",
    d: "Bilbo",
    correct: "a",
  },
  {
    question: "What is the name of the river that flows through Lothlórien?",
    a: "Anduin",
    b: "Entwash",
    c: "Nimrodel",
    d: "Bruinen",
    correct: "c",
  },
  {
    question: "What is the name of the ancient and powerful spider creature in Mirkwood?",
    a: "Shelob",
    b: "Ungoliant",
    c: "Arachne",
    d: "Lobelia",
    correct: "b",
  },
  {
    question: "What was the orginal name of the first Dark Lord of Middle-earth, before Sauron?",
    a: "Morgoth",
    b: "Melkor",
    c: "Sauramn",
    d: "Nazgûl",
    correct: "b",
  },
  {
    question: "Who is known as the Lord of the Eagles and aids the Fellowship?",
    a: "Gwaihir",
    b: "Radagast",
    c: "Saruman",
    d: "Elrond",
    correct: "a",
  },
  {
    question: "What was the name of the horse that Aragorn rode?",
    a: "Brego",
    b: "Roheryn",
    c: "Shadowfax",
    d: "Bill",
    correct: "b",
  },
  {
    question: "Who is the first person to bear the One Ring after it is cut from Sauron's finger?",
    a: "Isildur",
    b: "Gollum",
    c: "Bilbo Baggins",
    d: "Frodo Baggins",
    correct: "b",
  },
  {
    question: "What is the name of the enchanted forest that Legolas is from?",
    a: "Lothlórien",
    b: "Fangorn",
    c: "Mirkwood",
    d: "Rivendell",
    correct: "c",
  },

]
// Define the number of questions per game
const questionsPerGame = 10;

// Retrieve the difficulty level from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty');

// Customize the quiz based on the difficulty level
let selectedQuizData;

if (difficulty === 'easy') {
  selectedQuizData = getRandomQuizData(easyQuizData, questionsPerGame);
} else if (difficulty === 'medium') {
  selectedQuizData = getRandomQuizData(mediumQuizData, questionsPerGame);
} else if (difficulty === 'hard') {
  selectedQuizData = getRandomQuizData(hardQuizData, questionsPerGame);

} else {
  // If no or invalid difficulty is provided, redirect to the default difficulty (easy in this case)
  window.location.href = 'index.html';
}

const quizContainer = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const timerElement = document.getElementById("timer");

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

// Create Audio elements for correct and wrong answers
const correctAudio = new Audio('assests/audio/correct-answer.mp3');
const wrongAudio = new Audio('assests/audio/wrong-answer.mp3');

// Function to check the selected answer and update score
function checkAnswer() {
  const answer = getSelected();

  if (answer) {
    if (answer === selectedQuizData[currentQuestion].correct) {
      score++;
      // Play correct answer sound effect
      correctAudio.play();
    } else {
      // Play wrong answer sound effect
      wrongAudio.play();
    }

    currentQuestion++;

    // ... Your existing code ...
  }
}

function loadQuiz() {
  resetQuiz();

  const currentQuizData = selectedQuizData[currentQuestion];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function resetQuiz() {
  deselectAnswer();
  timerElement.innerText = `Time left: ${timeLeft}s`;
}

function deselectAnswer() {
  answerElements.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

function getSelected() {
  let answer = undefined;

  answerElements.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

function handleQuizEnd() {
  quizContainer.innerHTML = `
        <h2>Time's up!</h2>
        <p>Your score: ${score}/${questionsPerGame}</p>
        <button onclick="location.reload()">Restart</button>
      `;
}

submitButton.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === selectedQuizData[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questionsPerGame) {
      loadQuiz();
    } else {
      clearInterval(timer);
      quizContainer.innerHTML = `
            <h2>Quiz completed!</h2>
            <p>Your score: ${score}/${questionsPerGame}</p>
            <button onclick="location.reload()">Restart</button>
          `;
    }
  }
});

function getRandomQuizData(quizData, numQuestions) {
  const randomQuizData = [];
  const shuffledQuizData = quizData.sort(() => Math.random() - 0.5);
  for (let i = 0; i < numQuestions; i++) {
    randomQuizData.push(shuffledQuizData[i]);
  }
  return randomQuizData;
}

function getRandomQuizData(quizData, numQuestions) {
  const randomQuizData = [];
  const shuffledQuizData = quizData.sort(() => Math.random() - 0.5);
  for (let i = 0; i < numQuestions; i++) {
    randomQuizData.push(shuffledQuizData[i]);
  }
  return randomQuizData;
}


function selectDifficulty(difficulty) {
  window.location.href = 'quiz.html?difficulty=' + difficulty;
}

// Function to show difficulty buttons on mouseover
function showDifficultyButtons() {
  const difficultyButtons = document.getElementById('difficulty-buttons');
  difficultyButtons.classList.add('fade-in'); // Added class to trigger fade in
}


function hideDifficultyButtons() {
  const difficultyButtons = document.getElementById('difficulty-buttons');
  difficultyButtons.style.opacity = 0;
  difficultyButtons.style.pointerEvents = 'none';
}

const bannerText = document.getElementById('banner-text');
bannerText.addEventListener('mouseenter', () => {
  console.log('Mouse entered banner-text');
  showDifficultyButtons();
});