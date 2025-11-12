# 🧩 Classes and Objects in Python

---

## 🔹 What is a Class?

A **Class** is a **blueprint or template** for creating objects.  
It defines **properties (attributes/variables)** and **behaviors (methods/functions)** that describe an object.

> In simple terms, a **class** is a logical structure that defines how an **object** should behave.

🧠 Think of a class as a **plan** and an object as the **real thing** built from that plan.

---

### 🏫 Example Explanation:
If we consider a `Student` class:
- **Properties (data/attributes)**: `SName`, `Sage`, `SAddress`, `SID`
- **Behaviors (methods)**: `Eating()`, `Sleeping()`, `Reading()`, `Playing()`

---

### ✅ Syntax of a Class:
```python
class ClassName:
    # properties (variables)
    # methods (functions)
```

---

## 🔹 What is an Object?

An **Object** is an **instance of a class** — a real, physical entity created from the class blueprint.  
Objects contain **actual data** and can **access** both **properties** and **methods** defined in the class.

🧠 Example analogy:
> If “Car” is a class, then “Audi”, “BMW”, and “Tesla” are objects.

---

### ✅ Syntax of Object Creation:
```python
reference_variable = ClassName(arguments)
```

Objects are created in **Heap Memory**, while the reference variable is stored in **Stack Memory**.

---

## 🔹 What is a Reference Variable?

A **reference variable** is used to **refer to an object**.  
It acts as a link or pointer between the object and your code.

| Concept | Explanation |
|----------|--------------|
| **Reference variable** | Used to access an object |
| **Object** | Instance of a class stored in heap memory |
| **Multiple references** | Multiple reference variables can point to the same object |

---

### 🧩 Example:
```python
a = 10   # Here 'a' is the reference variable stored in Stack memory.
         # The object '10' is stored in Heap memory.
```

---

## 🧠 Example 1 — Basic Class and Object

```python
class Student:
    '''marks → property (variable) 
       sample() → behavior (method)'''
    marks = 10
    
    def sample(self):  
        print("Hello World")

# Creating an object using class
s1 = Student()
print(s1.marks)
s1.sample()
```

🧾 **Output:**
```
10
Hello World
```

---

## 🧠 Example 2 — Passing Parameters to Methods
```python
class Student:
    marks = 10
    def sample(self, name, age):
        print(f"My name is {name}, my age is {age} and marks are {Student.marks}")

s1 = Student()
print(s1.marks)
s1.sample("Gopal", 30)
```

🧾 **Output:**
```
10
My name is Gopal, my age is 30 and marks are 10
```

---

## 🔹 The `__init__()` Constructor

Every class in Python has a special method called `__init__()`.  
It is **automatically executed** when the object is created.

✅ **Purpose:**
- Assign values to object properties.
- Initialize data when the object is created.

> The `__init__()` method is also known as a **constructor**.

---

### ✅ Syntax:
```python
class ClassName:
    def __init__(self, parameters):
        self.var = parameters
```

> 💡 No need to call it manually — it runs automatically when an object is created.

---

### 🧠 Example 3 — Using `__init__()` Constructor
```python
class Student:
    def __init__(self, name, age):  # Constructor
        self.n = name
        self.a = age

    def details(self):
        print(f"My name is {self.n} and my age is {self.a}")

# Object creation automatically calls __init__()
s1 = Student("Gopal", 30)
s1.details()
```

🧾 **Output:**
```
My name is Gopal and my age is 30
```

---

## 🧠 Example 4 — Multiple Methods in a Class
```python
class Student:
    def __init__(self, name, age):
        self.n = name
        self.a = age

    def My_name(self):
        print(f"My name is {self.n}")
        
    def My_age(self):
        print(f"My age is {self.a}")

s1 = Student("Gopal", 30)
s1.My_name()
s1.My_age()
```

🧾 **Output:**
```
My name is Gopal
My age is 30
```

---

## 🔍 Understanding the `self` Keyword

| Concept | Description |
|----------|--------------|
| **self** | Refers to the current instance (object) of the class |
| **Usage** | Used to access variables and methods within the class |
| **Note** | It must be the **first parameter** in every instance method definition |

---

### 🧠 Example:
```python
class Demo:
    def show(self):
        print("Self refers to:", self)

d = Demo()
d.show()
```

🧾 **Output:**
```
Self refers to: <__main__.Demo object at 0x0000024B5D8A7E80>
```

This means `self` is pointing to the current object (`d` in this case).

---

✨ *“A class defines the idea, an object brings it to life — together they make Python truly object-oriented.”* 🧠🐍
