# 📑 INDEX

1. Introduction to Python  
2. Features of Python  
3. Variables & Datatypes  
4. Operators in Python  
5. Conditional Statements  
6. Looping Statements  
7. Functions (POP & OOP)  
8. Collections (List, Tuple, Set, Dict)  
9. eval() Function  
10. Object Oriented Programming (OOP) Concepts  
11. Types of Inheritance  
12. super() Function  
13. Method & Constructor Overriding  
14. Operator Overloading  
15. Abstract Class & Interface  
16. Access Modifiers & Name Mangling  
17. Encapsulation  
18. Exception Handling, Finally & Else, Assertions  
19. File Handling  
20. Multithreading  
21. Important Python Programs  
22. Pattern Printing Logic  
23. Special Tasks & Input Tricks  
24. Games & Random Module Tasks  
25. Bank Management System Project  
26. Conclusion  

---

# 1. Introduction to Python

Python is a **high-level**, **interpreted**, **object-oriented** programming language known for its clean and readable syntax.  
It supports multiple paradigms: procedural, object-oriented, and functional programming.

### Why Python?
- Simple and beginner-friendly  
- Vast library support  
- Used in AI, ML, Web development, Automation  
- Platform independent  
- Free and open source  

---

# 2. Features of Python

- **Interpreted** – executed line by line  
- **Dynamically Typed** – types decided at runtime  
- **Portable** – runs on Windows, Linux, macOS  
- **Extensive Libraries** – numpy, pandas, django  
- **Object-Oriented**  
- **Large Community Support**  

---

# 3. Variables & Datatypes

# 🧠 Python Variables & Datatypes — Detailed Notes

## 📌 What is a Variable?
A **variable** is a name given to a memory location where data is stored temporarily.  
It acts like a container that holds information which can be changed during program execution.

### ✔ Key Points
- You don't need to declare the datatype — Python detects it automatically.
- A variable is created when value is assigned.
- Variable names are case-sensitive (`Name` and `name` are different).

### ✔ Rules for Naming Variables
- Must start with a letter or underscore (`_name`, `name`, `Name` ✓)
- Cannot start with a number (`1name` ✗)
- Cannot use special characters (`name@`, `%age` ✗)
- Cannot use keywords (`class`, `for`, `while` ✗)

---

# 🧩 Basic Datatypes in Python

Python supports many built-in datatypes, but these are the most commonly used:

## 1️⃣ **int**  
Stores whole numbers (positive or negative).

```python
age = 21
marks = -50
```

## 2️⃣ **float**  
Stores decimal numbers.

```python
price = 99.50
pi = 3.14159
```

## 3️⃣ **str** (String)  
Stores text inside quotes (single `' '` or double `" "`).

```python
name = "Rahul"
msg = 'Hello Python'
```

## 4️⃣ **bool**  
Boolean values → `True` or `False`

```python
is_active = True
is_student = False
```

---

# 🔢 Collection Datatypes

## 5️⃣ **list** (Mutable)
A list can store multiple values, and the values can be changed later.

```python
fruits = ["apple", "banana", "mango"]
fruits[1] = "orange"   # list is changeable
```

## 6️⃣ **tuple** (Immutable)
Values cannot be changed once created.

```python
colors = ("red", "green", "blue")
```

## 7️⃣ **set** (Unique & Unordered)
Automatically removes duplicate values.

```python
numbers = {1, 2, 3, 3, 2}   # duplicates removed → {1,2,3}
```

## 8️⃣ **dict** (Key-Value Pairs)
Like a mini-database that stores data in pairs.

```python
student = { "name": "Ravi", "age": 20, "city": "Hyderabad" }
```

---

# 🧪 Checking the Datatype
Use the built-in `type()` function:

```python
x = 10
print(type(x))   # <class 'int'>
```

---

# 📘 Example Program Using Multiple Datatypes

```python
name = input("Enter Name: ")
age = int(input("Enter Age: "))

details = {
    "name": name,
    "age": age,
    "is_adult": age >= 18
}

print(f"Hello {details['name']}, you are {details['age']} years old.")
print("Adult:", details["is_adult"])
```

---

# 🔥 Additional Examples

### 📝 Variable Reassignment
Variables can change datatype:

