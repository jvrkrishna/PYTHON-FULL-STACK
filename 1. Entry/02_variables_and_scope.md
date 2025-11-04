# 🐍 Python — Variables, Naming Rules, Assignment, `id()`, and Scope

## 🔹 Definition
A **variable** is a container used to store the data.

You can think of a variable as a *label* or *container* that holds some data.  
Python is **dynamically typed**, meaning you don’t need to declare the type explicitly — it’s decided at runtime.

---

## 🔹 Rules for Assigning Variables
1. A variable name **must start** with a **letter (A–Z / a–z)** or an **underscore (_)**.  
2. It **cannot start with a number**.  
3. It can only contain **letters, numbers, and underscores** (no spaces or special characters).  
4. Variable names are **case-sensitive** (`ram`, `Ram`, and `RAM` are three different variables).  
5. You **cannot use Python keywords** as variable names (e.g., `if`, `for`, `class`, `def`, etc.).  
6. Keep variable names **meaningful and descriptive** (avoid single letters except in small loops).  
7. Use **snake_case** (lowercase_with_underscores) for normal variables (PEP 8 standard).

✅ **Examples:**
```python
name = "Rama"
age = 25
user_name = "ram123"
_course = "Python"
PI = 3.14

❌ Invalid examples:
2name = "Rama"     # starts with number
user-name = "Ram"  # contains hyphen
my variable = "Hi" # contains space
class = "Python"   # keyword

🔹 Variable Assignments & Examples
# Simple assignments and printing
x = 5
y = "john"
print(x)   # 5
print(y)   # john

# Reassigning a variable to a new value (and different type)
x = 4
x = "ram"
print(x)   # ram

# Assign one value to multiple variables
x = y = z = "orange"   # all refer to same object
print(y)   # orange

# Assigning multiple values to one variable creates a tuple
x = "ram", "Banti", "Chanti"  # ('ram', 'Banti', 'Chanti')
print(x)

# Assign multiple values to multiple variables (unpacking)
x, y, z = "ram", "Banti", "Chanti"
print(x)   # ram
print(z)   # Chanti

# String concatenation (joining strings)
x = "Hello"
y = "World"
z = x + y
print(z)                 # HelloWorld
print("Answer is: " + z) # Answer is: HelloWorld

# Mixing string + number (TypeError if added directly)
x = "Hello"
y = 2
# z = x + y   # ❌ TypeError
z = x + str(y)  # ✅ convert int → str
print(z)                 # Hello2
print("Answer is: " + z) # Answer is: Hello2

# Using formatted strings (recommended)
print(f"Answer is: {x}{y}")         # Answer is: Hello2
print(f"Answer with space: {x} {y}")# Answer with space: Hello 2

# To know the address (memory id) of a variable
a = 10
b = 10
print(id(a))  # often same for small integers (cached by Python)
print(id(b))


⚙️ (Skip for Now — Will Learn in Functions Topic)

Global and Local Variables — understanding variable scope.

# Global vs Local variables demonstration
a = "Apple"
def myfunc():
    print(a)   # reads global variable 'a'
myfunc()       # Apple

# Local variable with same name as global
x = "awesome"
def myfunc_shadow():
    x = "fantastic"
    print("Python is " + x)
myfunc_shadow()         # Python is fantastic
print("Python is " + x) # Python is awesome

# Using global keyword to modify global variable
x = "awesome"
def myfunc_global():
    global x
    x = "fantastic"
    print("Python is " + x)
myfunc_global()         # Python is fantastic
print("Python is " + x) # Python is fantastic