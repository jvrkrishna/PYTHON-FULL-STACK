# 🧩 Python Modules — Reusability and Structure

---

## 🔹 What is a Module?

A **module** in Python is simply a **file containing Python code** — such as functions, variables, and classes — that you can **import and reuse** in other programs.

📘 In simple words:  
> A module is a **Python file (`.py`)** that groups related code together for easy maintenance and reuse.

---

### ✅ Example:
Let’s say we create a file named **`calc.py`**:
```python
# calc.py

def add(a, b):
    return a + b

def sub(a, b):
    return a - b
```

Now, create another file named **`main.py`**:
```python
# main.py

import calc

print(calc.add(10, 5))
print(calc.sub(10, 5))
```

🧾 **Output:**
```
15
5
```

✅ You’ve just imported and reused a Python file as a **module**!

---

## 🧠 Why Use Modules?

| Advantage | Description |
|------------|--------------|
| **Code Reusability** | Write once, use anywhere |
| **Better Organization** | Split large programs into smaller logical files |
| **Avoid Repetition** | Use existing code without rewriting |
| **Namespace Separation** | Prevents variable name conflicts |

---

## 🔹 Types of Modules

Python provides different kinds of modules based on where they come from.

| Type | Description | Example |
|------|--------------|----------|
| **Built-in Modules** | Predefined modules that come with Python | `math`, `os`, `sys`, `datetime` |
| **User-defined Modules** | Modules created by the user | `calc.py`, `student.py` |
| **External Modules** | Third-party modules installed via pip | `numpy`, `pandas`, `requests` |

---

## 🔹 Importing Modules

There are multiple ways to import a module:

---

### ✅ 1. Import Entire Module
```python
import math

print(math.sqrt(16))
print(math.pi)
```

🧾 Output:
```
4.0
3.141592653589793
```

---

### ✅ 2. Import Specific Functions or Variables
```python
from math import sqrt, pi

print(sqrt(9))
print(pi)
```

---

### ✅ 3. Import with Alias
```python
import math as m

print(m.sqrt(25))
print(m.pi)
```

🧾 Output:
```
5.0
3.141592653589793
```

---

### ✅ 4. Import All (Not Recommended)
```python
from math import *

print(sqrt(36))
print(pow(2, 3))
```

🧠 Note:
> Avoid using `from module import *` because it pollutes the namespace and can overwrite existing names.

---

## 🔹 The `dir()` Function

The **`dir()`** function lists all **attributes, methods, and variables** defined inside a module.

### Example:
```python
import math
print(dir(math))
```

🧾 Output (partial):
```
['acos', 'asin', 'atan', 'ceil', 'cos', 'degrees', 'pi', 'pow', 'sqrt', ...]
```

---

## 🔹 The `help()` Function

To get detailed documentation about a module:
```python
import math
help(math)
```

🧾 Output:
Displays all methods, constants, and usage details of the `math` module.

---

## 🔹 Accessing Module Variables

If you define global variables in a module, you can access them directly:
```python
# mydata.py
company = "Janahita Technologies"
year = 2025

# main.py
import mydata
print(mydata.company)
print(mydata.year)
```

🧾 Output:
```
Janahita Technologies
2025
```

---

## 🔹 Renaming and Reloading Modules

### ✅ Rename Module
```python
import math as m
print(m.sqrt(25))
```

### ✅ Reload Module
If you modify a module and want to reload it without restarting Python:
```python
import importlib
import mymodule
importlib.reload(mymodule)
```

---

## 🔹 The `__name__` and `__main__` Concept

Each Python file has a special built-in variable: **`__name__`**

### Example:
```python
# sample.py
def greet():
    print("Hello from sample module!")

print("File name:", __name__)
```

### Case 1 — When run directly:
```
$ python sample.py
File name: __main__
```

### Case 2 — When imported:
```python
import sample
```
🧾 Output:
```
File name: sample
```

✅ **Use Case:**
To prevent unwanted execution of code when importing:
```python
# sample.py
def greet():
    print("Hello!")

if __name__ == "__main__":
    greet()
```

Now, this code runs **only when the file is executed directly**, not when imported.

---

## 🔹 Working with Built-in Modules

### ✅ math module
```python
import math
print(math.sqrt(25))
print(math.pow(2, 3))
print(math.factorial(5))
```

---

### ✅ random module
```python
import random

print(random.randint(1, 100))  # Random number between 1–100
print(random.choice(['apple', 'banana', 'cherry']))
```

---

### ✅ datetime module
```python
import datetime
today = datetime.date.today()
print(today)
print(today.strftime("%B %d, %Y"))
```

---

### ✅ os module
```python
import os

print(os.getcwd())   # Get current directory
print(os.listdir())  # List files
```

---

### ✅ sys module
```python
import sys

print(sys.version)
print(sys.path)  # List of directories Python searches for modules
```

---

## 🧩 Importing from Packages

A **package** is a collection of related modules stored in a directory with an `__init__.py` file.

📁 Example folder structure:
```
MyPackage/
│
├── __init__.py
├── student.py
└── teacher.py
```

### student.py
```python
def stud_info():
    print("Student Module")
```

### teacher.py
```python
def teach_info():
    print("Teacher Module")
```

### main.py
```python
from MyPackage import student, teacher

student.stud_info()
teacher.teach_info()
```

🧾 Output:
```
Student Module
Teacher Module
```

---

✨ *“Modules make Python modular — separating logic, reusing code, and keeping your projects elegant and scalable.”* 🧠🐍
