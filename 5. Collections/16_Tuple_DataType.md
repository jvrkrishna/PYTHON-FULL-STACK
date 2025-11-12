# 🍇 Python Tuple

---

## 🔹 Definition

A **tuple** in Python is similar to a list, but the key difference is:  
> **Tuples are immutable** — once created, their elements **cannot be changed**, unlike lists.

✅ Tuples are **ordered**, **indexed**, and can store **multiple data types**.  
✅ Tuples are represented using **parentheses `( )`**.  

---

## 🧱 1. Creation of Tuples

```python
T1 = ()                    # Empty tuple
T2 = (20,)                 # Single element tuple → comma is mandatory
T3 = ("John", 102, 'USA', 10, "20")
T4 = (1, 2, 3, 4, 5, 6)
T5 = tuple((1, "Ram"))     # Using tuple() constructor
print(type(T1))
print(type(T2))
print(type(T3))
print(type(T4))
print(type(T5))
```

---

### 🔹 Tuple Creation Dynamically (using `eval()`)

```python
T6 = eval(input("Enter tuple elements: "))  # Example: (10, 20, 30)
print(type(T6))
print(T6)
```

🧠 **Output:**
```
Enter tuple elements: (10, 20, 30)
<class 'tuple'>
(10, 20, 30)
```

---

### 🔹 Using `range()` Function

```python
T7 = tuple(range(0, 11))
print(type(T7))
print(T7)
```

🧠 Output:
```
<class 'tuple'>
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
```

---

### 🔹 Tuple with Complex Data Types

```python
T8 = (40, {"name": "Ram"}, tuple((10, 20, 30)))
T9 = 40, {"name": "Ram"}, "Raj", 50  # Tuple without parentheses also valid
print(type(T8))
print(T8)
```

---

### 🔹 Creating Tuple from String

```python
a = "Welcome to Python world"
T1 = tuple(a)
print(type(T1))
print(T1)
```

🧠 Output:
```
<class 'tuple'>
('W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'P', ...)
```

---

## 🧭 2. Accessing Tuple Elements

```python
my_tuple = ('p', 'e', 'r', 'm', 'i', 't')
print(my_tuple[0])   # 'p'
print(my_tuple[5])   # 't'
```

### 🔹 Accessing Nested Tuples

```python
n_tuple = ("mouse", [8, 4, 6], (1, 2, 3))
print(n_tuple[0][3])   # 's'
print(n_tuple[1][1])   # 4
```

### 🔹 Accessing with Negative Index

```python
my_tuple = ('p', 'e', 'r', 'm', 'i', 't')
print(my_tuple[-1])   # 't'
print(my_tuple[-6])   # 'p'
```

### 🔹 Access using Slicing

```python
print(my_tuple[:])        # Entire tuple
print(my_tuple[1:4])      # ('e', 'r', 'm')
print(my_tuple[::2])      # Skipping elements
```

---

## 🛠️ 3. Modifying Tuples

Tuples are **immutable**, meaning you cannot change or reassign elements directly.

```python
my_tuple = (4, 2, 3, [6, 5])
my_tuple[3][0] = 9   # Allowed: list element inside tuple can change
print(my_tuple)      # (4, 2, 3, [9, 5])

# my_tuple[2] = 4 → ❌ TypeError (Cannot change tuple element)
```

---

### 🔹 Convert Tuple → List → Tuple (for Modification)

```python
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
x = tuple(y)
print(x)
```

---

### 🔹 Add New Elements to Tuple (via Conversion)

```python
thistuple = ("apple", "banana", "cherry")
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)
print(thistuple)
```

---

## ➕ 4. Tuple Operations

| Operation | Symbol | Description |
|------------|---------|-------------|
| Concatenation | `+` | Combines tuples |
| Repetition | `*` | Repeats tuple elements |

```python
print((1, 2, 3) + (4, 5, 6))     # (1, 2, 3, 4, 5, 6)
print(("Repeat",) * 3)           # ('Repeat', 'Repeat', 'Repeat')
```

---

## 🔁 5. Traversing Tuples

### 🔹 Using `for` loop
```python
t = (10, 20, 30, 40, 50)
for i in t:
    print(i)
```

### 🔹 Using `while` loop
```python
t = (10, 20, 30, 40, 50)
i = 0
while i < len(t):
    print(t[i])
    i += 1
```

---

## ❌ 6. Deleting Tuples

You cannot delete a single element, but you can delete the entire tuple.

```python
my_tuple = ('p', 'r', 'o', 'g', 'r', 'a', 'm')
# del my_tuple[3] ❌ — TypeError: 'tuple' object doesn't support item deletion
del my_tuple
# print(my_tuple) ❌ — NameError: name 'my_tuple' is not defined
```

---

## 🧩 7. Tuple Built-in Methods

| Method | Description | Example |
|---------|--------------|----------|
| `tuple(seq)` | Converts sequence to tuple | `tuple([1,2,3])` |
| `len(t)` | Returns number of elements | `len((10,20,30))` |
| `max(t)` | Returns largest element | `max((10,50,30))` |
| `min(t)` | Returns smallest element | `min((10,50,30))` |

```python
t1 = (50, 60, 70, 80)
t2 = (50, 60, 76, 80)
print(t1 == t2)  # False
print(t1 < t2)   # True

seq = [50, 60, 70, 80]
result = tuple(seq)
print(result)
```

---

## 📦 8. Tuple Packing and Unpacking

### 🔹 Packing (Combining Values into Tuple)
```python
a = 10
b = 20
c = 30
d = 40
e = "ram"
pack = a, b, c, d, e
print(pack)
print(type(pack))
```

### 🔹 Unpacking (Extracting Values from Tuple)
```python
pack = ("Ram", 10, 20, 30, 40)
a, b, c, d, e = pack
print(a, b, c, d, e)
```

⚠️ Number of variables must match the number of tuple elements.

---

## 🚫 9. Comprehensions and Tuples

Tuples **do not support comprehensions** directly like lists or sets.  
However, you can use **generator expressions** instead:

```python
t = tuple(i for i in range(5))
print(t)
# Output: (0, 1, 2, 3, 4)
```

---

## 🧠 Summary Table

| Feature | Description | Example |
|----------|--------------|----------|
| **Mutable** | ❌ No | Can't modify elements |
| **Ordered** | ✅ Yes | Preserves insertion order |
| **Indexing** | ✅ Yes | Supports positive/negative index |
| **Duplicates** | ✅ Yes | Allows repeated values |
| **Creation** | Using `()` or `tuple()` | `(1,2,3)` or `tuple([1,2,3])` |
| **Iteration** | Using loops | `for i in tuple:` |
| **Methods** | Limited | `count()`, `index()`, `len()` |

---

✨ *“Tuples are lightweight, immutable, and perfect for fixed collections of data.”* 🐍
