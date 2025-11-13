# ============================================================
#              FACTORIAL SERIES
# ============================================================

"""
📌 DEFINITION:
The factorial of a number 'n' is the product of all positive integers
from 1 to n.

It is represented as:  n! 

Examples:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
1! = 1
0! = 1 (By mathematical definition)
"""

# ------------------------------------------------------------
#                     POP METHOD
# ------------------------------------------------------------

print("---- POP METHOD ----")
n = int(input("Enter a number: "))

fact = 1
for i in range(1, n + 1):
    fact *= i

print(f"Factorial of {n} = {fact}")


# ------------------------------------------------------------
#                     OOP METHOD
# ------------------------------------------------------------

print("\n---- OOP METHOD ----")

class Factorial:
    def __init__(self, number):
        self.number = number

    def find_factorial(self):
        fact = 1
        for i in range(1, self.number + 1):
            fact *= i
        return fact

# Taking input
n2 = int(input("Enter another number: "))

# Creating object
obj = Factorial(n2)

# Displaying result
print(f"Factorial of {n2} = {obj.find_factorial()}")
