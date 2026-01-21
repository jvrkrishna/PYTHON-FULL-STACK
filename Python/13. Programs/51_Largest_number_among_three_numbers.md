# Largest number among three numbers (POP)

a = int(input("Enter a value: "))
b = int(input("Enter b value: "))
c = int(input("Enter c value: "))

if a > b and a > c:
    print(f"The value of {a} is big")
elif b > c:
    print(f"The value of {b} is big")
else:
    print(f"The value of {c} is big")


# Largest number among three numbers (OOP)

class LargestNumber:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def find_biggest(self):
        if self.a > self.b and self.a > self.c:
            return f"The value of {self.a} is big"
        elif self.b > self.c:
            return f"The value of {self.b} is big"
        else:
            return f"The value of {self.c} is big"


# Taking input and creating object
a = int(input("Enter a value: "))
b = int(input("Enter b value: "))
c = int(input("Enter c value: "))

obj = LargestNumber(a, b, c)
print(obj.find_biggest())


