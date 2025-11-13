==========================================
📑 INDEX
==========================================

Introduction to Python

Features of Python

Variables & Datatypes

Operators in Python

Conditional Statements

Looping Statements

Functions (POP & OOP)

Collections (List, Tuple, Set, Dict)

eval() Function

OOP Concepts

Types of Inheritance

super() Function

Method & Constructor Overriding

Operator Overloading

Abstract Class & Interface

Access Modifiers

Encapsulation

Exception Handling

Finally & Else blocks

Assertions

File Handling

Multithreading

Important Python Programs (POP + OOP)

Pattern Printing Logic

JSON — Why It Is Used

Special Tasks

Games (Math Game, Sum Game, Number Guess, OTP, Password Generator)

Bank Management System Project (with explanation)

Conclusion

==========================================
1️⃣ INTRODUCTION TO PYTHON
==========================================
🔹 Definition

Python is a high-level, interpreted, object-oriented programming language known for its simple syntax and readability.

🔹 Why Python?

Beginner-friendly

Large community

Used in AI, ML, web development, automation, cybersecurity

Huge library support (Django, NumPy, Pandas etc.)

==========================================
2️⃣ FEATURES OF PYTHON
==========================================

Interpreted

Dynamically typed

Object-oriented

Platform-independent

Rich standard libraries

Easy integration with other languages

==========================================
3️⃣ VARIABLES & DATATYPES
==========================================
🔹 Variable Definition

A variable is a container used to store data values.

🔹 Input/Output
name = input("Enter name: ")
age = int(input("Enter age: "))
print(f"Hi {name}, your age is {age}")

🔹 Datatypes

int

float

str

bool

list

tuple

set

dict

==========================================
4️⃣ OPERATORS
==========================================
🔹 Definition

Operators are special symbols used to perform operations on variables & values.

Types:

Arithmetic

Logical

Relational

Assignment

Bitwise

Identity

Membership

==========================================
5️⃣ CONDITIONAL STATEMENTS
==========================================
🔹 Definition

Conditional statements are used to make decisions using if, elif, else.

if condition:
    statements
else:
    statements

==========================================
6️⃣ LOOPING STATEMENTS
==========================================
🔹 For Loop
for i in range(5):
    print(i)

🔹 While Loop
while a < 5:
    print(a)
    a += 1

==========================================
7️⃣ FUNCTIONS
==========================================
🔹 Definition

A function is a block of code used to perform a specific task.

✔ POP Method
def add(a, b):
    return a + b

✔ OOP Method
class Calc:
    def add(self, a, b):
        return a + b

==========================================
8️⃣ COLLECTIONS
==========================================
🔹 List — Mutable
🔹 Tuple — Immutable
🔹 Set — Unique values
🔹 Dictionary — Key-value
==========================================
9️⃣ eval() FUNCTION
==========================================
🔹 Definition

eval() converts a string into a Python object.

Examples:
l = eval("[1,2,3]")
d = eval("{'a':10}")

==========================================
🔟 OBJECT ORIENTED PROGRAMMING
==========================================
🔹 Contains:

Class

Object

Method

Constructor

Inheritance

Polymorphism

Abstraction

Encapsulation

==========================================
1️⃣1️⃣ INHERITANCE
==========================================
🔹 Definition

Inheritance allows one class to acquire properties of another class.

Types:

Single

Multiple

Multilevel

Hierarchical

Hybrid

(All examples already provided in earlier notes)

==========================================
1️⃣2️⃣ SUPER() FUNCTION
==========================================
🔹 Definition

Used to call parent class methods from child class.

==========================================
1️⃣3️⃣ METHOD & CONSTRUCTOR OVERRIDING
==========================================
🔹 Definition

When a child class provides its own version of a parent method.

==========================================
1️⃣4️⃣ OPERATOR OVERLOADING
==========================================
Example:
def __add__(self, other):
    return self.x + other.x

==========================================
1️⃣5️⃣ ABSTRACT CLASS & INTERFACE
==========================================
🔹 Abstract Class

A class with one or more abstract methods.

