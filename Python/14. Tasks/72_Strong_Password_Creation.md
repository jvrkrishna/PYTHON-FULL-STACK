# --------------------------------------------------------------
# STRONG PASSWORD GENERATOR
# Must contain:
# ✔ Alphabets
# ✔ Digits
# ✔ Special Symbols
# ✔ Minimum 8 characters
# --------------------------------------------------------------

import random

ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
DIGITS = "0123456789"
SPECIAL = "~!@#$%^&*()_+=-{}[];/.><,:'"

class PasswordGenerator:
    def __init__(self, length=8):
        self.length = max(8, length)   # ensure minimum 8 chars
        self.alpha = ALPHA
        self.digits = DIGITS
        self.special = SPECIAL
        self.all_chars = ALPHA + DIGITS + SPECIAL

    def generate(self):
        pwd = []

        # At least 1 char from each category
        pwd.append(random.choice(self.alpha))
        pwd.append(random.choice(self.digits))
        pwd.append(random.choice(self.special))

        # Fill remaining characters
        for _ in range(self.length - 3):
            pwd.append(random.choice(self.all_chars))

        # Shuffle for randomness
        random.shuffle(pwd)

        return "".join(pwd)


# Usage
print("\nStrong Password (OOP method):")
obj = PasswordGenerator(12)     # you can change length
print(obj.generate())
