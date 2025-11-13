# ==========================================================
#     SWAP TWO NUMBERS
# ==========================================================
# ----------------------------------------------------------
#                PROCEDURE ORIENTED PROGRAMMING (POP)
# ----------------------------------------------------------

print("POP Approach:")

# Swap using temporary variable
x = input("Enter value of x: ")
y = input("Enter value of y: ")

temp = x
x = y
y = temp

print(f"After swapping:")
print(f"x = {x}")
print(f"y = {y}")


# Swap without temporary variable
print("\nPOP Approach (Without Temp Variable):")
x = 5
y = 10

x, y = y, x

print(f"x = {x}")
print(f"y = {y}")


# ----------------------------------------------------------
#              OBJECT ORIENTED PROGRAMMING (OOP)
# ----------------------------------------------------------

print("\nOOP Approach:")

class SwapNumbers:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def swap_with_temp(self):
        temp = self.x
        self.x = self.y
        self.y = temp
        return self.x, self.y

    def swap_without_temp(self):
        self.x, self.y = self.y, self.x
        return self.x, self.y


# Using OOP
x = input("Enter value of x: ")
y = input("Enter value of y: ")

obj = SwapNumbers(x, y)

# swap using temp
a, b = obj.swap_with_temp()
print(f"Using temp variable → x = {a}, y = {b}")

# swap without temp
a, b = obj.swap_without_temp()
print(f"Without temp variable → x = {a}, y = {b}")
