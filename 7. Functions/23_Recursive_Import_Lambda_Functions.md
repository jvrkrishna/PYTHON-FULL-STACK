# 🔁 Recursive, Import & Lambda Functions in Python

---

## 🔹 Recursive Function

A **recursive function** is a function that **calls itself** in order to solve a problem.

📘 **Definition:**  
> A function that calls itself until a specified condition is met (base case).

---

### Example 1 — Infinite Recursion
```python
def welcome():
    print("Hello, Welcome to Python")
    welcome()

welcome()
```

🧾 Output:
```
Hello, Welcome to Python
Hello, Welcome to Python
...
RecursionError: maximum recursion depth exceeded
```
⚠️ The function keeps calling itself — no termination condition.

---

### Example 2 — Controlled Recursion
```python
def sample():
    print("Welcome to Janahita\n")
    print("Press 1 to call function again")
    print("Press 0 to exit\n")
    
    choice = int(input("Enter your choice: "))
    if choice == 1:
        sample()
    else:
        exit(0)

sample()
```
🧠 **Explanation:**  
The recursion continues only when the user enters `1`.

---

### Example 3 — Printing Stars (Ascending)
```
*
**
***
****
*****
```
```python
def fun(num):
    print('*' * num)
    if num == 5:
        return
    fun(num + 1)

fun(1)
```

---

### Example 4 — Printing Stars (Descending)
```
*****
****
***
**
*
```
```python
def fun(num):
    print('*' * num)
    if num == 1:
        return
    fun(num - 1)

fun(5)
```

---

### Example 5 — Sum of Natural Numbers
```python
def sum_of_n_numbers(n):
    if n <= 1:
        return n
    else:
        return n + sum_of_n_numbers(n - 1)

print(sum_of_n_numbers(5))
```

🧾 Output:
```
15
```
✅ Explanation:  
5 + 4 + 3 + 2 + 1 = 15

---

### Example 6 — Fibonacci Series using Recursion
```python
def fib(n):
    if n <= 1:
        return n
    else:
        return fib(n - 1) + fib(n - 2)

print(fib(6))  # 8

for i in range(6):
    print(fib(i))
```

🧾 Output:
```
0
1
1
2
3
5
```

---

## 📦 Import Function

In Python, we can **import** code from one file (module) to another.  
This helps in code reusability and modular programming.

---

### Example — `sample.py`
```python
def add(a, b):
    print(a + b)

def sub(a, b):
    print(a - b)
```

### Example — `anothersample.py`
```python
from Python.sample import add, sub

add(10, 20)
sub(20, 5)
```

✅ Output:
```
30
15
```

🧠 **Note:**  
- Each `.py` file in Python is considered a **module**.  
- You can import specific functions or entire modules.

---

## ⚡ Lambda (Anonymous) Functions

A **lambda function** is a **small, anonymous** (unnamed) function in Python.  
It can have **any number of arguments**, but **only one expression**.

📘 **Syntax:**
```python
lambda arguments : expression
```

---

### Example 1 — Simple Addition
```python
x = lambda a, b, c: a + b + c
print(x(1, 8, 3))
```
🧾 Output:
```
12
```

---

### Example 2 — One-Line Lambda
```python
print((lambda a, b: a + b)(10, 20))
```
🧾 Output:
```
30
```

---

### Example 3 — Square of a Number
```python
x = lambda n: n * n
print(x(5))

print((lambda n: n * n)(10))
```
🧾 Output:
```
25
100
```

---

### Example 4 — Return Maximum
```python
y = lambda a, b: a if a > b else b
print(y(10, 20))

print((lambda a, b: a if a > b else b)(15, 7))
```
🧾 Output:
```
20
15
```

---

### Example 5 — Tuple Expression in Lambda
```python
z = lambda a, b: (a, b)
print(z(10, 20))
```
🧾 Output:
```
(10, 20)
```

✅ Note:  
Lambda can only have **one expression**, but that expression can be **a tuple, list, or other structure**.

---

## 💡 Where to Use Lambda Functions

Lambda functions are commonly used when:
- You need to **pass a function as an argument** to another function.
- You are working with **filter()**, **map()**, or **reduce()** functions.
- You want **short, simple one-liners** instead of defining full functions.

---

### Example Use Case:
```python
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, numbers))
print(squares)
```

🧾 Output:
```
[1, 4, 9, 16, 25]
```
---

✨ *“Recursion teaches repetition, imports teach reuse, and lambdas teach elegance.”* 🧠🐍
