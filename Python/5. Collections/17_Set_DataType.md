# 🌿 Python Set

---

## 🔹 Definition

A **set** in Python is a collection of **unordered, unique, and immutable elements**.  
The set itself is **mutable** (we can add or remove items),  
but its **elements must be immutable** (no lists or dicts allowed inside).

✅ No duplicate values  
✅ Unordered — does not preserve element order  
✅ Represented using **curly braces `{}`**

📘 **Syntax:**  
```python
my_set = {10, 20, 30}
```

---

## 🧱 1. Creation of Sets

### 🔸 Empty Set
```python
s = {}
print(s)
print(type(s))  # Creates a dictionary, not a set!

# Correct way to create an empty set
s = set()
print(s)
print(type(s))
```

---

### 🔸 With Multiple Elements
```python
s = {10, 20, (30, 40), 50}   # Tuple allowed, list/set/dict not allowed
print(s)
```

---

### 🔸 Heterogeneous Elements
```python
s = {30, "Ram", 65.4, True}
print(s)
```

---

### 🔸 From List
```python
l1 = [10, 20, 30, 40, 50]
s1 = set(l1)
print(s1)
```

---

### 🔸 From Range
```python
s = set(range(10))
print(s)
```

---

### 🔸 From String
```python
name = "Rama Krishna"
s = set(name)
print(s)
```

---

### 🔸 From Tuple
```python
t = (10, 20, 30, 40, 50)
s = set(t)
print(s)
```

---

### 🔸 Using `eval()` Function
```python
T6 = eval(input("Enter set elements: "))   # Example: {10, 20, 30}
print(type(T6))
print(T6)
```

---

## 🔍 2. Accessing Set Elements

Sets do **not support indexing or slicing** (unordered).

Use **membership operators**:
```python
s = {10, 20, 30, 40, 50}
print(30 in s)
print(60 not in s)
```

---

### 🔸 Iteration
```python
s = {10, 20, 30, 40, 50}
for i in s:
    print(i)
```

---

## 🔧 3. Updating (Adding Elements)

Sets are **mutable**, so we can add or remove elements.

### 🔹 `add()` — Add Single Element
```python
my_set = {1, 3}
my_set.add(2)
print(my_set)
```

---

### 🔹 `update()` — Add Multiple Elements
```python
my_set = {1, 3}
my_set.update([2, 3, 4])
print(my_set)

my_set.update([4, 5], {1, 6, 8}, (9, 10))
print(my_set)
```

---

### 🔹 Add from Different Iterables
```python
s = {10}
l = [20, 30]
t = (40, 50)
s.update(l, t)
print(s)
```

---

## ❌ 4. Deleting Elements

### 🔹 `remove()` — Removes Element (Error if Not Found)
```python
s = {10, 20, 30, 40, 50}
s.remove(30)
print(s)

# s.remove(80) → KeyError
```

---

### 🔹 `discard()` — Removes Element (No Error if Missing)
```python
s = {10, 20, 30, 40, 50}
s.discard(80)   # No error
print(s)
```

---

### 🔹 `pop()` — Removes Random Element
```python
s = {10, 20, 30, 40, 50}
removed = s.pop()
print("Removed:", removed)
print(s)
```

---

### 🔹 `clear()` — Remove All Elements
```python
s1 = {10, 20, 30, 40, 50}
s1.clear()
print(s1)
```

---

## 📋 5. Copying Sets

### 🔹 `copy()` — Creates a Shallow Copy
```python
s1 = {10, 20, 30, 40, 50}
s2 = s1.copy()
print(s1, s2)
print(id(s1), id(s2))
```

---

### 🔹 Assignment (Reference)
```python
s1 = {10, 20, 30, 40, 50}
s2 = s1
s1.add(80)
print(s1, s2)
```

⚠️ Both point to the same memory reference.

---

## 🔣 6. Set Operations

| Operation | Method | Operator | Description |
|------------|----------|------------|-------------|
| Union | `union()` | `|` | All elements from both sets |
| Intersection | `intersection()` | `&` | Common elements |
| Difference | `difference()` | `-` | Elements in first but not second |
| Symmetric Difference | `symmetric_difference()` | `^` | All except common ones |

### 🔸 Examples
```python
s1 = {10, 20, 30, 40}
s2 = {10, 50, 60}

print(s1.union(s2))              # {10, 20, 30, 40, 50, 60}
print(s1.intersection(s2))       # {10}
print(s1.difference(s2))         # {20, 30, 40}
print(s1.symmetric_difference(s2))  # {20, 30, 40, 50, 60}
```

---

## 🔗 7. Subset, Superset & Disjoint

```python
A = {1, 2, 3, 4, 5, 6, 7, 8}
B = {2, 3, 4}

print(B.issubset(A))   # True
print(A.issuperset(B)) # True

A = {1, 2, 3}
B = {4, 5}
print(A.isdisjoint(B)) # True
```

---

## ⚙️ 8. Set Comprehensions

If you want to create sets from iterable objects using short, efficient syntax.

### 🔸 Normal Example
```python
s = set()
for i in range(11):
    s.add(i)
print(s)
```

### 🔸 Using Set Comprehension
```python
s = {i for i in range(11)}
print(s)

s = {i*2 for i in range(11)}
print(s)

l = [10, 20, 30]
s = {i*i for i in l}
print(s)

# Divisible by 4
s = {i for i in range(20, 41) if i % 4 == 0}
print(s)
```

---

### 🔸 With Strings and Lists
```python
names = ["Rama", "Banti", "Chanti"]
s = {i for i in names}
print(s)

s = {i[0] for i in names}
print(s)

s = {i.upper() for i in names}
print(s)

names = ["Raj", "Rama", "Raghu"]
s = {i if i != 'Rama' else 'Ram' for i in names}
print(s)
```

---

## 🧊 9. Frozenset

A **frozenset** is an **immutable version of a set**.  
Once created, it **cannot be modified** (no add/remove operations).

```python
s = {10, 20, 30, 40}
fs = frozenset(s)
print(fs)
print(type(fs))
```

### ❌ Modification Not Allowed
```python
fs.add(26)     # Error
fs.remove(20)  # Error
```

---

## 🔗 10. Merging Sets

Unlike lists, sets cannot be concatenated with `+`.  
You can merge using unpacking `*`:

```python
s1 = {10, 20, 30, 40}
s2 = {50, "Rama"}
s3 = {*s1, *s2}
print(s3)
```

---

## 🧠 Summary Table

| Feature | Description |
|----------|-------------|
| **Mutable** | ✅ Set itself can change |
| **Elements Mutable?** | ❌ No |
| **Duplicates Allowed?** | ❌ No |
| **Ordered?** | ❌ No |
| **Indexing/Slicing** | ❌ Not supported |
| **Common Methods** | `add()`, `update()`, `remove()`, `discard()`, `pop()`, `clear()` |
| **Common Operators** | `|`, `&`, `-`, `^` |
| **Special Type** | `frozenset()` for immutable sets |

---

✨ *“Sets are perfect for uniqueness, mathematical operations, and fast lookups — but remember, they don’t care about order!”* 🧮🐍
