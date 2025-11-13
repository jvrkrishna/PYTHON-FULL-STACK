# ==========================================================
#                CALCULATOR PROGRAM
# ==========================================================
"""
A CALCULATOR PROGRAM performs arithmetic operations such as:
Addition, Subtraction, Multiplication, Division, Modulus,
Floor division, and Exponentiation.

We can build it using:
1️⃣ POP (Procedure Oriented Programming)
2️⃣ OOP (Object Oriented Programming)
"""


# ----------------------------------------------------------
# 🟦 POP APPROACH (Procedure Oriented Programming)
# ----------------------------------------------------------

print("POP Approach Calculator:")

print("Operations: +  -  *  /  %  //  **")
choice = input("Enter your operation: ")

a = float(input("Enter first number: "))
b = float(input("Enter second number: "))

if choice == "+":
    print(f"Result = {a + b}")
elif choice == "-":
    print(f"Result = {a - b}")
elif choice == "*":
    print(f"Result = {a * b}")
elif choice == "/":
    print(f"Result = {a / b}")
elif choice == "%":
    print(f"Result = {a % b}")
elif choice == "//":
    print(f"Result = {a // b}")
elif choice == "**":
    print(f"Result = {a ** b}")
else:
    print("Invalid Operation!")


# ----------------------------------------------------------
# 🟩 OOP APPROACH (Object Oriented Programming)
# ----------------------------------------------------------

print("\nOOP Approach Calculator:")

class Calculator:
    def __init__(self, a, b, op):
        self.a = a
        self.b = b
        self.op = op

    def compute(self):
        if self.op == "+":
            return self.a + self.b
        elif self.op == "-":
            return self.a - self.b
        elif self.op == "*":
            return self.a * self.b
        elif self.op == "/":
            return self.a / self.b
        elif self.op == "%":
            return self.a % self.b
        elif self.op == "//":
            return self.a // self.b
        elif self.op == "**":
            return self.a ** self.b
        else:
            return "Invalid Operation!"


op = input("Enter operation (+ - * / % // **): ")
x = float(input("Enter first number: "))
y = float(input("Enter second number: "))

calc = Calculator(x, y, op)
print("Result =", calc.compute())
