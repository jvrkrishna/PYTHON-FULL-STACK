# ⚙️ Types of Methods in Python (OOP)

---

## 🧠 Overview

In Python, methods define the **behavior** of a class.  
They are functions that belong to a class and operate on its data (variables).

There are **three types of methods** in OOP:

1. **Instance Methods**
2. **Class Methods**
3. **Static Methods**

Each type has a specific purpose, parameter type, and scope.

---

## 🔹 1. Instance Method

### 📘 Definition:
An **Instance Method** operates on **instance variables** (object-level variables).  
The **first parameter** must be `self`, which refers to the current object.

> Instance methods are used to access, modify, or delete instance variables.

---

### ✅ Key Points

| Property | Description |
|-----------|--------------|
| Parameter | `self` (refers to current object) |
| Accesses | Instance variables |
| Decorator | ❌ Not required |
| Call Inside Class | Using `self.method_name()` |
| Call Outside Class | Using object reference |

---

### 🧩 Example 1 — Basic Instance Methods

```python
class Calculator:
    def __init__(self, a, b):
        self.a = a
        self.b = b
           
    def add(self):
        result = self.a + self.b
        print(f"Addition result: {result}")
        
    def sub(self):
        result = self.a - self.b
        print(f"Subtraction result: {result}")
        
c1 = Calculator(10, 20)
c1.add()
c1.sub()
```

🧾 **Output:**
```
Addition result: 30
Subtraction result: -10
```

---

### 🧩 Example 2 — Calling One Instance Method from Another

```python
class Calculator:
    def __init__(self, a, b):
        self.a = a
        self.b = b
           
    def add(self):
        result = self.a + self.b
        print(f"Addition result: {result}")
        self.sub()    # Calling another instance method

    def sub(self):
        result = self.a - self.b
        print(f"Subtraction result: {result}")
        
c1 = Calculator(10, 20)
c1.add()
```

---

### 🧩 Example 3 — Performing Operations via Instance Methods

```python
class Test:
    def __init__(self, a, b):
        self.a = a
        self.b = b
        
    def access(self):
        print(f"a = {self.a}, b = {self.b}")
    
    def update(self, x, y):
        self.a = x
        self.b = y

    def delete(self):
        del self.a

t1 = Test(10, 20)
print(t1.__dict__)
t1.access()
t1.update(30, 40)
t1.access()
t1.delete()
print(t1.__dict__)
```

🧾 **Output:**
```
{'a': 10, 'b': 20}
a = 10, b = 20
a = 30, b = 40
{'b': 40}
```

---

## 🔹 2. Class Method

### 📘 Definition:
A **Class Method** operates on **class-level (static) variables**.  
The **first parameter** must be `cls`, which refers to the class itself.

> Class methods affect the class as a whole, not individual objects.

---

### ✅ Key Points

| Property | Description |
|-----------|--------------|
| Parameter | `cls` (refers to class) |
| Accesses | Static (class-level) variables |
| Decorator | `@classmethod` |
| Call Inside Class | Using `cls.method_name()` or `ClassName.method_name()` |
| Call Outside Class | Using class name or object reference |

---

### 🧩 Example 1 — Creating and Accessing Class Variables

```python
class Person:
    school_name = "Sri Chaitanya"
    
    @classmethod
    def cls_method(cls):
        cls.school_location = "Kakinada"
        Person.school_pin = 1234
        print(f"School: {cls.school_name}, Location: {cls.school_location}, Pin: {Person.school_pin}")

Person.cls_method()    # Called using class name
p1 = Person()
p1.cls_method()        # Called using object
```

---

### 🧩 Example 2 — Calling One Class Method from Another

```python
class Person:
    school_name = "Sri Chaitanya"
    
    @classmethod
    def cls_method(cls):
        print(f"School: {cls.school_name}")
        cls.another_cls_method()
        
    @classmethod
    def another_cls_method(cls):
        print(f"Accessed inside another method: {cls.school_name}")

Person.cls_method()
```

