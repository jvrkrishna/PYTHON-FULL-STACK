# ============================================================
#                 STRONG NUMBER
# ============================================================

"""
📌 DEFINITION:
A Strong Number is a number whose sum of the factorial of each digit 
is equal to the original number.

Example:
145 → 1! + 4! + 5! 
    = 1 + 24 + 120 
    = 145  ✔ Strong Number

Other examples: 1, 2, 145
"""


# ------------------------------------------------------------
#                     POP METHOD
# ------------------------------------------------------------

print("---- POP METHOD ----")

import math

num = int(input("Enter a number: "))
temp = num
sum_fact = 0

while temp > 0:
    digit = temp % 10
    sum_fact += math.factorial(digit)
    temp //= 10

if sum_fact == num:
    print(f"{num} is a Strong Number")
else:
    print(f"{num} is NOT a Strong Number")


# ------------------------------------------------------------
#                     OOP METHOD
# ------------------------------------------------------------

print("\n---- OOP METHOD ----")

class StrongNumber:
    def __init__(self, number):
        self.number = number

    def is_strong(self):
        temp = self.number
        total = 0
        while temp > 0:
            digit = temp % 10
            total += math.factorial(digit)
            temp //= 10

        if total == self.number:
            return f"{self.number} is a Strong Number"
        else:
            return f"{self.number} is NOT a Strong Number"


# User input
n = int(input("Enter another number: "))

# Create object
obj = StrongNumber(n)

# Show result
print(obj.is_strong())
