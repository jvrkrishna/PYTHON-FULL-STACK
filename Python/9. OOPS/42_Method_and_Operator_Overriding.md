# 🧩 Method, Constructor, and Operator Overriding in Python

---

## 🔹 What is Method Overriding?

> **Method Overriding** occurs when a **child class provides its own implementation** of a method that already exists in its parent class.

The method in the child class must have **the same name, parameters, and signature** as the parent method.

---

### ✅ Example 1 — Without Overriding
```python
class Parent:
    def m1(self):
        print('This is parent m1')
        
class Child(Parent):
    pass

c = Child()
c.m1()
```
🧾 **Output:**
```
This is parent m1
```

✅ Explanation:
- The child class inherits `m1()` from the parent because it doesn’t override it.

---

### ✅ Example 2 — With Method Overriding
```python
class Parent:
    def m1(self):
        print('This is parent m1')
        
class Child(Parent):
    def m1(self):     # Method Overriding
        print('This is child m1')

c = Child()
c.m1()
```
🧾 **Output:**
```
This is child m1
```

✅ Explanation:
- The child method **overrides** the parent’s method with the same name.

---

### ✅ Example 3 — Real Example: Shape Area Calculation
```python
class Circle:
    def area(self, r):
        print(3.14 * r * r)

class Triangle(Circle):
    def area(self, b, h):
        print(0.5 * b * h)

class Square(Circle):
    def area(self, s):
        print(s * s)

t = Triangle()
t.area(2.3, 5.6)
```
🧾 **Output:**
```
6.44
```

✅ Explanation:
- Each subclass provides its **own implementation** of the `area()` method.

---

### ✅ Example 4 — Animal Sound Example
```python
class Animal:
    def sound(self):
        print("Animals make different sounds")

class Dog(Animal):
    def sound(self):
        print("Dog Barks")

class Cat(Animal):
    def sound(self):
        print("Cat Meows")

d = Dog()
d.sound()
```
🧾 **Output:**
```
Dog Barks
```

✅ Explanation:
- Different classes provide **different behavior** for the same method name (`sound()`).

---

## 🔹 Constructor Overriding

> When a **child class provides its own `__init__` constructor**, overriding the parent’s constructor, it is called **constructor overriding**.

---

### ✅ Example 1 — Without Overriding
```python
class Parent:
    def __init__(self):
        print('This is parent constructor')

class Child(Parent):
    pass

c = Child()
```
🧾 **Output:**
```
This is parent constructor
```

---

### ✅ Example 2 — With Overriding
```python
class Parent:
    def __init__(self):
        print('This is parent constructor')
        
class Child(Parent):
    def __init__(self):     # Constructor Overriding
        print('This is child constructor')

c = Child()
```
🧾 **Output:**
```
This is child constructor
```

✅ Explanation:
- The child’s constructor overrides the parent’s — parent’s constructor is not executed automatically unless explicitly called using `super()`.

---

### ⚠️ Example — Without Using `super()`
```python
class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def details(self):
        print(f"My name is {self.name}")
        print(f"My age is {self.age}")

class Student:
    def __init__(self, name, age, course, college):
        self.name = name       # Duplicate
        self.age = age         # Duplicate
        self.course = course
        self.college = college

    def details(self):
        print(f"My name is {self.name}")  # Duplicate
        print(f"My age is {self.age}")    # Duplicate
        print(f"My course is {self.course}")
        print(f"My college is {self.college}")

e = Student("Ram", 30, "Python", "ABC College")
e.details()
```
⚠️ **Problem:** Code duplication in multiple classes.

---

### ✅ Example — Using `super()` for Constructor Overriding
```python
class Human:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def details(self):
        print(f"My name is {self.name}")
        print(f"My age is {self.age}")

class Student(Human):
    def __init__(self, name, age, course, college):
        super().__init__(name, age)
        self.course = course
        self.college = college

    def details(self):
        super().details()
        print(f"My course is {self.course}")
        print(f"My college is {self.college}")

class Employee(Human):
    def __init__(self, name, age, dep, company):
        super().__init__(name, age)
        self.dep = dep
        self.company = company

    def details(self):
        super().details()
        print(f"My department is {self.dep}")
        print(f"My company is {self.company}")

e = Employee("Ram", 30, "IT", "Wipro")
e.details()
```

🧾 **Output:**
```
My name is Ram
My age is 30
My department is IT
My company is Wipro
```

✅ **Explanation:**
- `super()` calls the parent constructor, avoiding code duplication.
- This is a clean, reusable OOP approach.

---

## 🔹 Operator Overriding

> Operator overriding (or operator overloading) lets you define how operators like `+`, `-`, `*`, and `==` behave for **custom objects**.

Python allows overriding these using **magic (dunder) methods** such as:
`__add__`, `__sub__`, `__mul__`, `__eq__`, etc.

---

### ⚠️ Example — Without Magic Method (Error)
```python
class Employee:
    def __init__(self, salary):
        self.salary = salary

class Student:
    def __init__(self, stipend):
        self.stipend = stipend

e = Employee(10000)
s = Student(5000)

print(e + s)
```

🧾 **Error:**
```
TypeError: unsupported operand type(s) for +: 'Employee' and 'Student'
```

---

### ✅ Example — Operator Overriding using Magic Method
```python
class Employee:
    def __init__(self, salary):
        self.salary = salary
    
    def __add__(self, other):  # Overriding the + operator
        return self.salary + other.stipend

class Student:
    def __init__(self, stipend):
        self.stipend = stipend

e = Employee(10000)
s = Student(5000)

print(e + s)
```

🧾 **Output:**
```
15000
```

✅ **Explanation:**
- When `e + s` is executed, Python calls `Employee.__add__(self, other)` automatically.

---

### 🧠 Common Magic Methods for Operator Overriding

| Operator | Method | Description |
|-----------|---------|-------------|
| `+` | `__add__(self, other)` | Addition |
| `-` | `__sub__(self, other)` | Subtraction |
| `*` | `__mul__(self, other)` | Multiplication |
| `/` | `__truediv__(self, other)` | Division |
| `==` | `__eq__(self, other)` | Equality |
| `<` | `__lt__(self, other)` | Less than |
| `<=` | `__le__(self, other)` | Less than or equal |
| `>` | `__gt__(self, other)` | Greater than |
| `>=` | `__ge__(self, other)` | Greater than or equal |
| `!=` | `__ne__(self, other)` | Not equal |

---

✨ *“Overriding allows derived classes to customize or extend inherited behavior — enabling true runtime polymorphism.”* 🧬🐍
