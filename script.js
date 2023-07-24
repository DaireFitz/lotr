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


function selectDifficulty(difficulty) {
  // Redirect to the corresponding quiz page based on the selected difficulty
  window.location.href = `quiz-${difficulty}.html`;
}

// Retrieve the difficulty level from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const difficulty = urlParams.get('difficulty');