# ============================================================
#                LEAP YEAR CHECK
# ============================================================

"""
📌 DEFINITION:
A leap year is a year that has 366 days (extra day in February: 29 days).

A year is a Leap Year if:
1️⃣ It is divisible by 4  
2️⃣ BUT years divisible by 100 are NOT leap years  
3️⃣ HOWEVER, if divisible by 400 → It IS a leap year

Examples:
2020 → Leap Year
1900 → Not a Leap Year (divisible by 100 but not 400)
2000 → Leap Year (divisible by 400)
"""


# ------------------------------------------------------------
#                     POP METHOD
# ------------------------------------------------------------

print("---- POP METHOD ----")

year = int(input("Enter a year: "))

if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
    print(f"{year} is a Leap Year")
else:
    print(f"{year} is NOT a Leap Year")


# ------------------------------------------------------------
#                     OOP METHOD
# ------------------------------------------------------------

print("\n---- OOP METHOD ----")

class LeapYear:
    def __init__(self, year):
        self.year = int(year)

    def check(self):
        if (self.year % 400 == 0) or (self.year % 4 == 0 and self.year % 100 != 0):
            return f"{self.year} is a Leap Year"
        else:
            return f"{self.year} is NOT a Leap Year"

# Input from user
y = int(input("Enter another year: "))

# Create object
obj = LeapYear(y)

# Display result
print(obj.check())