🔹 Interface

A class containing only abstract methods.

==========================================
1️⃣6️⃣ ACCESS MODIFIERS
==========================================

Public → x

Protected → _x

Private → __x

==========================================
1️⃣7️⃣ ENCAPSULATION
==========================================
Definition

Binding data and functions together and restricting direct access.

==========================================
1️⃣8️⃣ EXCEPTION HANDLING
==========================================
try:
    a = 10 / 0
except ZeroDivisionError:
    print("Error")

==========================================
1️⃣9️⃣ FINALLY & ELSE BLOCKS
==========================================

else → executes when no exception

finally → executes always

==========================================
2️⃣0️⃣ ASSERTIONS
==========================================
assert age >= 18, "Age restriction"

==========================================
2️⃣1️⃣ FILE HANDLING
==========================================
🔹 Reading
with open("a.txt", "r") as f:
    print(f.read())

🔹 Writing
with open("a.txt", "w") as f:
    f.write("Hello")

==========================================
2️⃣2️⃣ MULTITHREADING
==========================================
from threading import Thread

def hello(): print("Hi")

t = Thread(target=hello)
t.start()

==========================================
2️⃣3️⃣ IMPORTANT PROGRAMS (POP + OOP)
==========================================
🔹 Even or Odd
🔹 Prime Number
🔹 Armstrong
🔹 Strong Number
🔹 Palindrome
🔹 Digit Count
🔹 Reverse Number
🔹 Calculator
🔹 Sum of Digits

(All codes included earlier)

==========================================
2️⃣4️⃣ PATTERN PRINTING LOGIC
==========================================

Covers:

Square

Triangle

Pyramid

Hill

Reverse Hill

Diamond

X Pattern

Zero Pattern

(All examples included earlier)

==========================================
2️⃣5️⃣ WHY JSON IS USED
==========================================
🔹 Definition

JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data.

🔹 Why it is used

API communication

Storing configuration

Lightweight alternative to database

Easy to read and write

==========================================
2️⃣6️⃣ SPECIAL TASKS
==========================================

✔ Multiple inputs
✔ Unlimited inputs
✔ Mapping inputs
✔ Type conversion

(All code included earlier)

==========================================
2️⃣7️⃣ GAMES & RANDOM MODULE TASKS
==========================================

✔ Sum Game
✔ Math Game
✔ OTP Generator
✔ Strong Password Generator
✔ Number Guess Game

==========================================
2️⃣8️⃣ ⭐ BANK MANAGEMENT SYSTEM PROJECT
==========================================
📌 Definition

A Python console-based banking system that allows user login, deposit, withdraw, and track transactions.

📌 Features

Password validation

3 attempt limit

Deposit

Withdraw

Balance viewing

Loop menu

Auto exit

📌 FINAL PROJECT CODE
balance = 1000
count = 0

def Bank():
    password = int(input("Please enter the password to Login: "))
    key = 2024

    global count
    if password == key:
        print("Login Successful...")
    else:
        print("Incorrect Password!")
        count += 1
        if count == 3:
            print("Account Locked for 24 hours!")
            exit(0)
        return Bank()

    print("Welcome to the Bank")
    name = input("Enter your Name: ")
    print(f"Hi {name}, your current balance is {balance}")
    ask()

def ask():
    choice = int(input("Press 1 for Deposit, Press 2 for Withdraw: "))
    if choice == 1:
        Deposit()
    elif choice == 2:
        Withdraw()
    extend()

def Deposit():
    global balance
    amount = int(input("Enter deposit amount: "))
    balance += amount
    print("Amount Deposited Successfully!")
    print("Current Balance:", balance)

def Withdraw():
    global balance
    amount = int(input("Enter withdraw amount: "))
    if amount <= balance:
        balance -= amount
        print("Withdraw Successful!")
    else:
        print("Insufficient Balance")
    print("Current Balance:", balance)

def extend():
    option = input("Do you want to continue? (y/n): ")
    if option.lower() == 'y':
        ask()
    else:
        exit(0)

Bank()