# 🧩 Access Modifiers and Encapsulation in Python

---

## 🔹 What are Access Modifiers?

> **Access Modifiers** are used to **control the visibility (scope)** of attributes and methods in a class.

They determine **where and how** variables or methods can be accessed —  
from inside the class, from subclasses, or from outside the class.

---

### 🧠 Types of Access Modifiers in Python

| Access Modifier | Symbol | Access Level | Description |
|-----------------|---------|---------------|--------------|
| Public | No symbol | 🌐 Everywhere | Can be accessed anywhere (inside, outside, or child class) |
| Protected | `_` (single underscore) | 🧩 Within class & subclass | Can be accessed within the class and its subclasses (by convention) |
| Private | `__` (double underscore) | 🔒 Within class only | Cannot be accessed directly outside the class or by child class |

---

## 🔸 Public Access Modifier

✅ Accessible:
- Within the class  
- Within the child class  
- Outside the class  

---

### ✅ Example — Public Variable
```python
class A:
    def __init__(self):
        self.x = 100  # public attribute
    
    def test(self):
        print(self.x)  # inside the class

class B(A):
    def test1(self):
        print(self.x)  # inside the child class

a = A()
a.test()

b = B()
b.test1()

print(a.x)  # outside the class
```

🧾 **Output:**
```
100
100
100
```

---

### ✅ Example — Public Method
```python
class A:
    def m1(self):
        print("Public method m1()")

    def test(self):
        self.m1()  # inside class

class B(A):
    def new_test(self):
        self.m1()  # inside child class

a = A()
a.test()

b = B()
b.new_test()

a.m1()  # outside class
```

🧾 **Output:**
```
Public method m1()
Public method m1()
Public method m1()
```

---

## 🔸 Protected Access Modifier

✅ Accessible:
- Within the class  
- Within the child class  
❌ Not intended to be accessed outside the class (but still possible)

🔹 Convention only — Python does not enforce true protection (unlike Java or C++).

---

### ✅ Example — Protected Variable
```python
class A:
    def __init__(self):
        self._x = 100  # protected attribute

    def test(self):
        print(self._x)  # inside the class

class B(A):
    def test1(self):
        print(self._x)  # inside the child class

a = A()
a.test()

b = B()
b.test1()

print(a._x)  # outside the class (still accessible but not recommended)
```

🧾 **Output:**
```
100
100
100
```

⚠️ **Note:**  
Protected members are **not strictly enforced** — the single underscore is a **convention** to indicate *“use only internally.”*

---

### ✅ Example — Protected Method
```python
class A:
    def _m1(self):  # protected method
        print("Protected method _m1()")

    def test(self):
        self._m1()

class B(A):
    def new_test(self):
        self._m1()

a = A()
a.test()

b = B()
b.new_test()

a._m1()  # accessible but not recommended outside the class
```

🧾 **Output:**
```
Protected method _m1()
Protected method _m1()
Protected method _m1()
```

---

## 🔸 Private Access Modifier

✅ Accessible:
- Within the class only  
❌ Not accessible in child or outside classes  

🔹 Declared using **double underscore `__`**.

---

### ✅ Example — Private Variable (within class)
```python
class A:
    def __init__(self):
        self.__x = 100  # private attribute
    
    def test(self):
        print(self.__x)  # inside the class

a = A()
a.test()
```

🧾 **Output:**
```
100
```

---

### ⚠️ Example — Private Variable (in child class)
```python
class A:
    def __init__(self):
        self.__x = 100

class B(A):
    def test(self):
        print(self.__x)  # ❌ cannot access private attribute

b = B()
b.test()
```

🧾 **Error:**
```
AttributeError: 'B' object has no attribute '__x'
```

---

### ⚠️ Example — Private Variable (outside the class)
```python
class A:
    def __init__(self):
        self.__x = 100

a = A()
print(a.__x)  # ❌ Error
```

🧾 **Error:**
```
AttributeError: 'A' object has no attribute '__x'
```

---

### ✅ Example — Private Method
```python
class A:
    def __m1(self):  # private method
        print("Private method __m1()")

    def test(self):
        self.__m1()  # accessible within the class

a = A()
a.test()
```

🧾 **Output:**
```
Private method __m1()
```

---

### ⚠️ Example — Private Method (in child or outside)
```python
class A:
    def __m1(self):
        print("Private method __m1()")

class B(A):
    def call_parent(self):
        self.__m1()  # ❌ cannot access private parent method

b = B()
b.call_parent()
```

🧾 **Error:**
```
AttributeError: 'B' object has no attribute '__m1'
```

---

## 🔸 Name Mangling (Bypassing Private Attributes)

> Python doesn’t have *true* private variables — it performs **name mangling** by renaming private variables as `_ClassName__Variable`.

---

### ✅ Example — Accessing Private Variable Using Name Mangling
```python
class A:
    def __init__(self):
        self.__x = 100  # private variable

a = A()
print(a._A__x)  # Name mangling syntax
```

🧾 **Output:**
```
100
```

✅ **Explanation:**
- Internally, Python converts `__x` to `_A__x` to avoid accidental access, not intentional protection.

---

## 🔹 Encapsulation

> **Encapsulation** is the process of **wrapping data (variables) and methods** into a single unit (class) to **protect** it from unauthorized access and modification.

It helps in **data hiding** and **controlled access**.

---

### ⚠️ Example — Without Encapsulation (Data Modification)
```python
class College:
    def __init__(self):
        self.balance = 50000

c = College()
print(c.balance)
c.balance = 100     # anyone can modify
print(c.balance)
del c.balance       # anyone can delete
print(c.balance)
```

🧾 **Error:**
```
AttributeError: 'College' object has no attribute 'balance'
```

---

### ✅ Example — With Encapsulation (Data Hiding)
```python
class College:
    def __init__(self):
        self.__balance = 50000  # private variable

c = College()
print(c.__balance)  # ❌ Error
```

🧾 **Error:**
```
AttributeError: 'College' object has no attribute '__balance'
```

---

### ✅ Example — Encapsulation with Getter Method
```python
class College:
    def __init__(self):
        self.__balance = 50000

    def get_balance(self):
        return self.__balance

c = College()
print(c.get_balance())
```

🧾 **Output:**
```
50000
```

✅ **Explanation:**
- Access to private data is controlled through a **getter method**.

---

### ✅ Example — Encapsulation with Authentication
```python
class College:
    def __init__(self):
        self.__balance = 50000

    def get_balance(self, password):
        if password == 2025:
            return self.__balance
        else:
            return "Unauthorized Access"

c = College()
print(c.get_balance(2025))   # correct password
print(c.get_balance(1234))   # wrong password
```

🧾 **Output:**
```
50000
Unauthorized Access
```

✅ **Explanation:**
- Here, **data access** is restricted using a password — an example of **secure encapsulation**.

---

## 🔹 Summary

| Concept | Description | Access Syntax |
|----------|--------------|----------------|
| Public | Accessible everywhere | `var` |
| Protected | Accessible in class and subclasses | `_var` |
| Private | Accessible only in same class | `__var` |
| Name Mangling | Access private data using class name | `_ClassName__var` |
| Encapsulation | Combines data + methods; hides internal data | Achieved using private variables and getter/setter methods |

---

✨ *“Encapsulation protects — Access Modifiers control — Together, they secure your code.”* 🧬🐍
