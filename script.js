
// Function to fetch the quiz data from the JSON file
  async function fetchQuizData(difficulty) {
    try {
      const response = await fetch('quizData.json');
      const quizData = await response.json();
      return quizData[difficulty];
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      return null;
    }
  }

  function selectDifficulty(difficulty) {
    // Redirect to the corresponding quiz page based on the selected difficulty
    window.location.href = `quiz-${difficulty}.html`;
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

  function selectDifficulty(difficulty) {
    // Redirect to the corresponding quiz page based on the selected difficulty
    window.location.href = `quiz-${difficulty}.html`;
  }

  // Define the number of questions per game
  const questionsPerGame = 10;

  // Retrieve the difficulty level from the query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const difficulty = urlParams.get('difficulty');

  // Customize the quiz based on the difficulty level
  let selectedQuizData;

  async function loadQuizData() {
    if (difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard') {
      selectedQuizData = await fetchQuizData(difficulty);
      if (selectedQuizData === null) {
        // Error fetching quiz data, redirect to default difficulty (easy)
        window.location.href = 'index.html';
        return;
      }
      loadQuiz();
    } else {
      // If no or invalid difficulty is provided, redirect to the default difficulty (easy in this case)
      window.location.href = 'index.html';
    }
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

  loadQuizData();

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