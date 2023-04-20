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
for the form submission and new game button.This separation of concerns makes the code easier to read, understand, and maintain.
