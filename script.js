
// Function to show difficulty buttons on mouseenter
const bannerText = document.getElementById('banner-text');
bannerText.addEventListener('mouseenter', () => {
  console.log('Mouse entered banner-text');
  showDifficultyButtons();
});

// Function to show difficulty buttons on mouseover
function showDifficultyButtons() {
  const difficultyButtons = document.getElementById('difficulty-buttons');
  difficultyButtons.classList.add('fade-in'); // Added class to trigger fade in
}

// Function to hide difficulty buttons on mouseleave
function hideDifficultyButtons() {
  const difficultyButtons = document.getElementById('difficulty-buttons');
  difficultyButtons.style.opacity = 0;
  difficultyButtons.style.pointerEvents = 'none';
}




