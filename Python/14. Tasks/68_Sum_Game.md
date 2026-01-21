# ------------------------------------------------------------
# 🎮 SUM GAME — Random Math Quiz
# ------------------------------------------------------------
# ❓ Question:
# Write a Python program that:
# 1. Generates two random numbers.
# 2. Randomly hides one number or the result.
# 3. Asks the user to fill in the missing number.
# 4. Gives unlimited questions until a wrong answer.
# 5. Tracks the number of correct answers.
#
# ------------------------------------------------------------
# 🧠 Explanation:
# → randint(1,50) generates random numbers.
# → match-case decides which part of equation is hidden.
# → os.system("cls") clears the screen (Windows).
# → try-except ensures only numbers are accepted.
# → Loop continues until user enters a wrong answer.
#
# ------------------------------------------------------------
# ✅ Full Working Code
# ------------------------------------------------------------

import os
from random import randint

count = 0

while True:
    os.system("cls")  # clears screen (Windows)

    a = randint(1, 50)
    b = randint(1, 50)
    c = a + b

    question = randint(1, 3)
    print("Type your answer: ")

    # Pattern selection
    match question:
        case 1:
            print(f"? + {b} = {c}")   # user must guess 'a'
            correct_answer = a

        case 2:
            print(f"{a} + ? = {c}")   # user must guess 'b'
            correct_answer = b

        case 3:
            print(f"{a} + {b} = ?")   # user must guess result 'c'
            correct_answer = c

    # Validate numeric input
    while True:
        try:
            your_answer = int(input())
            break
        except:
            print("Please enter numbers only.")

    # Check answer
    if your_answer == correct_answer:
        print("Correct! Press Enter to continue...")
        count += 1
        input()  # pause
    else:
        print("Not Correct!")
        break

print(f"You have answered {count} questions correctly.")
