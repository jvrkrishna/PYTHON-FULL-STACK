# 🧩 Polymorphism and Overloading in Python

---

## 🔹 What is Polymorphism?

> The word **Polymorphism** comes from the Greek words *poly* (many) and *morph* (forms).

In programming, **Polymorphism** means **one entity behaves in multiple forms** depending on context.

🧠 **Real-life Example:**
- A person acts as a **teacher** at school,  
  a **parent** at home, and  
  an **employee** at work.  

All are the same person — but in different forms.

---

## 🧩 1️⃣ Operator Overloading

### 📘 Definition:
> If the same operator performs **different operations** depending on the operands, it is called **Operator Overloading**.

Python supports operator overloading using **magic methods** (also known as **dunder methods**).

Other languages like Java **do not support** operator overloading.

---

### ✅ Example 1 — Built-in Operator Overloading

```python
print(10 + 20)           # Addition
print('Ram' + 'Krishna') # String concatenation
```

🧾 **Output:**
```
30
RamKrishna
```

The `+` operator works differently based on the operand types — hence, *operator overloading*.

---

### ✅ Example 2 — Overloading `+` Operator

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return self.x + other.x, self.y + other.y

p1 = Point(1, 2)
p2 = Point(3, 4)
p3 = p1 + p2   # Calls __add__()
print(p3)
```

🧾 **Output:**
```
(4, 6)
```

✅ **Explanation:**
- The `__add__()` method defines how the `+` operator works for the `Point` class objects.

---

### ✅ Example 3 — Overloading `==` Operator

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

p1 = Point(1, 2)
p2 = Point(1, 2)
p3 = Point(3, 4)

print(p1 == p2)  # True
print(p1 == p3)  # False
```

🧾 **Output:**
```
True
False
```

✅ **Explanation:**
- The `__eq__()` method defines equality (`==`) for custom objects.

---

### 🧠 Common Operator Magic Methods

| Operator | Method | Description |
|-----------|---------|-------------|
| `+` | `__add__(self, other)` | Addition |
| `-` | `__sub__(self, other)` | Subtraction |
| `*` | `__mul__(self, other)` | Multiplication |
| `/` | `__truediv__(self, other)` | Division |
| `==` | `__eq__(self, other)` | Equality |
| `<` | `__lt__(self, other)` | Less Than |
| `<=` | `__le__(self, other)` | Less Than or Equal |
| `>` | `__gt__(self, other)` | Greater Than |
| `>=` | `__ge__(self, other)` | Greater Than or Equal |
| `!=` | `__ne__(self, other)` | Not Equal |

---

## 🧩 2️⃣ Method Overloading

### 📘 Definition:
> If two or more methods have the **same name** but **different number or types of parameters**, it is called **Method Overloading**.

✅ In Python, **true method overloading is not supported**,  
because the **latest defined method overrides** the previous ones.

---

### ⚠️ Example — Not Supported Natively

```python
class Test:
    def m1(self, a):
        print(a)
        
    def m1(self, a, b):
        print(a, b)
        
    def m1(self, a, b, c):
        print(a, b, c)

t = Test()
t.m1(10, 20, 30)  # Only last method is considered
```

🧾 **Output:**
```
10 20 30
```

✅ **Explanation:**
- Only the **last defined method** is valid — earlier ones are overwritten.

---

### ✅ Example — Achieving Method Overloading using *args

```python
class Test:
    def m1(self, *a):
        print(a)

t = Test()
t.m1(10)
t.m1(10, 20, 30)
```

🧾 **Output:**
```
(10,)
(10, 20, 30)
```

✅ **Explanation:**
- `*args` allows passing a variable number of arguments — mimicking method overloading.

---

### ✅ Example — Method Overloading using `multipledispatch`

You can use the **`multipledispatch`** module to achieve real method overloading in Python.

> Install it using:  
> `pip install multipledispatch`

```python
from multipledispatch import dispatch

class Test:
    @dispatch(int, int)
    def add(a, b):
        print(a + b)
    
    @dispatch(float, float)
    def add(a, b):
        print(a + b)
    
    @dispatch(int, float)
    def add(a, b):
        print(a + b)
    
    @dispatch(int, int, int)
    def add(a, b, c):
        print(a + b + c)

t = Test()
t.add(10, 20)
t.add(40, 13.4)
t.add(10, 20, 30)
```

🧾 **Output:**
```
30
53.4
60
```

✅ **Explanation:**
- The `@dispatch()` decorator automatically calls the correct version based on parameter types and count.

---

## 🧩 3️⃣ Constructor Overloading

### 📘 Definition:
> Constructor overloading allows a class to have multiple constructors with different argument lists.

⚠️ **Python does not support constructor overloading directly.**  
Only the **latest defined constructor** is used.

---

### ⚠️ Example — Not Supported

```python
class Test:
    def __init__(self, a):
        print(a)
    
    def __init__(self, a, b):
        print(a, b)

t = Test(10)  # Error
```

🧾 **Error:**
```
TypeError: Test.__init__() missing 1 required positional argument: 'b'
```

---

### ✅ Example — Achieving Constructor Overloading using *args

```python
class Test:
    def __init__(self, *a):
        print(a)

t = Test(10)
t1 = Test(10, 20)
```

🧾 **Output:**
```
(10,)
(10, 20)
```

✅ **Explanation:**
- The `*args` allows passing a variable number of parameters to the constructor.

---

### ✅ Example — Constructor Overloading using `multipledispatch`

```python
from multipledispatch import dispatch

class Test:
    @dispatch(int)
    def __init__(self, a):
        print(a)
    
    @dispatch(int, int)
    def __init__(self, a, b):
        print(a, b)

t = Test(10)
t1 = Test(10, 20)
```

🧾 **Output:**
```
10
10 20
```

✅ **Explanation:**
- The `multipledispatch` library differentiates constructors based on argument count or types.

---

✨ *“Polymorphism allows a single interface to represent different underlying forms — flexibility at its finest.”* 🧬🐍
