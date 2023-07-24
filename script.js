function selectDifficulty(difficulty) {
  window.location.href = 'quiz.html?difficulty=' + difficulty;
}

function showDifficultyButtons() {
  const difficultyButtons = document.getElementById('difficulty-buttons');
  difficultyButtons.style.opacity = 1;
  difficultyButtons.style.pointerEvents = 'auto';
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
