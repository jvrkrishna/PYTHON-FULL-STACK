# 🧩 Types of Inheritance in Python

---

## 🔹 What is Inheritance?

> **Inheritance** allows one class (child/derived class) to acquire properties and methods of another class (parent/base class).  
> It supports **code reusability**, **extensibility**, and **maintainability** in OOP.

---

## 🧠 Types of Inheritance in Python

| Type | Description | Example Syntax |
|------|--------------|----------------|
| **Single Inheritance** | One class inherits from another single class. | `class B(A)` |
| **Multilevel Inheritance** | A class inherits from another class which itself inherits from another. | `class C(B)` where `B(A)` |
| **Multiple Inheritance** | A class inherits from more than one base class. | `class C(A, B)` |
| **Hierarchical Inheritance** | Multiple child classes inherit from a single parent class. | `class B(A)`, `class C(A)` |
| **Hybrid Inheritance** | Combination of two or more types of inheritance. | Mixed structure |

---

## 🧩 1️⃣ Multi-Level Inheritance

### 📘 Definition:
> In **Multi-Level Inheritance**, a class is derived from another class, which is itself derived from another class.  
> It forms a **chain of inheritance**.

🧠 **Syntax:**
```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass
```

🧩 This means:
```
A → B → C
```

- `A` is the **Base class**
- `B` is the **Intermediate class**
- `C` is the **Derived (Child) class**

---

### ✅ Example:

```python
class A:
    def method1(self):
        print("This is parent A class Method1")
        
class B(A):
    def method2(self):
        print("This is child B class Method2")
    
class C(B):
    def method3(self):
        print("This is grandchild C class Method3")
        
a = A()   # A has only its own method
a.method1()

b = B()   # B has both A and B class methods
b.method1()
b.method2()

c = C()   # C has A, B, and C class methods
c.method1()
c.method2()
c.method3()
```

🧾 **Output:**
```
This is parent A class Method1
This is parent A class Method1
This is child B class Method2
This is parent A class Method1
This is child B class Method2
This is grandchild C class Method3
```

✅ **Explanation:**
- Class `B` inherits from class `A`.
- Class `C` inherits from class `B`.
- So class `C` indirectly inherits from class `A` too.

---

### 🧠 Real-World Example:

```
Person → Employee → Manager
```

- **Person:** Base class with basic attributes (name, age).  
- **Employee:** Inherits from Person and adds company info.  
- **Manager:** Inherits from Employee and adds team-handling features.

---

### ✅ Example: Real Scenario

```python
class Person:
    def info(self):
        print("Person class")

class Employee(Person):
    def emp_info(self):
        print("Employee class")

class Manager(Employee):
    def manager_info(self):
        print("Manager class")

m = Manager()
m.info()
m.emp_info()
m.manager_info()
```

🧾 **Output:**
```
Person class
Employee class
Manager class
```

---

## 🧩 2️⃣ Hierarchical Inheritance

### 📘 Definition:
> In **Hierarchical Inheritance**, multiple child classes inherit from a single parent class.

🧠 **Syntax:**
```python
class Parent:
    pass

class Child1(Parent):
    pass

class Child2(Parent):
    pass
```

🧩 Visual Representation:
```
            class A
           /       \
        class B     class C
```

---

### ✅ Example:

```python
class A:
    def method1(self):
        print("Parent class method1")

class B(A):
    def method2(self):
        print("Child class method2")

class C(A):
    def method3(self):
        print("Child class method3")

b = B()
b.method1()
b.method2()

c = C()
c.method1()
c.method3()
```

🧾 **Output:**
```
Parent class method1
Child class method2
Parent class method1
Child class method3
```

✅ **Explanation:**
- Both `B` and `C` inherit from the same class `A`.
- So, both can access `A`'s methods independently.

---

### 🧠 Real-World Example:

```
Vehicle
  ↳ Car
  ↳ Bike
```

Each subclass (Car, Bike) inherits the same base class (Vehicle) but has its own unique features.

---

### ✅ Example:

```python
class Vehicle:
    def start(self):
        print("Vehicle started")

class Car(Vehicle):
    def four_wheeler(self):
        print("Car is a four-wheeler")

class Bike(Vehicle):
    def two_wheeler(self):
        print("Bike is a two-wheeler")

car1 = Car()
bike1 = Bike()

car1.start()
car1.four_wheeler()

bike1.start()
bike1.two_wheeler()
```

🧾 **Output:**
```
Vehicle started
Car is a four-wheeler
Vehicle started
Bike is a two-wheeler
```

✅ Each child (`Car`, `Bike`) gets the common method (`start()`) from `Vehicle`.

---

## 🧩 Key Differences

| Type | Structure | Example | Access |
|------|------------|----------|--------|
| **Multilevel Inheritance** | A → B → C | `class C(B)` | C can access A and B |
| **Hierarchical Inheritance** | A → (B, C) | `class B(A)` & `class C(A)` | Both B and C can access A independently |

---

## 🧩 Summary

| Concept | Description |
|----------|--------------|
| **Multilevel Inheritance** | Chain of inheritance — derived from another derived class |
| **Hierarchical Inheritance** | Multiple classes derived from a single parent |
| **Main Benefit** | Code reusability and organization |
| **Keyword** | `class Child(Parent):` |
| **Example** | `class C(B)` → `class B(A)` |
| **Common in Real-World** | Organizational hierarchies, family trees, product models |

---

✨ *“Inheritance forms the backbone of OOP — it connects classes like generations in a family tree.”* 🧬🐍