```python
x = 10
x = "Python"   # valid, but not recommended
```

### 📝 Multiple Assignments
```python
a, b, c = 10, 20, 30
```

### 📝 Assigning Same Value to Multiple Variables
```python
x = y = z = 5
```

---

# 🎯 Summary
| Datatype | Description | Mutable? | Example |
|---------|-------------|----------|---------|
| int | Whole numbers | No | 10 |
| float | Decimal numbers | No | 10.5 |
| str | Text data | No | "Hello" |
| bool | True/False | No | True |
| list | Ordered & changeable | Yes | [10,20,30] |
| tuple | Ordered & unchangeable | No | (10,20,30) |
| set | Unique values | Yes | {10,20,30} |
| dict | Key-value pairs | Yes | {"name":"Ram"} |

---

If you want more detailed explanations on **operators**, **conditions**, or **functions**, tell me — I can prepare them in the same style. 😊📘

---

# 4. Operators in Python

### Types of Operators:
- Arithmetic → +, -, *, /, //, %, **  
- Relational → <, >, ==, !=, <=  
- Logical → and, or, not  
- Assignment → +=, -=  
- Bitwise → &, |, ^  
- Identity → is, is not  
- Membership → in, not in  

---

# 5. Conditional Statements

Used to make decisions.

```python
if condition:
    statement
elif condition:
    statement
else:
    statement
```

---

# 🧠 Python Conditional & Looping Statements — Detailed Notes

# 5️⃣ Conditional Statements in Python

Conditional statements are used when you want your program to **make decisions** based on certain conditions.

Python supports three main conditional blocks:

- `if`
- `elif` (else if)
- `else`

---

## ✔ Syntax of Conditional Statements

```python
if condition:
    statement
elif condition:
    statement
else:
    statement
```

---

## ✔ How it Works

1. `if` → Python checks the first condition.  
2. `elif` → Checked only if the previous conditions were False.  
3. `else` → Executes when none of the above conditions are True.

---

## ✔ Example 1: Checking Age

```python
age = int(input("Enter age: "))

if age >= 18:
    print("You are eligible to vote.")
elif age > 0:
    print("You are too young to vote.")
else:
    print("Invalid age entered.")
```

---

## ✔ Example 2: Number Classification

```python
n = int(input("Enter number: "))

if n > 0:
    print("Positive")
elif n < 0:
    print("Negative")
else:
    print("Zero")
```

---

## ✔ Nested if (if inside if)

```python
age = 20
citizen = True

if age >= 18:
    if citizen:
        print("Eligible for voting.")
    else:
        print("Citizenship required.")
```

---

# 6️⃣ Looping Statements in Python

Loops are used to repeat a block of code multiple times.

Python provides two main types of loops:

- **for loop**
- **while loop**

---

# 🔁 For Loop — Detailed Explanation

The `for` loop is used when you know how many times you want to repeat something.

It is commonly used with the `range()` function.

## ✔ Example

```python
for i in range(1, 6):
    print(i)
```

### ✔ Output:
```
1
2
3
4
5
```

---

## ✔ range() Function Explained

`range(start, stop, step)`

- `start` → beginning value (default is 0)  
- `stop` → stopping value (not included)  
- `step` → increment value  

Example:

```python
for i in range(0, 10, 2):
    print(i)
```

Output:
```
0
2
4
6
8
```

---

# 🔁 While Loop — Detailed Explanation

The `while` loop continues until the condition becomes **False**.

## ✔ Example

```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

### ✔ Output:
```
1
2
3
4
5
```

---

## ✔ Infinite Loop (Be Careful!)

```python
while True:
    print("This will run forever!")
```

Use `break` inside the loop to stop it.

---

## ✔ Example: Breaking a Loop

```python
i = 1
while True:
    print(i)
    if i == 5:
        break
    i += 1
