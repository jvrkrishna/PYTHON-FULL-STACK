# ⚙️ Python Exception Handling

'''
In Python, errors can occur for many reasons such as wrong syntax, invalid operations, or unexpected user input.
We handle them using exception-handling mechanisms to prevent abnormal termination.
'''

# ------------------------------------------------------------
# 🧩 What Happens When an Exception Occurs?
# ------------------------------------------------------------
'''
1. When Python encounters an error, it creates an exception object.
2. It looks for appropriate handling code.
3. If handling code is found → continues execution.
4. If not → program terminates abnormally with an error message.
'''

# ------------------------------------------------------------
# 🧩 Types of Errors
# ------------------------------------------------------------
'''
Errors are divided into two categories:
1. Syntax Errors
2. Exceptions (Runtime Errors)
'''

# ------------------------------------------------------------
# 🧩 1️⃣ Syntax Errors
# ------------------------------------------------------------
'''
Syntax Errors occur when code violates Python syntax rules.
They are caught before execution.
'''

# Example: Missing Colon
# if x > 5
#     print("x > 5")   # SyntaxError: expected ':'

# Example: Mismatched Brackets
# print("Hello"       # SyntaxError: unexpected EOF

# Example: Indentation Error
# def greet():
# print("Hi")         # IndentationError

# Example: Using Keyword as Variable
# if = 10             # SyntaxError: invalid syntax


# ------------------------------------------------------------
# 🧩 2️⃣ Exceptions
# ------------------------------------------------------------
'''
Exception = Runtime Error
They occur during execution and can be handled using try-except.
'''

# Example:
# a = 10 / 0   # ZeroDivisionError
# open("no_file.txt")   # FileNotFoundError


# ------------------------------------------------------------
# 🧩 Common Python Exceptions
# ------------------------------------------------------------
'''
ZeroDivisionError
NameError
TypeError
ValueError
IndexError
KeyError
FileNotFoundError
ModuleNotFoundError
OverflowError
'''

# ------------------------------------------------------------
# 🧩 Exception Handling (try / except)
# ------------------------------------------------------------
'''
Syntax:
try:
    # risky code
except ExceptionType:
    # handling code
'''

# Example 1:
try:
    print(10 / 0)
except Exception as e:
    print(e)

# Example 2:
try:
    l = [10, 20, 30]
    print(l[6])
    print(100 / 0)
except ZeroDivisionError as e:
    print(e)
except IndexError as i:
    print(i)

# Example 3: Custom Message
try:
    l = [10, 20, 30]
    print(l[5])
except Exception as e:
    print("Error:", e)
    print("Custom Message: Index out of range.")


# ------------------------------------------------------------
# 🧩 Specific Exceptions
# ------------------------------------------------------------
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Cannot divide by zero!")

try:
    print(a + c)
except NameError as e:
    print(e)

try:
    print(10 + "Ram")
except TypeError as t:
    print(t)

try:
    a = int("Ram")
except ValueError as v:
    print(v)

try:
    l = [10, 20, 30]
    print(l[10])
except IndexError as i:
    print(i)

try:
    d = {1: "Ram", 2: "Seetha"}
    print(d[3])
except KeyError as k:
    print(k)

try:
    open("abc.txt")
except FileNotFoundError as f:
    print(f)

# ------------------------------------------------------------
# 🧩 Finally Block
# ------------------------------------------------------------
'''
finally block executes every time.
Used for cleanup code (closing files, releasing resources, etc.)
'''

try:
    print("File open")
    print(10 / 0)
except Exception as e:
    print(e)
finally:
    print("File closed (cleanup)")

# Example: Finally after successful try
try:
    print("Running...")
except Exception as e:
    print(e)
finally:
    print("Always executed")

# Example: When finally might NOT run
import os
try:
    print("Force Exit Example")
    os._exit(0)
finally:
    print("This will NOT execute")


# ------------------------------------------------------------
# 🧩 Else Block
# ------------------------------------------------------------
'''
Else runs only when there is no exception in try.
'''

try:
    print(10 / 2)
except ZeroDivisionError:
    print("Division error")
else:
    print("No exception occurred")

# Example
def add(a, b):
    try:
        result = a + b
    except Exception as e:
        print(e)
    else:
        print(f"The result is: {result}")

add(10, 20)
# add(10, "Ram")   # TypeError


# ------------------------------------------------------------
# 🧩 Assertion (assert)
# ------------------------------------------------------------
'''
Assertion is used for debugging.
Raises AssertionError if the condition is false.
Syntax:
    assert condition, "optional message"
'''

a = 100
assert a == 100  # OK

# Example:
a = 20
# assert a == 100, "a value is updated"

# Example in Function
def divide(a, b):
    assert b != 0, "Cannot divide by zero"
    return a / b

print(divide(10, 2))
# print(divide(10, 0))  # AssertionError

# Example with Prime Number
def prime_number(n):
    assert n > 1, "Prime number only above one"
    counter = 0
    for i in range(1, n + 1):
        if n % i == 0:
            counter += 1
    if counter == 2:
        return "Prime"
    else:
        return "Not Prime"

print(prime_number(5))
# print(prime_number(0))

# Type Check
value = 10.5
assert isinstance(value, float), "Value should be float"

# Range Check
score = 85
assert 0 <= score <= 100, "Score must be between 0 and 100"

# In Loop
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    assert num > 0, f"Invalid number: {num}"

# On Custom Class
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def apply_discount(self):
        assert self.price >= 0, "Price cannot be negative"
        self.price *= 0.9

product = Product("Laptop", 1000)
product.apply_discount()


# ------------------------------------------------------------
# 🧩 Complete Example (try/except/else/finally)
# ------------------------------------------------------------
def read_and_divide(path, divisor):
    try:
        f = open(path, 'r')
        data = f.read()
        result = 100 / divisor
    except FileNotFoundError as fe:
        print("File Error:", fe)
    except ZeroDivisionError as zde:
        print("Division Error:", zde)
    else:
        print("No exceptions, result:", result)
    finally:
        try:
            f.close()
            print("File closed (cleanup)")
        except Exception:
            print("File not opened properly")

# read_and_divide("abc.txt", 0)
# read_and_divide("abc.txt", 2)

# ------------------------------------------------------------
# 🧩 Conclusion
# ------------------------------------------------------------
'''
try     → risky code
except  → handle errors
else    → runs if no error
finally → cleanup code
assert  → debug condition

"Errors are inevitable — how you handle them defines code quality."
🐍✨
'''
