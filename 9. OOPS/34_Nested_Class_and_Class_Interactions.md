# 🧩 Nested Classes & Passing One Class Members to Another in Python

---

## 🔹 1. Nested Class (Inner Class)

### 📘 Definition:
If a class is defined **inside another class**, it is known as a **Nested Class** or **Inner Class**.

> ✅ Inner Class always depends on the **Outer Class**.  
> ❌ If there is no outer class, there cannot be an inner class.

---

### 🧠 Why Use Nested Classes?

- To logically group classes that are only used within one outer class.
- To represent a **"has-a"** relationship (e.g., a University *has* a Department).
- For encapsulation and code organization.

---

### ✅ Example 1 — Basic Inner Class

```python
class Outer:
    def __init__(self):
        print("Outer class")
    
    class Inner:
        def __init__(self):
            print("Inner class")

# Outer class object
o = Outer()

# Inner class object (different ways)
i = o.Inner()          # via outer object
i1 = Outer.Inner()     # directly via outer class
i2 = Outer().Inner()   # anonymous outer object
```

🧾 **Output:**
```
Outer class
Inner class
Inner class
Outer class
Inner class
```

---

### ✅ Example 2 — Inner Class Object Inside Outer Class

```python
class Outer:
    def __init__(self):
        print("Outer class")
    
    class Inner:
        def __init__(self):
            print("Inner Class")

    i = Inner()  # Inner object created inside outer class

o = Outer()
```

🧾 **Output:**
```
Inner Class
Outer class
```

---

### ✅ Example 3 — Inner → Inner Class (Nested Inside Another Inner)

```python
class Outer:
    def __init__(self):
        print("Outer class")
    
    class Inner:
        def __init__(self):
            print("Inner Class")

        class Inner1:
            def __init__(self):
                print("Inner in Class")

o = Outer()
i = o.Inner()
i1 = i.Inner1()
```

🧾 **Output:**
```
Outer class
Inner Class
Inner in Class
```

---

## 🔹 2. Passing One Class Members to Another Class

In Python, you can pass **one class’s object or its data** to another class using:

1. **Instance Methods**
2. **Class Methods**
3. **Static Methods**

---

### 🧩 2.1 Using Instance Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def Details(self):
        print(f'Name is {self.name}')
        print(f'Age is {self.age}')

class Staff:
    def modify(self, x):  # x is object reference
        x.age = 31  # modifies Student object’s age

s1 = Student("Ram", 30)
s1.Details()

s2 = Staff()
s2.modify(s1)  # passing Student object to Staff instance method
s1.Details()
```

🧾 **Output:**
```
Name is Ram
Age is 30
Name is Ram
Age is 31
```

---

### ✅ Example — Passing Only One Attribute (Value)

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Staff:
    def modify(self, x):
        print(f"Modified Age: {x}")

s1 = Student("Ram", 30)
staff1 = Staff()
staff1.modify(s1.age)
```

🧾 **Output:**
```
Modified Age: 30
```

---

### 🧩 2.2 Using Class Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def Details(self):
        print(f'Name is {self.name}')
        print(f'Age is {self.age}')

class Staff:
    @classmethod
    def modify_student(cls, student_obj):
        student_obj.age = 31
        print("Student age modified by class method in Staff")

s1 = Student("Ram", 30)
s1.Details()

Staff.modify_student(s1)  # pass object directly to class method
s1.Details()
```

🧾 **Output:**
```
Name is Ram
Age is 30
Student age modified by class method in Staff
Name is Ram
Age is 31
```

---

### ✅ Example — Passing Only One Attribute via Class Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Staff:
    @classmethod
    def modify_age(cls, x):
        print(f"Modified Age: {x}")

s1 = Student("Ram", 30)
Staff.modify_age(s1.age)
```

🧾 **Output:**
```
Modified Age: 30
```

---

### 🧩 2.3 Using Static Method

Static methods are used when neither the instance nor the class itself is needed.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
    def Details(self):
        print(f'Name is {self.name}')
        print(f'Age is {self.age}')

class Staff:
    @staticmethod
    def modify(x):
        x.age = 31  # modifies passed Student object
        print("Modified using static method")

s1 = Student("Ram", 30)
s1.Details()

Staff.modify(s1)  # passing Student object to static method
s1.Details()
```

🧾 **Output:**
```
Name is Ram
Age is 30
Modified using static method
Name is Ram
Age is 31
```

---

### ✅ Example — Passing Only One Attribute to Static Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Staff:
    @staticmethod
    def modify_age(x):
        print(x)

s1 = Student("Ram", 30)
Staff.modify_age(s1.age)
```

🧾 **Output:**
```
30
```

---

## 🧠 Summary Table

| Method Type | Decorator | Parameter | Use Case | How to Call | Example Use |
|--------------|------------|------------|-----------|--------------|--------------|
| **Instance Method** | None | `self` | Pass one object to another | Through object | `obj.method()` |
| **Class Method** | `@classmethod` | `cls` | Pass or modify shared data | Class or object | `Class.method()` |
| **Static Method** | `@staticmethod` | None | Utility or helper logic | Class or object | `Class.method()` |

---

## 🧩 Real-World Example

```python
class Engine:
    def start(self):
        print("Engine started")

class Car:
    def __init__(self, name):
        self.name = name
        self.engine = Engine()  # creating Engine inside Car

    def drive(self):
        print(f"Driving {self.name}")
        self.engine.start()  # calling method of another class

my_car = Car("Tesla")
my_car.drive()
```

🧾 **Output:**
```
Driving Tesla
Engine started
```

---

✨ *“Inner classes encapsulate logic, while class-to-class communication builds collaboration.”* 🧠🐍
