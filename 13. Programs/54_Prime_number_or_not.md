# ==========================================================
#                PRIME NUMBER Or Not
# ==========================================================
"""
A PRIME NUMBER is a natural number GREATER THAN 1
that has EXACTLY TWO FACTORS:
    ✔ 1
    ✔ itself

Examples of Prime Numbers: 2, 3, 5, 7, 11, 13
Examples of Non-Prime Numbers: 1, 4, 6, 8, 9, 12
"""

# ----------------------------------------------------------
# 🟦 POP APPROACH (Procedure Oriented Programming)
# ----------------------------------------------------------

print("POP Approach:")

num = int(input("Enter a number: "))

if num > 1:
    count = 0
    for i in range(1, num + 1):
        if num % i == 0:
            count += 1

    if count == 2:
        print(f"{num} is a Prime Number")
    else:
        print(f"{num} is NOT a Prime Number")
else:
    print("Prime numbers must be greater than 1")


# ----------------------------------------------------------
# 🟩 OOP APPROACH (Object Oriented Programming)
# ----------------------------------------------------------

print("\nOOP Approach:")

class PrimeCheck:
    def __init__(self, number):
        self.number = number

    def is_prime(self):
        if self.number <= 1:
            return False

        count = 0
        for i in range(1, self.number + 1):
            if self.number % i == 0:
                count += 1

        return count == 2


n = int(input("Enter a number: "))

obj = PrimeCheck(n)

if obj.is_prime():
    print(f"{n} is a Prime Number")
else:
    print(f"{n} is NOT a Prime Number")
