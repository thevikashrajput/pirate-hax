// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Smooth Scroll for Explore Button
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default anchor click behavior
  const targetSection = document.querySelector('#timeline'); // Change this to the section you want to scroll to
  targetSection.scrollIntoView({
    behavior: 'smooth', // Smooth scroll
    block: 'start' // Scroll to the start of the section
  });
});



// Play Birthday Song on Button Click
document.querySelector(".btn").addEventListener("click", function () {
  const birthdaySong = document.getElementById("birthday-song");
  birthdaySong.play();
  launchFireworks();
});

// Confetti Effect on Page Load
window.addEventListener("load", function () {
  confettiEffect();
  floatBalloons();
  addSparkles();
});

// Confetti Effect (Infinite)
function confettiEffect() {
  const colors = ["#ff4081", "#81d4fa", "#ffd54f", "#ff5252", "#69f0ae"];
  
  function createConfetti(i) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 3 + "s";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    setTimeout(() => {
      confetti.remove();
    }, 3000); // Adjust timing if necessary
  }

  // Repeat confetti effect indefinitely
  setInterval(() => {
    for (let i = 0; i < 20; i++) {
      createConfetti(i);
    }
  }, 3000); // Adjust this delay for how frequently confetti appears
}


// Balloon Floating Effect (Infinite)
function floatBalloons() {
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 10000); // Adjust timing if necessary
  }

  // Repeat balloon creation indefinitely
  setInterval(() => {
    for (let i = 0; i < 10; i++) { // You can change the number of balloons per batch
      createBalloon();
    }
  }, 4000); // Adjust the interval between batches of balloons
}


// Sparkle Effect around the Birthday Message (Infinite)
function addSparkles() {
  const message = document.getElementById("birthday-message");

  function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * message.offsetWidth + "px";
    sparkle.style.top = Math.random() * message.offsetHeight + "px";
    message.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 5000); // Adjust timing if necessary
  }

  // Repeat sparkle creation indefinitely
  setInterval(() => {
    for (let i = 0; i < 10; i++) {
      createSparkle();
    }
  }, 1000); // Adjust this delay for how frequently sparkles appear
}


// Fireworks Effect (Infinite)
function launchFireworks() {
  const container = document.getElementById("fireworks-container");

  function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = Math.random() * 100 + "vw";
    container.appendChild(firework);

    setTimeout(() => {
      firework.remove();
    }, 2000); // Adjust timing if necessary
  }

  // Repeat fireworks launch indefinitely
  setInterval(() => {
    for (let i = 0; i < 5; i++) {
      createFirework();
    }
  }, 5000); // Adjust this delay for how frequently fireworks appear
}
window.addEventListener("load", function () {
  confettiEffect();    // Infinite confetti
  floatBalloons();     // Infinite balloons
  addSparkles();       // Infinite sparkles
  launchFireworks();   // Infinite fireworks
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Play Birthday Song when user interacts (clicks, scrolls, or presses a key)
let isAudioPlayed = false;

function playBirthdaySong() {
  const birthdaySong = document.getElementById('birthday-song');
  if (!isAudioPlayed) {
    birthdaySong.play();
    isAudioPlayed = true; // Ensure it plays only once on first interaction
  }
}

// Add event listeners for user interaction
document.addEventListener('click', playBirthdaySong);
document.addEventListener('scroll', playBirthdaySong);
document.addEventListener('keydown', playBirthdaySong);

// Optional: Remove listeners after audio plays
function removeInteractionListeners() {
  document.removeEventListener('click', playBirthdaySong);
  document.removeEventListener('scroll', playBirthdaySong);
  document.removeEventListener('keydown', playBirthdaySong);
}

// Automatically remove listeners once the audio has played
document.getElementById('birthday-song').addEventListener('play', removeInteractionListeners);


// Countdown Timer
function countdownTimer(targetDate) {
  const timerElement = document.getElementById('timer');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateTimer() {
    const now = new Date();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      timerElement.innerHTML = "It's Birthday Time! 🎉";

      // Action after the countdown ends:
      showBirthdayMessage();
      launchFireworks();
      playBirthdaySong();

    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      daysElement.textContent = days;
      hoursElement.textContent = hours;
      minutesElement.textContent = minutes;
      secondsElement.textContent = seconds;
    }
  }

  const interval = setInterval(updateTimer, 1000);
}

// Set the countdown to midnight on October 1st, 2024
const birthdayDate = new Date('2024-10-01T00:00:00');
countdownTimer(birthdayDate);

// Function to show a special message after the countdown ends
function showBirthdayMessage() {
  const birthdayMessage = document.createElement('div');
  birthdayMessage.classList.add('birthday-message');
  birthdayMessage.innerHTML = `
    <h2>🎉 Happy Birthday, Vivek! 🎉</h2>
    <p>It's time to celebrate your special day!</p>
  `;
  document.body.appendChild(birthdayMessage);
}

// Function to play the birthday song
function playBirthdaySong() {
  const birthdaySong = document.getElementById('birthday-song');
  birthdaySong.play();
}

// Fireworks Effect after countdown ends
function launchFireworks() {
  const container = document.getElementById('fireworks-container');
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.classList.add('firework');
      firework.style.left = Math.random() * 100 + 'vw';
      container.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 2000);
    }, i * 500);
  }
}



// Trivia Quiz
const quizOptions = document.querySelectorAll('.quiz-option');
quizOptions.forEach(option => {
  option.addEventListener('click', () => {
    alert('Correct! [Friend\'s Name] loves Blue!');
  });
});

// Gift Reveal
document.getElementById('unwrap-gift').addEventListener('click', function() {
  document.getElementById('gift-image').style.display = 'none';
  document.getElementById('gift-content').style.display = 'block';
});

// Testimonials Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
  testimonials[currentTestimonial].classList.remove('visible');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].classList.add('visible');
}

setInterval(showNextTestimonial, 3000);


