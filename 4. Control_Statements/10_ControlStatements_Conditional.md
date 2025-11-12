# ⚙️ Python Conditional Statements — (if, elif, else, nested if)

## 🔹 What are Conditional Statements?

Conditional statements are used to **make decisions** in Python.  
They execute a block of code **only if a specific condition is True**.

💡 **Simple Meaning:**  
> Python decides *what to do next* based on whether a condition is True or False.

---

## 🔹 Types of Conditional Statements

```text
+------------------+-----------------------------------------+
| Type             | Description                             |
+------------------+-----------------------------------------+
| if               | Executes a block only if condition True |
| if...else        | Executes one block if True, another if  |
|                  | False                                   |
| if...elif...else | Checks multiple conditions in sequence  |
| Nested if        | if statement inside another if          |
| Short-hand if    | Write if in one line                    |
| Ternary Operator | Compact form of if...else in one line   |
+------------------+-----------------------------------------+
```

---

## 🔹 Example 1 — Simple if Statement
```python
if 5 > 2:
    print("This is if")
```

🧠 **Output:**
```
This is if
```

---

## 🔹 Example 2 — if...else Statement
```python
if 5 < 2:
    print("This is if")
else:
    print("This is else")
```

🧠 **Output:**
```
This is else
```

---

## 🔹 Example 3 — Largest of Three Numbers (Using if only)
```python
a = int(input("Enter a value: "))
b = int(input("Enter b value: "))
c = int(input("Enter c value: "))

if a > b and a > c:
    print("a is big")

if b > a and b > c:
    print("b is big")

if c > a and c > b:
    print("c is big")
```

🧠 **Note:**  
All three conditions are checked separately.

---

## 🔹 Example 4 — Largest of Three Numbers (Using if...elif...else)
```python
a = int(input("Enter a value: "))
b = int(input("Enter b value: "))
c = int(input("Enter c value: "))

if a > b and a > c:
    print("a is big")
elif b > c:
    print("b is big")
else:
    print("c is big")
```

🧠 **Better Approach:**  
Only one block executes, improving performance.

---

## 🔹 Example 5 — Even or Odd Number
```python
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("The given number is Even")
else:
    print("The given number is Odd")
```

---

## 🔹 Example 6 — Voting Eligibility
```python
age = int(input("Enter your age: "))

if age >= 18:
    print("You are eligible to vote !!")
else:
    print("Sorry! You have to wait !!")
```

---

## 🔹 Example 7 — Simple Login Program
```python
user = "ram"
passs = "Ram@123"

user_name = input("Enter the User Name: ")
password = input("Enter the Password: ")

if user == user_name and passs == password:
    print("Success")
else:
    print("Try again")
```

---

## 🔹 Example 8 — Company Bonus Calculation
```python
'''
A company gives a 5% bonus to male employees 
and 10% to female employees.
If salary < 15000, an extra 3% bonus is added.
'''

salary = int(input("Enter the salary: "))
gender = input("Enter your gender (m/f): ")

if gender == "m":
    bonus = 0.05 * salary
else:
    bonus = 0.10 * salary

if salary <= 15000:
    bonus = bonus + 0.03 * salary

salary = salary + bonus

print("Salary after bonus:", salary)
```

---

## 🔹 Example 9 — if...elif...else Example
```python
if 5 < 2:
    print("this is if")
elif 5 == 2:
    print("this is elif")
else:
    print("this is else")
```

🧠 **Output:**
```
this is else
```

---

## 🔹 Example 10 — Student Grade Evaluation
```python
marks = int(input("Enter the marks: "))

if marks > 85 and marks <= 100:
    print("Congrats! You scored grade A ...")
elif marks > 60 and marks <= 85:
    print("You scored grade B+ ...")
elif marks > 40 and marks <= 60:
    print("You scored grade B ...")
elif marks > 30 and marks <= 40:
    print("You scored grade C ...")
else:
    print("Sorry! You have failed.")
```

---

## 🔹 Example 11 — Simple Calculator
```python
a = int(input("Enter a value: "))
b = int(input("Enter b value: "))

print("Press the following:")
print("+ to add\n- to sub\n* to mul\n/ to div")

choice = input("Enter your choice: ")

if choice == '+':
    print("Result:", a + b)
elif choice == '-':
    print("Result:", a - b)
elif choice == '*':
    print("Result:", a * b)
elif choice == '/':
    print("Result:", a / b)
else:
    print("Please select a valid operation.")
```

---

## 🔹 Example 12 — Hackerrank “Weird / Not Weird” Program
```python
'''
Given an integer n, perform the following:
If n is odd → print "Weird"
If n is even and in range 2–5 → print "Not Weird"
If n is even and in range 6–20 → print "Weird"
If n is even and >20 → print "Not Weird"
'''

n = int(input("Enter n value: ").strip())  # strip() removes spaces

if n % 2 != 0:
    print("Weird")
elif n % 2 == 0 and n in range(2, 6):
    print("Not Weird")
elif n % 2 == 0 and 6 <= n <= 20:
    print("Weird")
elif n % 2 == 0 and n > 20:
    print("Not Weird")
```

---

## 🔹 Example 13 — Nested if Statement
```python
x = int(input("Enter a sample number: "))

if x > 10:
    print("Above ten")
    if x > 20:
        print("and also above 20!")
    else:
        print("but not above 20.")
else:
    print("All conditions failed")
```

---

## 🔹 Example 14 — Short Hand if Statement
```python
a = 20
b = 10
if a > b: print("a is greater than b")
```

🧠 **Explanation:**  
You can write an `if` statement in a **single line** when it has only one statement.

---

## 🔹 Example 15 — Ternary / Short Hand if...else
```python
a = 2
b = 330
print("A") if a > b else print("B")

a = 330
b = 330
print("A") if a > b else print("=") if a == b else print("B")
```

🧠 **Output:**
```
B
=
```

🧠 **Explanation:**
- `print("A") if a > b else print("B")`  
  → works like a one-line `if...else` statement.  
- Nested ternary:  
  `A` prints if greater, `=` if equal, `B` if smaller.

---

## 🔹 Summary Table

```text
+----------------------+---------------------------------------------+---------------------+
| Statement Type       | Purpose                                    | Example             |
+----------------------+---------------------------------------------+---------------------+
| if                   | Execute code when condition is True         | if a > b: print(a)  |
| if...else            | Choose between two conditions               | if...else           |
| if...elif...else     | Multiple conditional checks                 | if...elif...else    |
| Nested if            | if inside another if                        | if a>0: if b>0:...  |
| Short-hand if        | One-line if                                 | if a>b: print(a)    |
| Ternary Operator     | Compact one-line if...else                  | print(A) if a>b...  |
+----------------------+---------------------------------------------+---------------------+
```

---

✨ *“Conditional statements are the brain of your program — they help your code think before acting!”* 🧠🚦