```

---

## ✔ continue Statement

Skips the current iteration.

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

Output:
```
1
2
4
5
```

---

# 🎯 Summary Table

| Concept | Description | Example |
|--------|-------------|---------|
| if | Executes when condition is True | `if x > 0:` |
| elif | Additional condition | `elif x == 0:` |
| else | Default case | `else:` |
| for loop | Repeats fixed number of times | `for i in range(5):` |
| while loop | Repeats until condition is False | `while n < 10:` |
| break | Stops loop | `break` |
| continue | Skips current iteration | `continue` |

---

If you want, I can also prepare **Functions, Operators, OOP, Inheritance, Exception Handling**, etc., in **the same detailed Markdown style**.  
Just tell me! 😊📘


# 7. Functions (POP & OOP)

# 🔧 7️⃣ Functions in Python — Complete Detailed Notes

Functions are one of the most important concepts in Python.  
They allow us to **divide a program into reusable blocks of code**, improving readability and reducing repetition.

---

# ✔ What is a Function?

A **function** is a block of code that performs a specific task.  
You define a function once and use it (call it) many times.

---

# ✔ Why Functions?

- Reduces code repetition  
- Increases readability  
- Makes debugging easier  
- Supports modular programming  
- Helps achieve reusability  

---

# ✔ Types of Functions in Python

1. **Built-in Functions**  
   (print, input, len, type, range, max, min, sum, etc.)

2. **User-defined Functions**  
   (functions you create using `def`)

3. **Lambda Functions**  
   (one-line anonymous functions)

4. **Functions in OOP (Methods)**  
   Functions inside classes

---

# 🟦 1. User-defined Functions

## ✔ Syntax

```python
def function_name(parameters):
    # block of code
    return value
```

---

## ✔ Example: Simple Function

```python
def greet():
    print("Hello, welcome to Python!")
```

Calling the function:

```python
greet()
```

---

# 🟦 2. Function with Parameters

Parameters allow sending data into a function.

```python
def add(a, b):
    print("Sum =", a + b)
```

Calling:

```python
add(10, 20)
```

---

# 🟦 3. Function with Return Value

`return` sends data back to the caller.

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)
```

---

# 🟦 4. Default Parameters

Used when you want a parameter to have a default value.

```python
def greet(name="User"):
    print("Hello", name)
```

Calling:

```python
greet()
greet("Rahul")
```

---

# 🟦 5. Variable-length Arguments

### 👉 *args (non-keyword arguments)

Accepts any number of values as a tuple.

```python
def total(*numbers):
    print(sum(numbers))

total(1, 2, 3, 4)
```

---

### 👉 **kwargs (keyword arguments)**

Accepts values as dictionary key-value pairs.

```python
def details(**info):
    print(info)

details(name="Amit", age=22, course="Python")
```

---

# 🟦 6. Lambda Functions (Anonymous Functions)

A lambda function is a small **one-line** function.

```python
square = lambda x: x * x
print(square(5))
```

Another example:

```python
add = lambda a, b: a + b
print(add(3, 4))
```

---

# 🟦 7. Functions Inside Functions (Nested Functions)

```python
def outer():
    print("Outer function")

    def inner():
        print("Inner function")

    inner()

outer()
```

---

# 🟦 8. Recursion (Function Calling Itself)

Example: Factorial using recursion

```python
def fact(n):
    if n == 0:
        return 1
    return n * fact(n-1)

print(fact(5))
```

---

# 🟥 POP vs OOP Functions

# ✔ POP (Procedure-Oriented Programming)

Functions exist independently.

```python
def add(a, b):
    return a + b
```

---

# ✔ OOP (Object-Oriented Programming)

Functions inside a class are called **methods**.

```python
class Calc:
    def add(self, a, b):
        return a + b

c = Calc()
print(c.add(5, 3))
```

---

# 🟦 Constructor Function — `__init__()`

