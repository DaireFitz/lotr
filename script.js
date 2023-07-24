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



// Retrieve the difficulty level from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty');

// Define the quiz data for each difficulty level
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
    question: "What is the name of the fiery mountain where the One Ring was forged?",
    a: "Orodruin",
    b: "Caradhras",
    c: "Dúnedain",
    d: "Orthanc",
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

// Define the number of questions per game
const questionsPerGame = 10;

// Customize the quiz based on the difficulty level
let selectedQuizData;

if (difficulty === 'easy') {
  selectedQuizData = getRandomQuizData(easyQuizData, questionsPerGame);
} else if (difficulty === 'medium') {
  // Select 10 random questions from the medium-level quiz data
  // ...
} else if (difficulty === 'hard') {
  // Select 10 random questions from the hard-level quiz data
  // ...
} else {
  // Default to a fallback difficulty if no or invalid difficulty is provided
  // Select 10 random questions from the fallback quiz data
  // ...
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

loadQuiz();

// Start the timer
const timer = setInterval(updateTimer, 1000);

function updateTimer() {
  timeLeft--;
  timerElement.innerText = `Time left: ${timeLeft}s`;

  if (timeLeft === 0) {
    clearInterval(timer);
    handleQuizEnd();
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








