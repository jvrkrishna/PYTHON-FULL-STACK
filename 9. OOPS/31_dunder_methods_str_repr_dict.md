# ✨ Dunder (Magic) Methods in Python — `__str__`, `__repr__`, and `__dict__`

---

## 🔹 What are Dunder (Magic) Methods?

**Dunder methods** (short for *Double UNDERSCORE*) are special predefined methods in Python that start and end with **two underscores**, e.g. `__init__`, `__str__`, `__repr__`.

They allow developers to **customize the behavior of objects** for built-in operations like printing, comparison, addition, etc.

| Example | Purpose |
|----------|----------|
| `__init__()` | Constructor – initializes object data |
| `__str__()` | Returns a user-friendly string representation |
| `__repr__()` | Returns a developer-oriented detailed string |
| `__dict__` | Returns a dictionary of all attributes and values |

---

## 🧩 `__str__()` Method

The `__str__()` method is used to **represent an object as a readable string**.  
It is meant for **end-users** and controls what is displayed when `print()` is used.

> It makes the object output human-readable instead of the default memory address.

---

### 🧠 Example — Without `__str__()` Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        
s1 = Student("Ram", 30)
print(s1)
```

🧾 **Output:**
```
<__main__.Student object at 0x0000021478455DF0>
```

⚠️ This is not user-friendly — it shows only the memory address.

---

### ✅ Example — With `__str__()` Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"My name is {self.name} and my age is {self.age}"

s1 = Student("Ram", 30)
print(s1)
```

🧾 **Output:**
```
My name is Ram and my age is 30
```

---

## 🧩 `__repr__()` Method

The `__repr__()` method is another special method used to provide a **developer-oriented** string representation of an object.  
It’s mainly used for **debugging and inspection**.

> While `__str__` is for users, `__repr__` is for developers.

---

### 🧠 Example — With `__repr__()` Method

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __repr__(self):
        return f"My name is {self.name} and my age is {self.age}"

s1 = Student("Ram", 30)
print(s1)
```

🧾 **Output:**
```
My name is Ram and my age is 30
```

---

## ⚖️ Difference Between `__str__` and `__repr__`

| Aspect | `__str__()` | `__repr__()` |
|---------|--------------|--------------|
| **Purpose** | User-friendly output (end-users) | Developer-friendly detailed output |
| **Used by** | `print()` and `str()` | `repr()` and interactive shell |
| **Fallback** | If not defined, Python uses `__repr__()` | Never falls back to `__str__()` |
| **Audience** | End-users | Developers (debugging) |

---

### 🧠 Example — When Both Are Present

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __repr__(self):
        print("__repr__ method executes")
        return f"My name is {self.name} and my age is {self.age}"
    
    def __str__(self):
        print("__str__ method executes")
        return f"My name is {self.name} and my age is {self.age}"

s1 = Student("Ram", 30)
print(s1)
```

🧾 **Output:**
```
__str__ method executes
My name is Ram and my age is 30
```

✅ **Explanation:**  
When both are defined, **Python uses `__str__()`** by default when printing.

If `__str__()` is not present, Python falls back to `__repr__()`.

---

## 🧩 Example — Inspecting Objects (Using `__repr__`)

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __repr__(self):
        return f"My name is {self.name} and my age is {self.age}"
    
    def __str__(self):
        return f"My name is {self.name} and my age is {self.age}"

s1 = Student("Ram", 30)
s2 = Student("Gopal", 25)

print(s1)  # Uses __str__
print(s2)  # Uses __str__

StudentList = [Student("Ram", 30), Student("Gopal", 25)]
print(StudentList)  # Uses __repr__ for list elements
```

🧾 **Output:**
```
My name is Ram and my age is 30
My name is Gopal and my age is 25
[My name is Ram and my age is 30, My name is Gopal and my age is 25]
```

✅ When printing a **list of objects**, Python automatically calls the **`__repr__()`** method on each item to generate a detailed string.

---

## 🧩 `__dict__` Attribute

The `__dict__` attribute is a **special built-in dictionary** that stores an object’s **attributes and their values**.

It’s useful for debugging, reflection, and serialization.

---

### 🔹 1. Instance `__dict__`

For an **instance**, it contains all **instance variables** and their corresponding values.

```python
class MyClass:
    def __init__(self, name, age):
        self.name = name
        self.age = age

obj = MyClass("Alice", 30)
print(obj.__dict__)
```

🧾 **Output:**
```
{'name': 'Alice', 'age': 30}
```

✅ **Explanation:**
- Keys → Attribute names  
- Values → Corresponding data stored in the object

---

### 🔹 2. Class `__dict__`

For a **class**, it stores **class-level variables, methods, and metadata**.

```python
class MyClass:
    class_var = "I am a class variable"
    
    def method(self):
        print("This is a method.")

print(MyClass.__dict__)
```

🧾 **Output (example):**
```
{
 '__module__': '__main__',
 'class_var': 'I am a class variable',
 'method': <function MyClass.method at 0x7ffb046f2>,
 '__dict__': <attribute '__dict__' of 'MyClass' objects>,
 '__weakref__': <attribute '__weakref__' of 'MyClass' objects>,
 '__doc__': None
}
```

✅ **Explanation:**
- `__module__`: Module name where the class is defined  
- `class_var`: Class variable  
- `method`: Reference to the function object  
- `__dict__`: Holds instance attributes dynamically  
- `__doc__`: Docstring (if defined)

---

✨ *“Magic methods make objects smarter — they define how your class behaves with Python’s built-in features.”* 🧠🐍