Called automatically when an object is created.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s = Student("Anu", 21)
print(s.name, s.age)
```

---

# 🟩 Summary Table

| Function Type | Description | Example |
|--------------|-------------|---------|
| Simple Function | Performs a task | `def greet():` |
| Parameterized | Accepts values | `def add(a,b):` |
| Return Function | Returns a value | `return a+b` |
| Default Args | Default values | `def greet(name="User")` |
| *args | Accepts many values | `def total(*n)` |
| **kwargs | Accepts key-value pairs | `def info(**d)` |
| Lambda | One-line function | `lambda x: x*x` |
| Method | Function inside class | `class A: def show()` |
| Constructor | Auto-called method | `__init__()` |

---

# 8. Collections
# 🧺 8️⃣ Python Collections — Detailed Notes

Python provides four major built-in collection datatypes.  
Each is used to store multiple values, but each behaves differently.

---

# ✔ Overview of Collections

| Collection | Ordered? | Mutable? | Allows Duplicate? | Indexed? | Syntax |
|-----------|----------|----------|--------------------|----------|--------|
| **List** | ✔ Yes | ✔ Yes | ✔ Yes | ✔ Yes | `[ ]` |
| **Tuple** | ✔ Yes | ❌ No | ✔ Yes | ✔ Yes | `( )` |
| **Set** | ❌ No | ✔ Yes | ❌ No | ❌ No | `{ }` |
| **Dictionary** | ✔ Yes | ✔ Yes | Keys ❌, Values ✔ | Key-based | `{key:value}` |

---

# 🟦 1. LIST — Mutable Collection

A **list** is an ordered, changeable (mutable) collection.

### ✔ Syntax
```python
l = [1, 2, 3, 4]
```

### ✔ Properties
- Maintains order  
- Allows duplicates  
- Supports indexing & slicing  
- Mutable (values can be changed)

### ✔ Common Operations

```python
l = [10, 20, 30]

l.append(40)        # add item
l.insert(1, 15)     # insert at index
l.remove(20)        # remove value
l.pop()             # remove last item
l.pop(1)            # remove index
l[0] = 100          # update value
```

### ✔ Slicing
```python
print(l[1:3])  # from index 1 to 2
```

### ✔ Example
```python
numbers = [1, 2, 3]
numbers.append(4)
print(numbers)  # [1,2,3,4]
```

---

# 🟧 2. TUPLE — Immutable Collection

A **tuple** is ordered but **cannot be changed**.

### ✔ Syntax
```python
t = (1, 2, 3)
```

### ✔ Properties
- Ordered  
- Allows duplicates  
- Supports indexing  
- **Immutable**

### ✔ Why use tuple?
- Faster than list  
- Safe from modifications  
- Used for fixed data (e.g., coordinates)

### ✔ Accessing Values
```python
print(t[0])
```

### ✔ Example
```python
t = (10, 20, 30)
print(t[1])      # 20
```

---

# 🟩 3. SET — Unordered Unique Collection

A **set** contains unique, unordered items.

### ✔ Syntax
```python
s = {1, 2, 3}
```

### ✔ Properties
- No duplicate values  
- Unordered  
- No indexing  
- Mutable  

### ✔ Useful for:
- Removing duplicates  
- Mathematical operations (union, intersection)

### ✔ Operations

```python
s = {1, 2, 3}

s.add(4)
s.remove(2)
s.discard(5)     # no error if 5 not exists
```

### ✔ Set Math Operations

```python
a = {1,2,3}
b = {3,4,5}

print(a.union(b))        # {1,2,3,4,5}
print(a.intersection(b)) # {3}
print(a.difference(b))   # {1,2}
```

---

# 🟦 4. DICTIONARY — Key–Value Pairs

A **dictionary** stores data in **key:value** format.

### ✔ Syntax
```python
d = {"name": "Raj", "age": 20}
```

### ✔ Properties
- Keys are unique  
- Values can be duplicated  
- Mutable  
- Ordered (Python 3.7+)  

---

### ✔ Accessing Values

```python
print(d["name"])
```

### ✔ Adding Items

```python
d["city"] = "Delhi"
```

### ✔ Changing Values

```python
d["age"] = 25
```

### ✔ Removing Items

```python
d.pop("age")
d.popitem()      # removes last pair
```

### ✔ Dictionary Methods

```python
d.keys()
d.values()
d.items()
```

---

# 🟨 Summary Table

| Collection | Best Use Case |
|-----------|---------------|
| **List** | Storing ordered, changeable data |
| **Tuple** | When data must *not change* |
| **Set** | Unique values or mathematical operations |
| **Dictionary** | Fast lookups using keys |

---

# 🟦 Examples Summary

### List
```python
l = [1,2,3]
```

### Tuple
```python
t = (1,2,3)
```

### Set
```python
s = {1,2,3}
```

### Dictionary
```python
d = {"name":"Raj", "age":20}
```

---

# 9. eval() Function

Converts string to python object.

```python
x = eval("10 + 20")
l = eval("[1,2,3]")
```

---

# 🧠 10. Object-Oriented Programming (OOP) — Detailed Notes

Object-Oriented Programming is a programming paradigm based on the concepts of **classes** and **objects**.  
It allows modular, reusable, and scalable program structure.

---

## 🔹 10.1 Class
A **class** is a blueprint or template used to create objects.

### Example:
```python
class Student:
    name = "Raj"
