# Number Guessing Game (OOP Version)

import random

class NumberGuessGame:
    def __init__(self, start=1, end=10):
        """
        Initialize the game with a number range.
        """
        self.start = start
        self.end = end
        self.secret_number = random.randint(start, end)
        self.attempts = 0

    def play(self):
        """
        Start the guessing game.
        """
        print(f"🎯 Welcome to Number Guess Game!")
        print(f"Guess the number between {self.start} and {self.end}.\n")

        while True:
            try:
                guess = int(input("Enter your guess: "))
            except ValueError:
                print("Please enter a valid number!\n")
                continue

            self.attempts += 1

            if guess == self.secret_number:
                print("\n🎉 Congrats! Your guess is correct!")
                break
            elif guess > self.secret_number:
                print("⬆️ Your guess is greater than the actual number.\n")
            else:
                print("⬇️ Your guess is less than the actual number.\n")

        print(f"\n📌 You took {self.attempts} attempts to guess the number.")


# Run the Game
if __name__ == "__main__":
    game = NumberGuessGame(1, 10)
    game.play()
