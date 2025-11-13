# ==========================================================
#              PERFECT NUMBER OR NOT
# ==========================================================
"""
A PERFECT NUMBER is a positive integer that is equal to the
SUM of its PROPER DIVISORS (excluding the number itself).

Examples:
    ✔ 6  → 1 + 2 + 3 = 6
    ✔ 28 → 1 + 2 + 4 + 7 + 14 = 28
    ✘ 10 → 1 + 2 + 5 = 8  (Not Perfect)
"""


# ----------------------------------------------------------
# 🟦 POP APPROACH (Procedure Oriented Programming)
# ----------------------------------------------------------

print("POP Approach:")

n = int(input("Enter a number: "))
sum_div = 0

for i in range(1, n):
    if n % i == 0:
        sum_div += i

if sum_div == n:
    print(f"{n} is a Perfect Number")
else:
    print(f"{n} is NOT a Perfect Number")


# ----------------------------------------------------------
# 🟩 OOP APPROACH (Object Oriented Programming)
# ----------------------------------------------------------

print("\nOOP Approach:")

class PerfectNumber:
    def __init__(self, number):
        self.number = number

    def is_perfect(self):
        if self.number <= 0:
            return False

        total = 0
        for i in range(1, self.number):
            if self.number % i == 0:
                total += i

        return total == self.number


num = int(input("Enter a number: "))

obj = PerfectNumber(num)

if obj.is_perfect():
    print(f"{num} is a Perfect Number")
else:
    print(f"{num} is NOT a Perfect Number")