```

---

## 🔹 10.2 Object
An **object** is an instance of a class.

```python
s = Student()
print(s.name)
```

---

## 🔹 10.3 Constructor
A **constructor** is a special method (`__init__`) that runs automatically when an object is created.

```python
class Student:
    def __init__(self, name):
        self.name = name

s = Student("Rahul")
print(s.name)
```

---

## 🔹 10.4 Inheritance
Inheritance allows one class to acquire properties of another class.

---

## 🔹 10.5 Polymorphism
Polymorphism means **same function name, different behavior**.

Example: method overriding, operator overloading.

---

## 🔹 10.6 Abstraction
Abstraction means **hiding implementation details and showing only important features**.

---

## 🔹 10.7 Encapsulation
Encapsulation means **binding data + methods together** and **restricting direct access**.

---

---

# 🏛 11. Types of Inheritance

Python supports **5 types** of inheritance:

### ✔ 1. Single Inheritance
One parent → one child

```python
class A:
    pass
class B(A):
    pass
```

### ✔ 2. Multiple Inheritance
Child inherits from multiple parents

```python
class A: pass
class B: pass
class C(A, B): pass
```

### ✔ 3. Multilevel Inheritance
Parent → Child → Grandchild

```python
class A: pass
class B(A): pass
class C(B): pass
```

### ✔ 4. Hierarchical Inheritance
One parent → multiple children

```python
class A: pass
class B(A): pass
class C(A): pass
```

### ✔ 5. Hybrid Inheritance  
Combination of any two or more types.

---

---

# 🆙 12. super() Function — Detailed

`super()` is used to call **parent class methods or constructors** inside a child class.

### Example:
```python
class A:
    def show(self):
        print("Parent")

class B(A):
    def show(self):
        super().show()    # calling parent method
        print("Child")

obj = B()
obj.show()
```

---

---

# 🔁 13. Method & Constructor Overriding

## ✔ Method Overriding
When the child class defines the same method as the parent but with different behavior.

```python
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")
```

---

## ✔ Constructor Overriding

```python
class A:
    def __init__(self):
        print("Parent")

class B(A):
    def __init__(self):
        print("Child")   # overrides parent constructor
```

---

---

# ➕ 14. Operator Overloading

Allows operators like `+`, `-`, `*` to work with objects.

### Example:
```python
class A:
    def __init__(self, x):
        self.x = x
    
    def __add__(self, other):
        return self.x + other.x

a = A(10)
b = A(5)

print(a + b)   # 15
```

---

---

# 🌀 15. Abstract Class & Interface

Abstract classes are created using the `abc` module.

- Contains **one or more abstract methods**
- Cannot create objects
- Forces child classes to implement methods

### Example:
```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def area(self):
        print("Area method implemented")
```

---

---

# 🔐 16. Access Modifiers in Python

Python supports **three levels** of access:

| Modifier | Symbol | Meaning |
|----------|---------|----------|
| Public | `x` | Accessible everywhere |
| Protected | `_x` | Accessible inside class + child classes |
| Private | `__x` | Completely hidden in class (name-mangling) |

### Example:
```python
class A:
    def __init__(self):
        self.x = 10      # public
        self._y = 20     # protected
        self.__z = 30    # private
```

---

---

# 🛡 17. Encapsulation (Data Hiding)

Encapsulation = **data + methods bundled together** + controlled access.

```python
class Bank:
    def __init__(self):
        self.__balance = 1000   # private

    def deposit(self, amt):
        self.__balance += amt

    def get_balance(self):
        return self.__balance
```

---

---

# ⚠️ 18. Exception Handling, Finally & Else, Assertions

### Basic Exception Handling
```python
try:
    a = 10 / 0
except ZeroDivisionError:
    print("Cannot divide")
```

---

### Else Block  
Runs **only** if no error occurs.

```python
try:
    x = 5
except:
    print("Error")
else:
    print("No Error")
