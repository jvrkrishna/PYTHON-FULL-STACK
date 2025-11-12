# ⚙️ Python Functions — Types of Arguments, Global & Nested Functions

---

## 🔹 Types of Arguments

There are several types of arguments that can be passed to functions in Python:

| Type | Description |
|------|--------------|
| **Default Arguments** | Have predefined values; optional to pass during call |
| **Keyword Arguments** | Passed with key=value pairs, order doesn’t matter |
| **Positional (Required) Arguments** | Must be passed in correct order |
| **Variable-length Arguments** | Number of parameters is not fixed (`*args`, `**kwargs`) |

---

## 🧩 1. Positional (Required) Arguments

These are arguments that must be passed **in the correct order** and **must match the number of parameters** in the function definition.

### Example:
```python
def sample(a, b, c):
    return a, b, c

print(sample(10, 20))  # ❌ Error — Missing one argument
```

---

### Example (Order Matters)
```python
def sample(a, b):
    return "Name is:", a, "My age is:", b

print(sample(30, "Rama Krishna"))  # Wrong order
```
🧾 Output:
```
('Name is:', 30, 'My age is:', 'Rama Krishna')
```
✅ Arguments must be passed in the same **positional order** as parameters.

---

## 🧩 2. Keyword Arguments

In keyword arguments, you assign values by parameter name.  
You can pass them in **any order**.

### Example:
```python
def sai(name, age, dep):
    print("Name:", name)
    print("Age:", age)
    print("Department:", dep)

sai("sairam", age=30, dep=120)
```

🧾 Output:
```
Name: sairam
Age: 30
Department: 120
```

---

### ⚠️ Positional argument cannot appear after keyword argument

```python
def func(name1, message, name2):  
    print("Printing message with", name1, ",", message, ",and", name2)

func("John", message="hello", "David")  # ❌ Error
```

✅ Rule: Positional arguments must come **before** keyword arguments.

---

## 🧩 3. Default Arguments

While defining a function, some parameters can have **default values**.  
If not provided during call, the default value will be used.

### Example 1:
```python
def sample(a, b, c=30):  # c has default value
    print("a:", a, "b:", b, "c:", c)

sample(10, 20)       # uses default c = 30
sample(10, 20, 40)   # replaces default
```

🧾 Output:
```
a: 10 b: 20 c: 30  
a: 10 b: 20 c: 40
```

---

### Example 2:
```python
def sample(name, age=30):
    print(name, age)

sample(name="Rama Krishna")
sample(age=25, name="Rama Krishna")
sample(25, "Rama Krishna")  # Wrong position
```

---

## 🧩 4. Variable-length Arguments

Used when the number of arguments is **unknown**.

There are **two types**:

| Type | Symbol | Description |
|------|---------|--------------|
| Non-keyworded | `*args` | Accepts multiple positional arguments (tuple) |
| Keyworded | `**kwargs` | Accepts multiple key-value pairs (dictionary) |

---

### 🔹 Example — Normal Argument
```python
def variableargs(a):
    print(a)

variableargs(10)
```

🧾 Works fine. But this will fail:
```python
variableargs(10, 20)  # ❌ Too many arguments
```

---

### 🔹 Example — Using `*args`
```python
def variableargs(*a):
    print(a)

variableargs(10, 35.2, "python")
```

🧾 Output:
```
(10, 35.2, 'python')
```

✅ `*a` collects all extra positional arguments into a tuple.

---

### 🔹 Example — Using `**kwargs`
```python
def variableargs(**a):
    print(a)

variableargs(name="Rama", age=24)
```

🧾 Output:
```
{'name': 'Rama', 'age': 24}
```

✅ `**a` collects all keyword arguments into a dictionary.

---

### 🔹 Example — Iterating over `*args`
```python
def variableargs(*a):
    print("Elements are:")
    for z in a:
        print(z)
 
variableargs(10, 20, 30, 40)
```

🧾 Output:
```
Elements are:
10
20
30
40
```

---

### 🔹 Example — Iterating over Names
```python
def printme(*names):  
    print("Type:", type(names))  
    print("Names are:")  
    for name in names:  
        print(name)

printme("john", "David", "smith", "nick")
```

🧾 Output:
```
Type: <class 'tuple'>
Names are:
john
David
smith
nick
```

---

## 🧩 5. Using `*` and `**` in Function Calls

| Symbol | Use |
|--------|-----|
| `*` | Unpacks list, tuple, or set |
| `**` | Unpacks dictionary |

### Example:
```python
def sample(a, b, c):
    print(a, b, c)

l = [10, 20, 30]
sample(*l)  # 10 20 30

s = {10, 20, 30}
t = (10, 20, 30)
sample(*s)
sample(*t)

d = {'a': '10', 'b': '20', 'c': '30'}
def sample(**s):
    print(s)
sample(**d)
```

---

# 🌍 Global and Local Variables

| Type | Scope | Access |
|------|--------|--------|
| **Global Variable** | Declared outside function | Accessible everywhere |
| **Local Variable** | Declared inside function | Accessible only within function |

---

### Example 1 — Local variable preference
```python
x = "awesome"
def myfunc():
    x = "fantastic"
    print("Python is " + x)

myfunc()
print("Python is " + x)
```

🧾 Output:
```
Python is fantastic
Python is awesome
```

---

### Example 2 — Using `global` Keyword
```python
x = "awesome"
def myfunc():
    global x
    x = "fantastic"
    print("Python is " + x)

myfunc()
print("Python is " + x)
```

🧾 Output:
```
Python is fantastic
Python is fantastic
```

✅ `global` allows modification of global variables inside the function.

---

### Example 3 — Accessing global variable using `globals()`
```python
a = 10
def sample():
    a = 20
    print(a)              # local
    print(globals()['a']) # global

sample()
```

🧾 Output:
```
20
10
```

---

# 🌀 Nested Functions

A **nested function** is a function defined inside another function.  
It can only be called **inside** its enclosing function.

---

### Example 1:
```python
def outer_fun():
    print("Inside outer function")
    def inner_fun():
        print("Inside inner function")
    inner_fun()
    
outer_fun()
# inner_fun()  ❌ Error
```

🧾 Output:
```
Inside outer function
Inside inner function
```

---

### Example 2 — Returning Inner Function
```python
def outer_fun():
    print("Inside outer function")
    def inner_fun():
        print("Inside inner function")
    return inner_fun

x = outer_fun()  # returns inner function
x()
```

🧾 Output:
```
Inside outer function
Inside inner function
```

✅ Here, `outer_fun()` returns the **reference** of `inner_fun`,  
and `x()` executes that inner function.

---

✨ *“Mastering arguments and scopes gives you total control over how data flows through your functions.”* 🧠🐍
