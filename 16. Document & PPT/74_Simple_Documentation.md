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
23. JSON — Why It Is Used  
24. Special Tasks & Input Tricks  
25. Games & Random Module Tasks  
26. Bank Management System Project  
27. Conclusion  

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

### What is a Variable?
A variable is a name that stores data in memory.

### Basic Datatypes
- `int`  
- `float`  
- `str`  
- `bool`  
- `list`  
- `tuple`  
- `set`  
- `dict`  

### Example
```python
name = input("Enter Name: ")
age = int(input("Enter Age: "))
print(f"Hello {name}, you are {age} years old.")
```

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

# 6. Looping Statements

### For Loop  
```python
for i in range(1,6):
    print(i)
```

### While Loop  
```python
i = 1
while i <= 5:
    print(i)
    i += 1
```

---

# 7. Functions (POP & OOP)

### POP Style Function  
```python
def add(a, b):
    return a + b
```

### OOP Style Function  
```python
class Calc:
    def add(self, a, b):
        return a + b
```

---

# 8. Collections

### List (Mutable)
```python
l = [1,2,3]
```

### Tuple (Immutable)
```python
t = (1,2,3)
```

### Set (Unique values)
```python
s = {1,2,3}
```

### Dictionary (Key-value)
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

# 10. OOP Concepts

- Class  
- Object  
- Constructor  
- Inheritance  
- Polymorphism  
- Abstraction  
- Encapsulation  

---

# 11. Types of Inheritance

1. Single  
2. Multiple  
3. Multilevel  
4. Hierarchical  
5. Hybrid  

---

# 12. super() Function

Used to call parent class method.

```python
class A:
    def show(self):
        print("Parent")

class B(A):
    def show(self):
        super().show()
        print("Child")
```

---

# 13. Method & Constructor Overriding

### Method Overriding
```python
class A:
    def show(self):
        print("A")

class B(A):
    def show(self):
        print("B")
```

---

# 14. Operator Overloading
```python
class A:
    def __init__(self,x):
        self.x=x
    def __add__(self, other):
        return self.x + other.x
```

---

# 15. Abstract Class & Interface

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
```

---

# 16. Access Modifiers

- Public → `x`  
- Protected → `_x`  
- Private → `__x`  

---

# 17. Encapsulation

Binding data + methods and restricting direct access.

---

# 18. Exception Handling, Finally & Else, Assertions

```python
try:
    a = 10/0
except ZeroDivisionError:
    print("Cannot divide")
else:
    print("No error")
finally:
    print("Always executed")
```

### Assertion  
```python
assert age >= 18, "Age must be above 18"
```

---

# 19. File Handling

### Write File
```python
with open("data.txt","w") as f:
    f.write("Hello")
```

### Read File
```python
with open("data.txt","r") as f:
    print(f.read())
```

---

# 20. Multithreading

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

# 23. JSON — Why It Is Used

### JSON = JavaScript Object Notation  

### Used For:
- API communication  
- Configuration files  
- Lightweight data transfer  
- Human-readable format  

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
balance = 1000
count = 0

def Bank():
    password = int(input("Enter password: "))
    key = 2024

    global count
    if password == key:
        print("Login Successful")
    else:
        print("Incorrect Password")
        count += 1
        if count == 3:
            print("Account locked")
            exit()
        return Bank()

    print("Welcome to Python Bank")
    name = input("Enter Name: ")
    print(f"Hello {name}, Current Balance = {balance}")
    ask()

def ask():
    choice = int(input("1) Deposit  2) Withdraw : "))
    if choice == 1:
        Deposit()
    elif choice == 2:
        Withdraw()
    extend()

def Deposit():
    global balance
    amt = int(input("Enter amount: "))
    balance += amt
    print("Amount Deposited Successfully")

def Withdraw():
    global balance
    amt = int(input("Enter amount: "))
    if amt <= balance:
        balance -= amt
        print("Withdraw Successful")
    else:
        print("Insufficient Balance")

def extend():
    op = input("Continue? (y/n): ")
    if op.lower() == 'y':
        ask()
    else:
        exit()

Bank()
```

---

# 27. Conclusion

Python is one of the most powerful and widely used languages today.  
It is easy to learn, flexible, and suitable for almost every domain including AI, ML, Web Development, Automation, and Cybersecurity.  
Completing this documentation builds strong foundations for real-world development and projects.

---

# END OF DOCUMENT