```

---

### Finally Block  
Runs **always**, even if the program stops.

```python
finally:
    print("Always executed")
```

---

### Assertion  
Used to validate conditions during debugging.

```python
assert age >= 18, "Age must be above 18"
```

---

---

# 📄 19. File Handling (Basics)

### ✔ Write to a File
```python
with open("data.txt", "w") as f:
    f.write("Hello")
```

---

### ✔ Read a File
```python
with open("data.txt", "r") as f:
    print(f.read())
```

---

### ✔ Append to a File
```python
with open("data.txt", "a") as f:
    f.write("\nNew Line")
```

---

---

# 🧵 20. Multithreading (Basics)

Used to run multiple tasks **simultaneously**.

### Example:
```python
from threading import Thread

def show():
    print("Hello")

t = Thread(target=show)
t.start()
```

---

# 21. Important Python Programs

- Even / Odd  
- Prime Number  
- Armstrong  
- Strong Number  
- Palindrome  
- Reverse Number  
- Count Digits  
- Factorial  
- Sum of Digits  

All versions using POP + OOP can be included.

---

# 22. Pattern Printing Logic

### Square Pattern
```python
for i in range(5):
    print("* "*5)
```

### Pyramid
```python
for i in range(5):
    print(" "*(5-i)+"*"*(2*i+1))
```

### Diamond, Hill, Reverse Hill, X-pattern, Zero-pattern  
(All included in previous notes.)

---

# 24. Special Tasks & Input Tricks

### Multiple Inputs
```python
name, place = input("Enter name, place: ").split(",")
```

### Unlimited Inputs
```python
lst = [i for i in input().split()]
```

### Convert All Inputs to int
```python
data = list(map(int, input().split()))
```

---

# 25. Games & Random Module Tasks

### Number Guess Game  
### Sum Game  
### Math Game  
### OTP Generator  
### Strong Password Generator  

Using:  
```python
from random import randint
```

---

# 26. Bank Management System Project (Final)

```python
"""
🏦 Bank Management System (OOP)
----------------------------------------
This program allows:
✔ Create account
✔ Login with PIN
✔ Deposit / Withdraw
✔ Check balance
✔ Transaction History
✔ Auto-save to JSON file
----------------------------------------
Author: RK
"""

import json
import os
import time
from datetime import datetime
from getpass import getpass


DATA_FILE = "bank_data.json"   # File to store account data


