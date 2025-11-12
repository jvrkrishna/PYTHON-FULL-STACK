# 🧩 Python Functions — Introduction

---

## 🔹 Definition

A **function** in Python is a **block of reusable code** that performs a specific task.

✅ It allows you to **group related statements** together.  
✅ You can **call** the function whenever you need it, instead of rewriting the same code.

---

## 🧠 Advantages of Functions

```
Code Reusability  
Improved Modularity  
```

- **Code Reusability** → You can reuse the same logic multiple times.  
- **Modularity** → Divides the program into smaller, logical parts, making it easier to read and maintain.  

---

## 🔸 Types of Functions in Python

| Type | Description | Example |
|-------|-------------|----------|
| **Built-in Functions** | Functions already defined by Python | `print()`, `min()`, `max()`, `len()`, `input()` |
| **User-defined Functions** | Functions created by the user as per requirement | `add()`, `display()`, `greetings()` |

---

### 1️⃣ Built-in Functions

These are predefined functions that come with Python.  
You just need to use them — no need to define.

```python
print("Hello World")
num = int(input("Enter a number: "))
print("Minimum:", min(10, 20, 5))
print("Maximum:", max(10, 20, 5))
```

---

### 2️⃣ User-defined Functions

These are functions that **you define** to perform specific tasks.

📘 **Syntax:**
```python
def function_name(parameters):
    # body of the function
    statement(s)
```

---

## 🔹 Why Use Functions?

If you need to **execute the same code multiple times**,  
instead of writing it again and again — define it once as a **function**.

### Example (Without Function)
```python
a = 10
if a % 2 == 0:
    print('Even')
else:
    print('Odd')

b = 20
if b % 2 == 0:
    print('Even')
else:
    print('Odd')

c = 30
if c % 2 == 0:
    print('Even')
else:
    print('Odd')
```

🔸 The above code repeats the same logic 3 times.

---

### Example (Using Function)
```python
def Even_Odd(num):
    if num % 2 == 0:
        print("Even")
    else:
        print("Odd")

Even_Odd(10)
Even_Odd(13)
Even_Odd(24)
```

✅ Output:
```
Even
Odd
Even
```

---

## 🧩 Using `eval()` in Functions

The `eval()` function is used to **evaluate** a string as a Python expression.  
It’s often used in user input scenarios to allow dynamic evaluation.

📘 **Syntax:**  
```python
eval(expression)
```

### Example 1: Using eval() with input
```python
num = eval(input("Enter a number: "))
print(type(num))
print(num + 5)
```
💡 If you enter `10` → it treats it as an integer  
If you enter `10.5` → it becomes a float  
If you enter `[1, 2, 3]` → it becomes a list  

---

### Example 2: eval() inside a Function
```python
def add_numbers():
    a = eval(input("Enter first number: "))
    b = eval(input("Enter second number: "))
    print("Sum is:", a + b)

add_numbers()
```

✅ Output:
```
Enter first number: 10
Enter second number: 20
Sum is: 30
```

---

### ⚠️ Note:
- Be cautious while using `eval()` with **untrusted input** — it can execute any Python code.
- Prefer using `int()` / `float()` for safer numeric conversions when possible.

---

## 🧠 Summary Table

| Concept | Description | Example |
|----------|--------------|----------|
| **Definition** | Reusable block of code | `def func():` |
| **Advantages** | Reusability, Modularity | — |
| **Built-in Functions** | Predefined in Python | `print()`, `len()`, `max()` |
| **User-defined Functions** | Created by user | `def greet():` |
| **Why Functions?** | Avoid code repetition | — |
| **eval()** | Evaluates input dynamically | `eval(input())` |

---

✨ *“Functions help you write clean, reusable, and organized code — they’re the backbone of modular programming.”* 🧠🐍
