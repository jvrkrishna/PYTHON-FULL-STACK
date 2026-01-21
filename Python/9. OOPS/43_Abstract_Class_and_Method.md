# 🧩 Abstract Classes and Abstract Methods in Python

---

## 🔹 What is an Abstract Class?

> An **Abstract Class** is a class that **cannot be instantiated directly** and is meant to serve as a **blueprint** for other classes.

It provides **partial implementation**, where some methods have implementation (concrete methods) and some are declared but not defined (abstract methods).

---

### 🧠 Key Points

- Partial implementation of a class is called an **Abstract Class**.
- It can contain both **abstract** and **concrete** methods.
- It **cannot be instantiated** (you cannot create an object of it).
- Any class that contains at least **one abstract method** becomes an abstract class.
- A subclass **must provide an implementation** for all abstract methods.
- To define abstract classes, Python provides the **`abc` module** (*Abstract Base Class*).

---

### 🧩 Syntax

```python
from abc import ABC, abstractmethod

class ClassName(ABC):         # Inherit from ABC
    @abstractmethod
    def method_name(self):
        pass
```

---

## 🔹 Abstract Method

> A method that is declared but not implemented (i.e., has no body) is called an **abstract method**.

Defined using the `@abstractmethod` decorator from the `abc` module.

---

## ✅ Example 1 — Using `abc` Module and Abstract Class

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    # Abstract method
    @abstractmethod
    def sound(self):
        pass
    
    # Concrete method
    def sleep(self):
        print("This animal is sleeping.")

class Dog(Animal):
    # Implementing abstract method
    def sound(self):
        print("Woof! Woof!")

# animal = Animal()   # ❌ Error: Can't instantiate abstract class
dog = Dog()
dog.sound()
dog.sleep()
```

🧾 **Output:**
```
Woof! Woof!
This animal is sleeping.
```

✅ **Explanation:**
- The `Dog` class provides implementation for the abstract method `sound()`.
- `Animal` cannot be instantiated directly because it is abstract.

---

## ✅ Example 2 — Abstract Class as a Blueprint

```python
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def Color(self):
        pass

    @abstractmethod
    def Model(self):
        pass

class Car(Vehicle):
    def __init__(self, company):
        self.company = company

    def Color(self, color):
        print(f"My car company is {self.company} and the color is {color}")

    def Model(self, mdl):
        print(f"My {self.company} car model is {mdl}")

# Object creation
c = Car("Suzuki")
c.Color("Red")
c.Model(2020)
```

🧾 **Output:**
```
My car company is Suzuki and the color is Red
My Suzuki car model is 2020
```

✅ **Explanation:**
- `Vehicle` provides a structure (blueprint).
- The child class `Car` implements all abstract methods.

---

## 🔹 Concrete Class vs Abstract Class

| Feature | Concrete Class | Abstract Class |
|----------|----------------|----------------|
| Definition | Fully implemented class | Partially implemented class |
| Methods | Only concrete methods | Can have both abstract & concrete methods |
| Object Creation | ✅ Possible | ❌ Not possible |
| Responsibility | Child class not required to implement anything | Child class **must** implement abstract methods |
| Module Requirement | No import needed | Requires `abc` module |
| Blueprint For | Objects | Other classes |

---

### ✅ Example: Concrete Class
```python
class Test:
    def m1(self):
        print("Concrete method")

t = Test()
t.m1()
```

🧾 **Output:**
```
Concrete method
```

✅ **Explanation:**
- The `Test` class is concrete and can be instantiated directly.

---

### ✅ Example: Abstract Class
```python
from abc import ABC, abstractmethod

class Test(ABC):
    @abstractmethod
    def m1(self):
        pass

t = Test()
```

🧾 **Error:**
```
TypeError: Can't instantiate abstract class Test without an implementation for abstract method 'm1'
```

✅ **Explanation:**
- The `Test` class contains an abstract method, so an object **cannot** be created.

---

### ✅ Example: Abstract Class without Abstract Method
```python
from abc import ABC

class Test(ABC):
    def m1(self):
        print("Hello")

t = Test()  # Works fine
t.m1()
```

🧾 **Output:**
```
Hello
```

✅ **Explanation:**
- Although the class inherits from `ABC`, it doesn’t have any abstract methods — hence, it can be instantiated.

---

## 🔹 Abstract Method Implementation

### ✅ Example 1 — Proper Implementation
```python
from abc import ABC, abstractmethod

class Test(ABC):
    @abstractmethod
    def m1(self):
        pass

class Child(Test):
    def m1(self):
        print("Hello")

c = Child()
c.m1()
```

🧾 **Output:**
```
Hello
```

✅ **Explanation:**
- The abstract method `m1()` is implemented by the child class — object creation is allowed.

---

### ✅ Example 2 — Empty Implementation
```python
from abc import ABC, abstractmethod

class Test(ABC):
    @abstractmethod
    def m1(self):
        pass

class Child(Test):
    def m1(self):
        pass  # Empty body still counts as implementation

c = Child()
c.m1()
```

🧾 **Output:**
```
(no output, but executes successfully)
```

✅ **Explanation:**
- Even an empty body satisfies the rule that `m1()` must be implemented.

---

### ⚠️ Example 3 — Missing Implementation (Error)
```python
from abc import ABC, abstractmethod

class Test(ABC):
    @abstractmethod
    def m1(self):
        pass

class Child(Test):
    pass  # No implementation

c = Child()
c.m1()
```

🧾 **Error:**
```
TypeError: Can't instantiate abstract class Child without an implementation for abstract method 'm1'
```

✅ **Explanation:**
- Since `Child` didn’t override `m1()`, it also becomes abstract and cannot be instantiated.

---

✨ *“Abstract classes define the rules; subclasses define the behavior.”* 🧬🐍
