# 🔤 Python String
---

## 🔹 Definition

A **string** is a collection of **characters** enclosed within quotes.

✅ Strings can contain:  
- Letters (`A–Z`, `a–z`)  
- Digits (`0–9`)  
- Special symbols (`@, $, %, _`, etc.)

✅ Strings are **immutable** (cannot be changed after creation).  
✅ Represented using **quotes** — `' '`, `" "`, `''' '''`, or `""" """`.

---

## 🧱 1. Creation of Strings

```python
# Using single or double quotes
s1 = "Welcome to Python Programming"
print(s1)

# Using triple quotes (multi-line)
address = """          
#7-2,
Ramalay Street,
Vinukonda,
Guntur,
Andhra Pradesh
"""
print(address)

# Quotes inside quotes
s1 = "Welcome to 'Python' Programming"
s2 = 'Welcome to "Python" Programming'
print(s1)
print(s2)
```

---

## 📝 2. Docstrings

A **docstring** is a special string literal used to document a function, class, or module.  
They are written using triple quotes (`""" """` or `''' '''`).

```python
def sample():
    """ The above line gives s1 data """
    s1 = "hello world"
    return s1

print(sample.__doc__)   # prints docstring
print(sample())
```

You can also access built-in function docstrings:

```python
from random import randint
print(randint.__doc__)
```

---

## 🔍 3. Accessing String Elements

Strings are **sequences**, so we can access characters using:
1. **Indexing**
2. **Slicing**

---

### 🔹 Indexing

- Positive index → starts from **0**
- Negative index → starts from **-1** (right to left)

```python
s1 = "Welcome to Python"
print(s1[3])   # c
print(s1[7])   # o
print(s1[-1])  # n
```

---

### 🔹 Slicing

Extract a portion of the string.

📘 **Syntax:** `string[start:end:step]`

```python
s1 = "Welcome to Python"

print(s1[1:5])     # 'elco'
print(s1[0:10:2])  # 'Wloet'
print(s1[:])       # complete string
print(s1[::-1])    # reversed string
print(s1[-5:-1])   # 'ytho'
```

---

## ⚙️ 4. String Validation Methods

| Method | Description | Example |
|--------|--------------|----------|
| `startswith()` | Checks if string starts with substring | `"hello".startswith("he") → True` |
| `endswith()` | Checks if string ends with substring | `"hello".endswith("lo") → True` |
| `isalpha()` | True if all characters are alphabets | `"abc".isalpha()` |
| `isalnum()` | True if all characters are alphanumeric | `"abc123".isalnum()` |
| `isdigit()` | True if all characters are digits | `"123".isdigit()` |
| `islower()` | True if all alphabets are lowercase | `"ram".islower()` |
| `isupper()` | True if all alphabets are uppercase | `"RAM".isupper()` |
| `istitle()` | True if each word starts with uppercase | `"Hello World".istitle()` |
| `isspace()` | True if string contains only spaces | `"   ".isspace()` |

### 🔸 Examples
```python
s1 = "welcome to python"
print(s1.startswith("welcome"))   # True
print(s1.endswith("Python"))      # False
print(s1.isalpha())               # False (spaces exist)
print("Welcometopython".isalpha())# True
print("1hello".islower())         # True
print("HELLO".isupper())          # True
print("Hello World".istitle())    # True
```

---

## 🔠 5. Case Conversion Methods

| Method | Description | Example |
|--------|--------------|----------|
| `upper()` | Converts all letters to uppercase | `"ram".upper() → RAM` |
| `lower()` | Converts all letters to lowercase | `"RAM".lower() → ram` |
| `swapcase()` | Swaps case of each letter | `"Ram".swapcase() → rAM` |
| `title()` | Capitalizes each word | `"hello world".title() → Hello World` |
| `capitalize()` | Capitalizes first letter only | `"ram is good".capitalize() → Ram is good` |

### Example:
```python
s = "Welcome to python"
print(s.upper())
print(s.lower())
print(s.swapcase())
print(s.title())
print(s.capitalize())
```

---

## 🔢 6. Length & Count

```python
s1 = "Hello World"
print(len(s1))         # 11
print(s1.count('o'))   # 2
print(s1.count('o', 6))# 1 (from index 6 onwards)
```

---

## 🔄 7. Replace

```python
s1 = "Hello World"
b = s1.replace("World", "Rk")
print(s1)   # Hello World (unchanged)
print(b)    # Hello Rk
```

---

## ✂️ 8. Split & Join

### 🔹 `split()` — breaks string into list
```python
s1 = "Hello World"
print(s1.split())      # ['Hello', 'World']
print(s1.split('o'))   # ['Hell', ' W', 'rld']
```

### 🔹 `join()` — joins iterable with separator
```python
s1 = "Hello World"
print('*'.join(s1))               # H*e*l*l*o* *W*o*r*l*d

words = ["Hello", "World"]
print('*'.join(words))            # Hello*World

tuple_words = ("Hello", "World")
print('.'.join(tuple_words))      # Hello.World
```

---

## 🧹 9. Strip & Padding Methods

### 🔹 `strip()`, `lstrip()`, `rstrip()`
Removes whitespace from ends of a string.

```python
s1 = "  Rama  "
print(len(s1))          # 7
print(len(s1.strip()))  # 4
print(s1.strip())       # "Rama"
```

---

### 🔹 `zfill(width)`
Pads the string with zeros (0) on the left.

```python
s1 = "Rama"
print(s1.zfill(8))   # 0000Rama
```

---

### 🔹 `rjust()` and `ljust()`
Right or left justify the string in a field of given width.

```python
s1 = "Rama"
print(s1.rjust(8))          # "    Rama"
print(s1.rjust(8, "*"))     # "****Rama"
print(s1.ljust(8, "*"))     # "Rama****"
```

---

### 🔹 `center(width, fillchar)`
Centers string in given width, padded with optional fill character.

```python
s1 = "Rama"
print(s1.center(8))         # "  Rama  "
print(s1.center(12, "*"))   # "****Rama****"
```

---

## 🧮 10. Enumerate

`enumerate()` returns both the index and the character.

```python
s1 = "Rama"
for i in enumerate(s1):
    print(i)
```

🧠 Output:
```
(0, 'R')
(1, 'a')
(2, 'm')
(3, 'a')
```

---

## 🧠 Summary Table

| Concept | Description | Example |
|----------|--------------|----------|
| **Creation** | Using `' '`, `" "`, `''' '''`, `""" """` | `"Hello"` |
| **Immutability** | Strings can’t be changed in place | — |
| **Indexing** | Access by position | `"Ram"[0] → 'R'` |
| **Slicing** | Extract substring | `"Hello"[1:4] → 'ell'` |
| **Length** | `len()` | `len("Ram") → 3` |
| **Concatenation** | `+` or `f-string` | `"Hi " + "Ram"` |
| **Split/Join** | Convert between string & list | `"a b".split()`, `" ".join(list)` |
| **Replace** | Replace part of a string | `"Ram".replace("a", "o")` |
| **Validation** | `isalpha()`, `isdigit()` etc. | — |
| **Case Change** | `upper()`, `lower()`, `title()` | — |
| **Justify/Fill** | Align text | `rjust()`, `ljust()`, `center()` |

---

✨ *“Strings are the foundation of text processing — immutable, flexible, and powerful.”* 🐍💬