# ============================================================
# 📌 ACCOUNT CLASS
# ============================================================
class Account:
    """
    Represents a single bank account.
    Holds: Name, Account No, PIN, Balance, Transactions.
    """

    def __init__(self, acc_no, name, pin, balance=0):
        self.acc_no = acc_no
        self.name = name
        self.pin = pin
        self.balance = balance
        self.transactions = []
        self.failed_attempts = 0
        self.locked_until = 0  # time until locked

    def check_pin(self, pin):
        """Check PIN with 3-attempt lock system."""

        # If account is locked
        now = time.time()
        if now < self.locked_until:
            print("⛔ Account temporarily locked! Try again later.")
            return False

        # PIN correct
        if pin == self.pin:
            self.failed_attempts = 0
            return True

        # PIN incorrect
        self.failed_attempts += 1
        print("❌ Incorrect PIN!")

        if self.failed_attempts == 3:
            self.locked_until = now + 30  # lock 30 seconds
            print("⛔ Account locked for 30 seconds.")

        return False

    def deposit(self, amount):
        self.balance += amount
        self.transactions.append(
            {"type": "DEPOSIT", "amount": amount, "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
        )

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient balance!")

        self.balance -= amount
        self.transactions.append(
            {"type": "WITHDRAW", "amount": amount, "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
        )

    def to_dict(self):
        """Convert object to dictionary to store in JSON."""
        return {
            "acc_no": self.acc_no,
            "name": self.name,
            "pin": self.pin,
            "balance": self.balance,
            "transactions": self.transactions,
            "failed_attempts": self.failed_attempts,
            "locked_until": self.locked_until,
        }

    @staticmethod
    def from_dict(data):
        """Convert JSON dict back to Account object."""
        acc = Account(data["acc_no"], data["name"], data["pin"], data["balance"])
        acc.transactions = data["transactions"]
        acc.failed_attempts = data.get("failed_attempts", 0)
        acc.locked_until = data.get("locked_until", 0)
        return acc


# ============================================================
# 📌 BANK CLASS
# ============================================================
class Bank:
    """Manages all accounts."""

    def __init__(self):
        self.accounts = {}
        self.load_data()

    def load_data(self):
        """Load account data from JSON file."""
        if not os.path.exists(DATA_FILE):
            return

        with open(DATA_FILE, "r") as f:
            data = json.load(f)

        for acc_no, acc_data in data.items():
            self.accounts[int(acc_no)] = Account.from_dict(acc_data)

    def save_data(self):
        """Save all account data to JSON file."""
        data = {acc_no: acc.to_dict() for acc_no, acc in self.accounts.items()}
        with open(DATA_FILE, "w") as f:
            json.dump(data, f, indent=2)

    def create_account(self, name, pin, balance=0):
        """Create new account."""
        acc_no = max(self.accounts.keys(), default=1000) + 1
        acc = Account(acc_no, name, pin, balance)
        self.accounts[acc_no] = acc
        self.save_data()
        return acc

    def authenticate(self, acc_no, pin):
        """Verify account number & PIN."""
        acc = self.accounts.get(acc_no)
        if not acc:
            print("❌ Account not found!")
            return None

        if acc.check_pin(pin):
            return acc

        return None


# ============================================================
# 📌 MENU / PROGRAM INTERFACE
# ============================================================
def main_menu():
    print("\n------------------------------")
    print("🏦 WELCOME TO RK BANK SYSTEM")
    print("------------------------------")
    print("1. Create Account")
    print("2. Login")
    print("3. Exit")


def account_menu(name):
    print(f"\n--- Welcome {name} ---")
    print("1. Balance Enquiry")
    print("2. Deposit")
    print("3. Withdraw")
    print("4. Transaction History")
    print("5. Logout")


# ============================================================
# 📌 MAIN APPLICATION LOOP
# ============================================================
def run_bank():
    bank = Bank()

    while True:
        main_menu()

        choice = input("Choose option: ")

        # ----------------------------------------------------
        # Create New Account
        # ----------------------------------------------------
        if choice == "1":
            name = input("Enter your name: ")
            pin = input("Set 4-digit PIN: ")
            initial = int(input("Initial deposit: "))
            acc = bank.create_account(name, pin, initial)
            print(f"🎉 Account created! Your Account Number: {acc.acc_no}")

        # ----------------------------------------------------
        # Login
        # ----------------------------------------------------
        elif choice == "2":
            acc_no = int(input("Enter Account Number: "))
            pin = input("Enter PIN: ")
            acc = bank.authenticate(acc_no, pin)

            if not acc:
                continue

            print(f"🎉 Login Successful! Welcome {acc.name}")

            # -------------------------
            # Logged-in Menu
            # -------------------------
            while True:
                account_menu(acc.name)
                ch = input("Choose: ")

                if ch == "1":
                    print(f"💰 Current Balance: ₹{acc.balance}")

                elif ch == "2":
                    amt = int(input("Enter deposit amount: "))
                    acc.deposit(amt)
                    bank.save_data()
                    print("✔ Deposit Successful!")

                elif ch == "3":
                    amt = int(input("Enter withdraw amount: "))
                    try:
                        acc.withdraw(amt)
                        bank.save_data()
                        print("✔ Withdrawal Successful!")
                    except Exception as e:
                        print("❌", e)

                elif ch == "4":
                    print("\n📜 Transaction History:")
                    for t in acc.transactions:
                        print(f"{t['time']}  | {t['type']} | ₹{t['amount']}")

                elif ch == "5":
                    print("🔒 Logged out.")
                    break
                else:
                    print("❌ Invalid choice")

        # ----------------------------------------------------
        # Exit
        # ----------------------------------------------------
        elif choice == "3":
            print("👋 Thank you for visiting RK Bank!")
            break

        else:
            print("❌ Invalid choice. Try again.")


# Run the program
run_bank()

```

---

# 27. Conclusion

Python is one of the most powerful and widely used languages today.  
It is easy to learn, flexible, and suitable for almost every domain including AI, ML, Web Development, Automation, and Cybersecurity.  
Completing this documentation builds strong foundations for real-world development and projects.

---