🧾 **Output:**
```
School: Sri Chaitanya
Accessed inside another method: Sri Chaitanya
```

---

### 🧩 Example 3 — Modifying, Accessing, and Deleting Class Variables

```python
class Test:
    a = 10
    b = 20
    
    @classmethod
    def access(cls):
        print(f"a = {cls.a}, b = {cls.b}")
    
    @classmethod
    def update(cls, x, y):
        cls.a = x
        cls.b = y

    @classmethod
    def delete(cls):
        del cls.a

Test.access()
Test.update(30, 40)
Test.access()
Test.delete()
print(Test.__dict__)
```

🧾 **Output:**
```
a = 10, b = 20
a = 30, b = 40
{'__module__': '__main__', 'b': 40, ...}
```

---

### 🧩 Example — Accessing Variables Across Class Methods

```python
class Person:
    school_name = "Sri Chaitanya"
    
    @classmethod
    def m1(cls):
        cls.school_location = "Kakinada"
        Person.school_pin = 1234
        print(f"School: {cls.school_name}, Location: {cls.school_location}, Pin: {Person.school_pin}")
        
    @classmethod
    def m2(cls):
        print(f"School: {cls.school_name}, Location: {cls.school_location}, Pin: {Person.school_pin}")

Person.m1()
p1 = Person()
p1.m2()
```

🧾 **Output:**
```
School: Sri Chaitanya, Location: Kakinada, Pin: 1234
School: Sri Chaitanya, Location: Kakinada, Pin: 1234
```

---

## 🔹 3. Static Method

### 📘 Definition:
A **Static Method** is used when **neither instance (`self`) nor class (`cls`) variables are needed**.  
It behaves like a normal function but belongs to the class’s namespace.

> Static methods are used for general-purpose operations that logically belong to the class.

---

### ✅ Key Points

| Property | Description |
|-----------|--------------|
| Parameter | No `self` or `cls` |
| Accesses | Only local variables |
| Decorator | `@staticmethod` |
| Call Inside Class | Using `ClassName.method_name()` |
| Call Outside Class | Using class name or object reference |

---

### 🧩 Example 1 — Static Method Basics

```python
class Calculator:
    @staticmethod
    def add(a=10, b=20):
        print(f"Addition: {a + b}")
        
    @staticmethod
    def sub(a, b):
        print(f"Subtraction: {a - b}")
        
Calculator.add()    # Called using class name
c1 = Calculator()
c1.add()            # Called using object
```

🧾 **Output:**
```
Addition: 30
Addition: 30
```

---

### 🧩 Example 2 — Calling One Static Method Inside Another

```python
class Calculator:
    @staticmethod
    def add(a=10, b=20):
        print(f"Addition: {a + b}")
        Calculator.sub(30, 40)  # Calling another static method
        
    @staticmethod
    def sub(a, b):
        print(f"Subtraction: {a - b}")

Calculator.add()
```

🧾 **Output:**
```
Addition: 30
Subtraction: -10
```

---

## 🧩 Summary Table

| Method Type | Decorator | First Argument | Access | Common Use | Call Type |
|--------------|------------|----------------|---------|--------------|------------|
| **Instance Method** | None | `self` | Instance variables | Modify instance data | Object only |
| **Class Method** | `@classmethod` | `cls` | Class (static) variables | Modify class-level data | Class / Object |
| **Static Method** | `@staticmethod` | ❌ None | Local variables | Utility or helper functions | Class / Object |

---

## 🧠 Summary

| Concept | Instance Method | Class Method | Static Method |
|----------|-----------------|---------------|----------------|
| **Access Variables** | Instance | Class | Local |
| **Decorator Used** | ❌ | `@classmethod` | `@staticmethod` |
| **Argument Type** | `self` | `cls` | None |
| **Access Level** | Object-specific | Class-specific | Independent |
| **Common Usage** | Modify object data | Modify class data | Utility or helper logic |

---

✨ *“Instance methods define behavior, class methods manage structure, and static methods serve logic.”* 🧠🐍
