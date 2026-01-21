# ============================================================
#            ARMSTRONG NUMBER
# ============================================================

"""
📌 DEFINITION:
An Armstrong number (also called a Narcissistic number) is a number in which
the sum of the cubes of its digits is equal to the number itself.

For example:
153 → 1³ + 5³ + 3³ = 153
370 → 3³ + 7³ + 0³ = 370
371 → 3³ + 7³ + 1³ = 371
407 → 4³ + 0³ + 7³ = 407

These numbers satisfy the Armstrong condition.
"""

# ------------------------------------------------------------
#                     POP METHOD
# ------------------------------------------------------------

print("---- POP METHOD ----")
n = int(input("Enter a number: "))
num = n
sum_val = 0

while n > 0:
    r = n % 10           # extract digit
    sum_val += r ** 3    # cube of digit
    n //= 10             # remove last digit

if sum_val == num:
    print(f"{num} is an Armstrong Number.")
else:
    print(f"{num} is NOT an Armstrong Number.")


# ------------------------------------------------------------
#                     OOP METHOD
# ------------------------------------------------------------

print("\n---- OOP METHOD ----")

class Armstrong:
    def __init__(self, number):
        self.number = number

    def is_armstrong(self):
        n = self.number
        sum_val = 0

        while n > 0:
            r = n % 10
            sum_val += r ** 3
            n //= 10

        return sum_val == self.number


num2 = int(input("Enter another number: "))
obj = Armstrong(num2)

if obj.is_armstrong():
    print(f"{num2} is an Armstrong Number.")
else:
    print(f"{num2} is NOT an Armstrong Number.")
