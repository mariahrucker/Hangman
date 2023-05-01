/**
 * The function takes in a list of previous guesses, the secret word, the current display of the word, 
 * the number of remaining guesses, and a new guess letter. It returns a new display of the word, the updated
 * number of remaining guesses, and a message for the user.
 *
 * @param {Array} guesses - A list of previously guessed letters
 * @param {String} word - The secret word to guess
 * @param {String} display - The current display of the word
 * @param {Number} remaining - The number of remaining guesses
 * @param {String} letter - The new letter that the user guessed
 * 
 * @returns {Array} An array containing the new display of the word, the updated number of remaining guesses, 
 * and a message for the user.
 */
function handleGuess(guesses, word, display, remaining, letter) {
  // Check if the new guess is a letter
  if (!letter.match(/[a-z]/i)) {
    return [display, remaining, 'Please enter a letter.'];
  }

  // Check if the new guess has already been guessed before
  if (guesses.includes(letter)) {
    return [display, remaining, 'You already guessed that letter.'];
  }

  // Update the display of the word with the new guess
  let newDisplay = '';
  let incorrect = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      newDisplay += letter + ' ';
      incorrect = false;
    } else {
      newDisplay += display[i*2] + display[i*2+1];
    }
  }

  // Decrement the number of remaining guesses if the new guess is incorrect
  if (incorrect) {
    remaining--;
  }

  // Add the new guess to the list of previous guesses
  guesses.push(letter);

  // Return the new display of the word, the updated number of remaining guesses, and an empty message
  return [newDisplay, remaining, ''];
}

// Export the handleGuess function so it can be used in other files
module.exports = {
  handleGuess
};
