# Hangman Game

This Hangman game is built using JavaScript and HTML. In this version of the code, the game logic is separated into its own file `hangman.js` and is loaded into the HTML file using a script tag. This separation of concerns makes the code easier to read, understand, and maintain.

## Game Play

The game is played by guessing letters to complete a hidden word. The player has a limited number of guesses before the game is over. The hidden word is displayed as a series of dashes representing each letter in the word. As the player guesses correct letters, the corresponding dashes are replaced with the correct letters.

## Usage

To start the game, simply open the `index.html` file in your web browser. The game will automatically start, and you can begin guessing letters.

**Example:**

```
Word: _ _ _ _ _ _ _ _    Guesses left: 6

Player guesses "e"

Word: _ _ _ _ _ _ _ _    Guesses left: 5

Player guesses "a"

Word: _ _ _ A _ _ _ _    Guesses left: 5

Player guesses "i"

Word: _ _ _ A _ _ I _    Guesses left: 5

Player guesses "r"

Word: _ _ R A _ _ I _    Guesses left: 5

Player guesses "t"

Word: _ _ R A _ _ I _    Guesses left: 4

Player guesses "s"

Word: _ _ R A S _ I _    Guesses left: 4

Player guesses "p"

Word: _ _ R A S _ I _    Guesses left: 3

Player guesses "l"

Word: _ _ R A S _ I _    Guesses left: 2

Player guesses "c"

Word: _ C R A S _ I _    Guesses left: 2

Player guesses "n"

Word: _ C R A S N I _    Guesses left: 2

Player guesses "o"

Word: _ C R A S N I _    Guesses left: 1

Player guesses "u"

Word: _ C R A S N I _    Guesses left: 0
You lose! The word was RUBY.
```

## Illustration

**Here is the illustration of the Hangman on [CodePen](https://codepen.io/mariahrucker/pen/BaqworV)**

![Hangman Illustration in CodePen](https://user-images.githubusercontent.com/117225197/235468045-afad3c53-43b3-437b-8d7d-ec504909896f.png)

## Code Structure

The game logic is separated into its own file `hangman.js`. This file defines functions for initializing the game state, handling user guesses, and starting a new game. It also includes event listeners for the form submission and new game button.

Here is a brief overview of the functions defined in `hangman.js`:

- `initGame()`: Initializes the game state.
- `handleGuess()`: Handles user guesses and updates the game state accordingly.
- `renderWord()`: Renders the hidden word as a series of dashes.
- `renderGuesses()`: Renders the list of guessed letters.
- `renderStatus()`: Renders the game status (e.g., "You win!", "You lose!").
- `startNewGame()`: Starts a new game by resetting the game state.

## Security Considerations

While this Hangman game is just for fun, it's important to keep security considerations in mind when building any web application. Here are some best practices to keep in mind:

- Use HTTPS to encrypt all traffic between the web browser and the web server.
- Sanitize user input to prevent cross-site scripting (XSS) attacks.
- Use the Content Security Policy (CSP) to prevent code injection attacks.

## License

This code is licensed under the MIT License. See the LICENSE file for more information.

## Contributions

Contributions to this project are welcome! If you find a bug or want to suggest an improvement, please open an issue or a pull request on the GitHub repository.

## Credits

This code was created by Mariah Rucker.

## Contact

If you have any questions or concerns, please feel free to contact Mariah Rucker at mariahrucker@myyahoo.com.
