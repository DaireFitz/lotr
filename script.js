 function selectDifficulty(difficulty) {
      //  code to handle the selected difficulty
      window.location.href = 'quiz.html?difficulty=' + difficulty;
    }

    const welcomeText = document.getElementById('welcome-text');
    const difficultyButtons = document.querySelector('.difficulty-buttons');
    // Event to allow dificulty  options to fade in once user hovers over welcome text
    welcomeText.addEventListener('mouseenter', () => {
      difficultyButtons.style.opacity = 1;
      difficultyButtons.style.pointerEvents = 'auto';
    });

    welcomeText.addEventListener('mouseleave', () => {
      difficultyButtons.style.opacity = 0;
      difficultyButtons.style.pointerEvents = 'none';
    });