// Function to handle the selected difficulty
function selectDifficulty(difficulty) {
  window.location.href = 'quiz.html?difficulty=' + difficulty;
}

const welcomeText = document.getElementById('welcome-text');
const difficultyButtons = document.querySelector('.difficulty-buttons');
// Event to allow difficulty options to fade in once the user hovers over <h1 class="Sindarin"
welcomeText.addEventListener('mouseenter', () => {
  difficultyButtons.style.opacity = 1;
  difficultyButtons.style.pointerEvents = 'auto';
});

welcomeText.addEventListener('mouseleave', () => {
  difficultyButtons.style.opacity = 0;
  difficultyButtons.style.pointerEvents = 'none';
});