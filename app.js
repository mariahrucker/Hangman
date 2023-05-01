function handleGuess(guesses, word, display, remaining, letter) {
  if (!letter.match(/[a-z]/i)) {
    return [display, remaining, 'Please enter a letter.'];
  }

  if (guesses.includes(letter)) {
    return [display, remaining, 'You already guessed that letter.'];
  }

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

  if (incorrect) {
    remaining--;
  }

  guesses.push(letter);

  return [newDisplay, remaining, ''];
}

module.exports = {
  handleGuess
};
