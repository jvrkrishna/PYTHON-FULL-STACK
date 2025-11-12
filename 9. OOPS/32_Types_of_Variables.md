# 🧩 Types of Variables in Python (OOP)

---

## 🔹 Overview

In Python **Object-Oriented Programming (OOP)**, variables are categorized into:
1. **Instance Variables**
2. **Static (Class) Variables**
3. **Local Variables**

Each type has its own scope, lifetime, and purpose.

---

## 🧠 1. Instance Variables

### 📘 Definition:
An **Instance Variable** is a variable that is **unique to each object (instance)**.  
These are declared using the **`self`** keyword and can differ from one object to another.

> Instance variables are **object-level variables**.

---

### 🧩 Key Points:
- Created using `self` inside constructor or methods.
- Value is **different** for each object.
- Can be created, modified, accessed, or deleted:
  - Inside **constructor (`__init__`)**
  - Inside **instance method**
  - **Outside the class**

---

### ✅ Example — Creation of Instance Variables

```python
class Sample:
    def __init__(self, name):
        self.name = name    # Instance variable inside constructor
        
    def m1(self, age):
        self.age = age      # Instance variable inside instance method

s = Sample("Rama")
s.m1(30)
s.address = "Kakinada"      # Instance variable outside the class

print(f"My name is {s.name}, my age is {s.age}, and my address is {s.address}")
```

🧾 **Output:**
```
My name is Rama, my age is 30, and my address is Kakinada
```

---

### 🧩 Example — Modification of Instance Variables

```python
class Sample:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
        if self.age < 18:
            self.status = "Minor"
        else:
            self.status = "Adult"
        
    def m1(self, new_name, address):
        self.name = new_name         # Modified inside instance method
        self.address = address       # Created inside instance method

s = Sample("Rama", int(input("Enter the age: ")))
s.m1("Raju", "Kakinada")
s.address = "Rajahmundry"            # Modified outside the class
print(f"My name is {s.name}, my age is {s.age}, status is {s.status}, and address is {s.address}")
```

---

### 🧩 Example — Accessing Instance Variables

```python
class Sample:
    def __init__(self, name):
        self.name = name
        print(f"My name is {self.name}")   # Inside constructor
        
    def m1(self):
        print(f"My name is {self.name}")   # Inside method

s = Sample("Rama")
s.m1()
print(f"My name is {s.name}")              # Outside class
```

---

### ⚠️ Example — Deleting Instance Variables

```python
class Sample:
    def __init__(self, name, age, address):
        self.name = name
        self.age = age
        self.address = address
        del self.name               # Deleted inside constructor
                
    def m1(self):
        del self.age                # Deleted inside instance method
        
s = Sample("Rama", 30, "Kakinada")
del s.address                       # Deleted outside class
print(f"My name is {s.name} and my age is {s.age} and my address is {s.address}")
```

🧾 **Output:**
```
AttributeError: 'Sample' object has no attribute 'name'
```

✅ **Explanation:** Once deleted, the variable no longer exists in the object’s namespace.

---

### 💡 Note:
| When to Use Instance Variables |
|--------------------------------|
| When values differ from object to object (e.g., name, age) |
| When each instance should maintain its own data |

---

## 🧠 2. Static (Class) Variables

### 📘 Definition:
A **Static Variable** (also called a **Class Variable**) is **shared across all objects** of the class.  
It belongs to the **class itself**, not to any one object.

> Static variables are **class-level variables**.

---

### 🧩 Key Points:
- Created using **class name** (`ClassName.variable`).
- Shared by **all instances**.
- Can be created, modified, accessed, or deleted:
  - Inside constructor
  - Inside instance, static, or class methods
  - Outside the class

---

### ✅ Example — Creation of Static Variables

```python
class Sample:
    a = 10                    # Static inside class
    
    def __init__(self):
        Sample.b = 20         # Static inside constructor
            
    def m1(self):
        Sample.c = 30         # Static inside instance method
        
    @classmethod
    def m2(cls):
        Sample.d = 40         # Static inside class method
        
    @staticmethod
    def m3():
        Sample.e = 50         # Static inside static method

s = Sample()
Sample.f = 60                 # Static outside the class
```

---

### 🧩 Example — Accessing Static Variables

```python
class Sample:
    a = 10
    def __init__(self):
        Sample.b = 20
    def m1(self):
        Sample.c = 30
    @classmethod
    def m2(cls):
        Sample.d = 40
    @staticmethod
    def m3():
        Sample.e = 50

s = Sample()
Sample.f = 60

print(Sample.a)   # Access by class
print(s.a)        # Access by object
print(Sample.b)
print(s.b)
s.m1()
print(Sample.c)
s.m2()
print(Sample.d)
s.m3()
print(Sample.e)
print(Sample.f)
```

---

### 🧩 Example — Modification of Static Variables

```python
class Sample:
    a = 10
    print(f"a value inside the class: {a}")
    
    def __init__(self):
        Sample.a = 20
        print(f"a value in constructor: {Sample.a}")
            
    def m1(self):
        Sample.a = 30
        print(f"a value in instance method: {Sample.a}")    
        
    @classmethod
    def m2(cls):
        Sample.a = 40
        print(f"a value in class method: {Sample.a}")  
        
    @staticmethod
    def m3():
        Sample.a = 50
        print(f"a value in static method: {Sample.a}")  

s = Sample()
Sample.a = 60
s.m1()
s.m2()
s.m3()
```

🧾 **Output (Sequence of modification):**
```
a value inside the class: 10
a value in constructor: 20
a value in instance method: 30
a value in class method: 40
a value in static method: 50
```

---

### ⚠️ Example — Deleting Static Variables

```python
class Sample:
    a = 10
    def __init__(self):
        del Sample.a
    def m1(self):
        del Sample.a
    @classmethod
    def m2(cls):
        del Sample.a
    @staticmethod
    def m3():
        del Sample.a

s = Sample()
del Sample.a
print(Sample.a)
```

🧾 **Output:**
```
AttributeError: type object 'Sample' has no attribute 'a'
```

✅ **Explanation:** Once deleted, the variable no longer belongs to the class.

---

### 💡 Note:
| When to Use Static Variables |
|-------------------------------|
| When the value is **same for all objects** (e.g., `company_name`, `school_name`) |
| Helps save memory and improve performance |

---

## 🧠 3. Local Variables

### 📘 Definition:
**Local Variables** are **temporary variables** used inside a method or function.  
They are created when the method is called and destroyed after it finishes execution.

> Local variables exist **only during method execution**.

---

### ✅ Example:

```python
class Calculator:
    def add(self):
        a = 10   # Local variable
        b = 20   # Local variable
        result = a + b
        print(result)

c1 = Calculator()
c1.add()
```

🧾 **Output:**
```
30
```

---

### ⚠️ Example — Accessing Local Variables Outside Method

```python
class Calculator:
    def add(self):
        a = 10
        b = 20
        result = a + b
        print(result)
        
    def sub(self):
        print(a)  # Error — not accessible
        print(b)

c1 = Calculator()
c1.add()
c1.sub()
```

🧾 **Output:**
```
30
NameError: name 'a' is not defined
```

✅ **Explanation:**  
Local variables are destroyed once method execution completes — not available outside their scope.

---

✨ *“Instance variables define individuality, static variables define commonality, and local variables define temporary logic.”* 🧠🐍
