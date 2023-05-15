// Word list
const words = [
    "javascript",
    "python",
    "html",
    "css",
    "ruby",
    "java",
    "csharp",
    "php",
    "swift",
    "kotlin",
    "typescript",
    "go",
    "rust",
    "scala",
    "lua",
    "perl",
    "r",
    "sql",
    "bash",
    "powershell",
    "clojure",
    "groovy",
    "haskell",
    "ocaml",
    "pascal",
    "prolog",
    "scheme",
    "smalltalk",
    "verilog",
    "vhdl"
];

let score = 0;
score += 10; // Increment the score by 10 for each correct guess

// Select a random word
let word = words[Math.floor(Math.random() * words.length)];

// Initialize game state
let guesses = [];
let remaining = 6;
let result = "";

// Display word as underscores
let display = "";
for (let i = 0; i < word.length; i++) {
    display += "_ ";
}
document.getElementById("word").textContent = display;

// Event listener for form submission
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    handleGuess();
});

// Function to handle a guess
function handleGuess() {
    // Get user input
    let guess = document.getElementById("guess").value.toLowerCase();

    // Clear input field
    document.getElementById("guess").value = "";

    // Check if input is a valid letter
    if (!guess.match(/[a-z]/i)) {
        alert("Please enter a letter.");
        return;
    }

    // Check if letter has already been guessed
    if (guesses.includes(guess)) {
        alert("You already guessed that letter.");
        return;
    }

    // Add letter to guesses
    guesses.push(guess);

    // Check if letter is in word
    if (word.includes(guess)) {
        // Update display with guessed letter
        let newDisplay = "";
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                newDisplay += guess + " ";
            } else {
                newDisplay += display[i * 2] + display[i * 2 + 1] + " ";
            }
        }
        display = newDisplay;
        document.getElementById("word").textContent = display;

        // Check if word is complete
        if (!display.includes("_")) {
            result = "You win!";
            document.getElementById("result").textContent = result;
            document.querySelector("form button").disabled = true;
        }
    } else {
        // Decrease remaining guesses
        remaining--;
        document.getElementById("guesses").textContent = "Guesses left: " + remaining;

        // Check if game is over
        if (remaining === 0) {
            result = "You lose! The word was " + word.toUpperCase() + ".";
            document.getElementById("result").textContent = result;

            document.querySelector("form button").disabled = true;
        }
    }

}
// Initialize game
function init() {
    // Reset game state
    guesses = [];
    remaining = 6;
    result = "";
    display = "";
    for (let i = 0; i < word.length; i++) {
        display += "_ ";
    }
    document.getElementById("word").textContent = display;
    document.getElementById("guesses").textContent = "Guesses left: " + remaining;
    document.getElementById("result").textContent = "";

    // Enable submit button
    document.querySelector("form button").disabled = false;

// Set the initial time limit to 60 seconds
var timeLimit = 60;

// Get the timer element
var timerEl = document.querySelector("p#timer");

// Update the timer every second
var timerInterval = setInterval(function() {
  // Decrement the time limit
  timeLimit--;

  // Update the timer display
timerEl.innerText = timeLimit + " seconds remaining";

  // Check if the time limit has reached zero
  if (timeLimit === 0) {
    // Stop the timer and end the game
    clearInterval(timerInterval);
    endGame();
  }

// Define difficulty levels
const difficultyLevels = {
  easy: {
    maxGuesses: 10,
    words: ["javascript", "python", "html", "css", "ruby"]
  },
  medium: {
    maxGuesses: 8,
    words: ["java", "csharp", "php", "swift", "kotlin"]
  },
  hard: {
    maxGuesses: 6,
    words: ["typescript", "go", "rust", "scala", "lua", "perl", "r", "sql", "bash", "powershell", "clojure", "groovy", "haskell", "ocaml", "pascal", "prolog", "scheme", "smalltalk", "verilog", "vhdl"]
  }
};

// Get the difficulty level selection element
const difficultyLevelSelect = document.getElementById("difficulty-level");

// Event listener for difficulty level selection
difficultyLevelSelect.addEventListener("change", function() {
  // Get the selected difficulty level
  const selectedDifficultyLevel = difficultyLevelSelect.value;

  // Get the selected difficulty level configuration
  const selectedDifficultyLevelConfig = difficultyLevels[selectedDifficultyLevel];

  // Update the game configuration with the selected difficulty level
  maxGuesses = selectedDifficultyLevelConfig.maxGuesses;
  words = selectedDifficultyLevelConfig.words;

  // Restart the game with the new configuration
  restartGame();
});

// Function to restart the game with the current configuration
function restartGame() {
  // Reset game state
  guesses = [];
  remaining = maxGuesses;
  result = "";
  display = "";
  word = words[Math.floor(Math.random() * words.length)];

  // Display word as underscores
  for (let i = 0; i < word.length; i++) {
      display += "_ ";
  }
  document.getElementById("word").textContent = display;
  document.getElementById("guesses").textContent = "Guesses left: " + remaining;
  document.getElementById("result").textContent = "";

  // Enable submit button
  document.querySelector("form button").disabled = false;
}

}, 1000);
}

// Event listener for new game button
document.getElementById("new-game").addEventListener("click", function() {
    word = words[Math.floor(Math.random() * words.length)];
    init();
});

// Initialize game on page load
window.addEventListener("load", function() {
    init();
});

// Update the timer every second
var timerInterval = setInterval(function() {
  // Decrement the time limit
  timeLimit--;

  // Update the timer display
  timerEl.innerText = timeLimit + " seconds remaining";

  // Check if the time limit has reached zero
  if (timeLimit === 0) {
    // Stop the timer and end the game
    clearInterval(timerInterval);
    endGame();
  }
}, 1000);

function endGame() {
  // Do something when the game ends
}
