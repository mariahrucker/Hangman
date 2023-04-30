import pytest

from app import handleGuess

def test_handle_guess():
    # Test correct guess
    guesses = ['p', 'y']
    word = 'python'
    display = '_ _ _ _ _ _ '
    remaining = 6

    result = handleGuess(guesses, word, display, remaining, 'p')
    assert result == ('_ _ _ _ _ _ ', 6, '')

    result = handleGuess(guesses, word, display, remaining, 'y')
    assert result == ('_ y _ _ _ _ ', 6, '')

    # Test incorrect guess
    guesses = ['p', 'y', 'z', 'q', 'x']
    word = 'python'
    display = '_ y _ _ _ _ '
    remaining = 4

    result = handleGuess(guesses, word, display, remaining, 'z')
    assert result == ('_ y _ _ _ _ ', 3, '')

    # Test non-letter guess
    guesses = ['p', 'y', 'z', 'q', 'x']
    word = 'python'
    display = '_ y _ _ _ _ '
    remaining = 4

    result = handleGuess(guesses, word, display, remaining, '2')
    assert result == ('_ y _ _ _ _ ', 4, 'Please enter a letter.')

    # Test repeated guess
    guesses = ['p', 'y', 'z', 'q', 'x']
    word = 'python'
    display = '_ y _ _ _ _ '
    remaining = 4

    result = handleGuess(guesses, word, display, remaining, 'p')
    assert result == ('_ y _ _ _ _ ', 4, 'You already guessed that letter.')
