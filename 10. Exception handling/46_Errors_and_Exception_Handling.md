# ⚠️ Errors and Exception Handling in Python

---

## 🔹 What Happens When an Exception Occurs?

> When a program encounters an error during execution, Python **creates an exception object**.  
> Then, the **Python Virtual Machine (PVM)** looks for the appropriate handling code:
- If handling code is found → The program continues smoothly.
- If handling code is not found → The program **terminates abnormally** and prints an error message.

---

## 🔹 What is an Error?

> An **error** is something that goes wrong during the execution of a program, preventing it from running correctly.

Python errors are divided into two main types:

1. **Syntax Errors**
2. **Exceptions**

---

## 1️⃣ Syntax Errors

> A **Syntax Error** occurs when the code violates the grammar or structure of the Python language.  
> Python detects these **before** executing the program.

### ⚠️ Common Examples of Syntax Errors

| Error Type | Description | Example | Error |
|-------------|--------------|----------|--------|
| Missing Colon | Missing colon in control structures | `if x > 5` | `SyntaxError: expected ':'` |
| Mismatched Parentheses | Unclosed brackets or parentheses | `print("Hello"` | `SyntaxError: unexpected EOF` |
| Indentation Error | Incorrect indentation | `def greet():\nprint("Hi")` | `IndentationError` |
| Missing Quote | Unclosed string literal | `name = "Alice` | `SyntaxError: EOL while scanning string literal` |
| Invalid Function Syntax | Wrong function definition | `def greet name:` | `SyntaxError: invalid syntax` |
| Using Reserved Keyword | Using keyword as variable | `if = 10` | `SyntaxError: invalid syntax` |
| Unmatched Brackets | Missing closing bracket | `list = [1, 2, 3` | `SyntaxError: unexpected EOF` |
| Multiple Statements | No semicolon between statements | `x = 10 y = 20` | `SyntaxError` |
| Comma Instead of Period | Using comma instead of dot | `my_list.append, 4` | `SyntaxError` |
| Missing Parentheses | Print without parentheses | `print "Hello"` | `SyntaxError: missing parentheses` |

✅ **Note:** Syntax errors are easy to catch because Python points out the **exact line number** and reason.

---

## 2️⃣ Exceptions

> **Exceptions** occur during **program execution** when something unexpected happens — for example, dividing by zero or accessing an invalid index.

Examples:
```python
a = 10 / 0
# ZeroDivisionError: division by zero

with open('non_existent.txt', 'r') as file:
    content = file.read()
# FileNotFoundError: [Errno 2] No such file or directory
```

### 🧠 Common Built-in Exceptions

| Exception Name | Cause |
|----------------|--------|
| `ZeroDivisionError` | Division by zero |
| `NameError` | Using undefined variable |
| `TypeError` | Operation on incompatible types |
| `ValueError` | Invalid literal or argument value |
| `IndexError` | List index out of range |
| `KeyError` | Dictionary key not found |
| `FileNotFoundError` | File doesn’t exist |
| `ModuleNotFoundError` | Module import failed |
| `OverflowError` | Arithmetic operation overflow |
| `IndentationError` | Incorrect code indentation |

---

## ⚙️ Exception Handling

> **Exception Handling** is a mechanism to **gracefully handle errors** without abruptly terminating the program.

### 🧩 Why Handle Exceptions?
- To prevent abnormal termination.  
- To provide meaningful error messages.  
- To ensure smooth program execution.

---

## 🔹 Basic Try–Except Example

```python
print('1')
print('2')
try:
    print(3 / '3')
except Exception as e:
    print(e)
print('4')
```

🧾 **Output:**
```
unsupported operand type(s) for /: 'int' and 'str'
4
```

✅ **Explanation:**  
The exception is caught, and the program continues after the except block.

---

### ✅ Example — List Index Error Handling

```python
l = [10, 20, 30]
try:
    print(l[6])
except Exception as e:
    print(e)
```

🧾 **Output:**
```
list index out of range
```

---

### ✅ Example — Custom Exception Message

```python
l = [10, 20, 30]
try:
    print(l[6])
except Exception as e:
    print(e)
    print('The list index values we called is out of range')
```

🧾 **Output:**
```
list index out of range
The list index values we called is out of range
```

---

### ✅ Example — Handling Multiple Exceptions

```python
l = [10, 20, 30]
try:
    print(l[6])
    print(100 / 0)
except ZeroDivisionError as e:
    print(e)
except IndexError as i:
    print(i)
```

🧾 **Output:**
```
list index out of range
```

✅ **Explanation:**  
Only the **first** error encountered is handled.

---

## 🔹 Try–Except Syntax

```python
try:
    # risky code
except ExceptionType:
    # handling code
```

---

## 🧩 System-Defined Exceptions Examples

---

### ⚠️ ZeroDivisionError
```python
a = int(input("Enter a value: "))
b = int(input("Enter b value: "))
try:
    print(a / b)
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

---

### ⚠️ NameError
```python
a = 10
try:
    print(a + c)
except NameError as e:
    print(e)
```

🧾 **Output:**
```
name 'c' is not defined
```

---

### ⚠️ TypeError
```python
a = int(input("Enter a value: "))
b = input("Enter b value: ")
try:
    result = a + b
except TypeError as t:
    print(t)
```

🧾 **Output:**
```
unsupported operand type(s) for +: 'int' and 'str'
```

---

### ⚠️ ValueError
```python
try:
    a = int(input("Enter a value: "))
    print(a)
except ValueError as v:
    print(v)
```

🧾 **Output:**
```
invalid literal for int() with base 10: 'abc'
```

---

### ⚠️ IndexError
```python
l = [10, 20, 30, 40]
try:
    print(l[int(input("Enter list index: "))])
except IndexError as I:
    print(I)
```

🧾 **Output:**
```
list index out of range
```

---

### ⚠️ KeyError
```python
d = {1: "Ram", 2: "Seetha"}
try:
    print(d[3])
except KeyError as k:
    print(k)
```

🧾 **Output:**
```
3
```

---

### ⚠️ FileNotFoundError
```python
try:
    f = open('abc.txt')
except FileNotFoundError as f:
    print(f)
```

🧾 **Output:**
```
[Errno 2] No such file or directory: 'abc.txt'
```

---

### ⚠️ ModuleNotFoundError
```python
import pyqt5
```

🧾 **Output:**
```
ModuleNotFoundError: No module named 'pyqt5'
```

---

### ⚠️ OverflowError
```python
import math
print(math.factorial(64521354534534546))
```

🧾 **Output:**
```
OverflowError: factorial() argument should not exceed 2147483647
```

---

### ⚠️ IndentationError
> It’s a **syntax error**, not an exception, and **cannot be handled** using `try-except`.

Example:
```python
def greet():
print("Hello")
```
🧾 **Output:**
```
IndentationError: expected an indented block
```

---

## 🔹 Summary

| Error Type | When Occurs | Handled By | Example |
|-------------|--------------|-------------|-----------|
| Syntax Error | Before execution | ❌ No | Missing colon, wrong indentation |
| Exception | During execution | ✅ Yes (try-except) | ZeroDivisionError, FileNotFoundError |
| Logical Error | Code runs but wrong output | ❌ No | Wrong algorithm |

---

✅ **Key Takeaways**
- Always write **critical/risky code inside `try`**.
- Write **handling code inside `except`**.
- Catch specific exceptions when possible.
- Use `Exception` class for generic error handling.
- Exception handling ensures **smooth termination** of the program.

---

✨ *“Errors are inevitable — how you handle them defines code quality.”* 🧠🐍
