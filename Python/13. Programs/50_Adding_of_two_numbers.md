########### POP (Procedure Oriented Programming) ############
'''
POP focuses on functions.
The program is divided into small procedures (functions).
'''

# Adding two numbers using POP
def add_numbers():
    a = int(input("Enter a value: "))
    b = int(input("Enter b value: "))
    print(f"By adding {a} and {b} the result is {a + b}")

add_numbers()



########### OOP (Object Oriented Programming) ############
'''
OOP focuses on objects and classes.
Data + methods are wrapped inside a class (Encapsulation).
'''

class Calculator:
    def add(self):
        a = int(input("Enter a value: "))
        b = int(input("Enter b value: "))
        print(f"By adding {a} and {b} the result is {a + b}")

# Creating object
obj = Calculator()
obj.add()
