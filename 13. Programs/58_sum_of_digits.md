# ============================================
#   SUM OF DIGITS
# ============================================

"""
Sum of Digits:
To find the sum of digits, we separate each digit and add them.

Example:
123 → 1 + 2 + 3 = 6
"""

# ---------------------------------------------
#              POP METHOD (Very Simple)
# ---------------------------------------------
print("---- POP METHOD ----")

n = int(input("Enter a number: "))
num = n
total = 0

while n > 0:
    total += n % 10      # take last digit
    n //= 10             # remove last digit

print(f"Sum of digits of {num} is: {total}")


# ---------------------------------------------
#              OOP METHOD (Very Simple)
# ---------------------------------------------
print("\n---- OOP METHOD ----")

class SumDigits:
    def __init__(self, number):
        self.number = number

    def get_sum(self):
        n = self.number
        s = 0
        while n > 0:
            s += n % 10
            n //= 10
        return s


num2 = int(input("Enter a number: "))
obj = SumDigits(num2)
print(f"Sum of digits of {num2} is: {obj.get_sum()}")
