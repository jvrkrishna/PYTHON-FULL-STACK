# ============================================================
#              PALINDROME OR NOT
# ============================================================

"""
📌 DEFINITION:
A number or string is called a PALINDROME if it reads the same
forward and backward.

Examples:
121  → Palindrome
1221 → Palindrome
123  → Not Palindrome 
MADAM → Palindrome
ABC   → Not Palindrome
"""

# ------------------------------------------------------------
#                     POP METHOD
# ------------------------------------------------------------

print("---- POP METHOD ----")

n = input("Enter a number or string: ")   # Works for both number/string

if n == n[::-1]:      # Reverse comparison
    print(f"{n} is a Palindrome")
else:
    print(f"{n} is NOT a Palindrome")


# ------------------------------------------------------------
#                     OOP METHOD
# ------------------------------------------------------------

print("\n---- OOP METHOD ----")

class Palindrome:
    def __init__(self, value):
        self.value = str(value)

    def check(self):
        if self.value == self.value[::-1]:
            return f"{self.value} is a Palindrome"
        else:
            return f"{self.value} is NOT a Palindrome"

# Taking input
val = input("Enter another value: ")

# Creating object
obj = Palindrome(val)

# Displaying result
print(obj.check())
