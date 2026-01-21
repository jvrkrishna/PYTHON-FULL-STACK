# ================================================
#          REVERSE OF A NUMBER
# ================================================

"""
Reverse of a Number:
Example:
Input : 1234
Output: 4321
"""


# ------------------------------------------------
#                POP METHOD (Simple)
# ------------------------------------------------
print("---- POP METHOD ----")

n = int(input("Enter a number: "))
num = n
rev = 0

while n > 0:
    r = n % 10         # get last digit
    rev = rev * 10 + r # add digit to reverse
    n //= 10           # remove last digit

print(f"Reverse of {num} is: {rev}")


# ------------------------------------------------
#                OOP METHOD (Simple)
# ------------------------------------------------
print("\n---- OOP METHOD ----")

class ReverseNumber:
    def __init__(self, number):
        self.number = number

    def reverse(self):
        n = self.number
        rev = 0

        while n > 0:
            r = n % 10
            rev = rev * 10 + r
            n //= 10

        return rev


num2 = int(input("Enter a number: "))
obj = ReverseNumber(num2)
print(f"Reverse of {num2} is: {obj.reverse()}")
