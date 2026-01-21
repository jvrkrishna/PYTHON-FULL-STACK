# ==========================================================
#                MULTIPLICATION TABLE
# ==========================================================
"""
A MULTIPLICATION TABLE (Math Table) is a list of multiples
of a number. It is used to understand and memorize arithmetic
operations.

Example: Table of 5
5 × 1 = 5
5 × 2 = 10
...
5 × 10 = 50
"""

# ----------------------------------------------------------
# 🟦 POP APPROACH (Procedure Oriented Programming)
# ----------------------------------------------------------

print("POP Approach:")

n = int(input("Enter a number to print its table: "))

for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")


# ----------------------------------------------------------
# 🟩 OOP APPROACH (Object Oriented Programming)
# ----------------------------------------------------------

print("\nOOP Approach:")

class MathTable:
    def __init__(self, number):
        self.number = number

    def print_table(self):
        for i in range(1, 11):
            print(f"{self.number} x {i} = {self.number * i}")


num = int(input("Enter a number to print its table: "))

obj = MathTable(num)
obj.print_table()
