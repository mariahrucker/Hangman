const { handleGuess } = require('./app.js');

test('handleGuess function', () => {
  // Test correct guess
  let guesses = ['p', 'y'];
  let word = 'python';
  let display = '_ _ _ _ _ _ ';
  let remaining = 6;

  let result = handleGuess(guesses, word, display, remaining, 'p');
  expect(result).toEqual(['_ _ _ _ _ _ ', 6, '']);

  result = handleGuess(guesses, word, display, remaining, 'y');
  expect(result).toEqual(['_ y _ _ _ _ ', 6, '']);

  // Test incorrect guess
  guesses = ['p', 'y', 'z', 'q', 'x'];
  word = 'python';
  display = '_ y _ _ _ _ ';
  remaining = 4;

  result = handleGuess(guesses, word, display, remaining, 'z');
  expect(result).toEqual(['_ y _ _ _ _ ', 3, '']);

  // Test non-letter guess
  guesses = ['p', 'y', 'z', 'q', 'x'];
  word = 'python';
  display = '_ y _ _ _ _ ';
  remaining = 4;

  result = handleGuess(guesses, word, display, remaining, '2');
  expect(result).toEqual(['_ y _ _ _ _ ', 4, 'Please enter a letter.']);

  // Test repeated guess
  guesses = ['p', 'y', 'z', 'q', 'x'];
  word = 'python';
  display = '_ y _ _ _ _ ';
  remaining = 4;

  result = handleGuess(guesses, word, display, remaining, 'p');
  expect(result).toEqual(['_ y _ _ _ _ ', 4, 'You already guessed that letter.']);
});
