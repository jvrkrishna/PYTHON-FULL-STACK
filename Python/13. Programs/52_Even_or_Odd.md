# =========================================
#   Even or Odd Program
# =========================================


# -----------------------------------------
#   Procedure-Oriented Programming (POP)
# -----------------------------------------

print("POP Approach:")

a = int(input("Enter a value: "))

if a % 2 == 0:
    print(f"The value {a} is Even")
else:
    print(f"The value {a} is Odd")



# -----------------------------------------
#   Object-Oriented Programming (OOP)
# -----------------------------------------

print("\nOOP Approach:")

class EvenOdd:
    def __init__(self, num):
        self.num = num

    def check(self):
        if self.num % 2 == 0:
            return f"The value {self.num} is Even"
        else:
            return f"The value {self.num} is Odd"


n = int(input("Enter a value: "))
obj = EvenOdd(n)
print(obj.check())
