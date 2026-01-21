# ============================================
#   COUNT DIGITS — POP + OOP VERSION
# ============================================

"""
Count Digits:
To count how many digits are present in a number.

Example:
12345 → 5 digits
"""


# ---------------------------------------------
#              POP METHOD (Simple)
# ---------------------------------------------
print("---- POP METHOD ----")

n = int(input("Enter a number: "))
num = n
count = 0

# If number is 0, it has 1 digit
if n == 0:
    count = 1
else:
    while n > 0:
        count += 1      # increase count
        n //= 10        # remove last digit

print(f"Number of digits in {num} is: {count}")


# ---------------------------------------------
#              OOP METHOD (Simple)
# ---------------------------------------------
print("\n---- OOP METHOD ----")

class CountDigits:
    def __init__(self, number):
        self.number = number

    def count_digits(self):
        n = self.number
        c = 0

        if n == 0:
            return 1

        while n > 0:
            c += 1
            n //= 10

        return c


num2 = int(input("Enter a number: "))
obj = CountDigits(num2)
print(f"Number of digits in {num2} is: {obj.count_digits()}")
