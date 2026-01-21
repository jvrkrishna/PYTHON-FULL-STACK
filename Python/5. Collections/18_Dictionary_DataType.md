# 🗄️ Python Dictionary

---

## 🔹 Definition

A **dictionary** (`dict`) is a collection of **key → value** pairs.  
- Dictionaries are **unordered** (insertion-ordered since Python 3.7), **mutable**, and **indexed by keys**.  
- Keys must be **immutable** (strings, numbers, tuples with immutable items), and are **unique** within a dictionary.  
- Values can be any Python object (including lists, other dicts, etc.).

---

## 🔹 Creating Dictionaries

```python
# Empty dictionary
my_dict = {}           # or my_dict = dict()
print(my_dict)         # {}

# Adding key-value pair to empty dict
my_dict['name'] = "Rama"
print(my_dict)         # {'name': 'Rama'}

# Dictionary with integer keys
my_dict = {1: 'apple', 2: 'ball'}
print(my_dict)         # {1: 'apple', 2: 'ball'}
print(my_dict[1])      # 'apple'

# Dictionary with mixed keys
my_dict = {'name': 'John', 1: [2, 4, 3]}
print(my_dict['name']) # 'John'

# Using dict() constructor
my_dict = dict({1: 'apple', 2: 'ball'})
print(my_dict)

# From sequence of pairs
my_dict = dict([(1, "Apple"), (2, "Raju"), ("Name", "Ravi")])
print(my_dict)
```

**Important:** avoid using the name `dict` for your variables — it shadows Python's built-in `dict()`.

---

## 🔹 Create a Dictionary Dynamically (interactive)

```python
# Safe interactive creation (string keys)
res = {}
while True:
    key = input("Enter the Key (or press Enter to stop): ")
    if key == "":
        break
    value = input("Enter the value: ")
    res[key] = value
print(res)
```

---

## 🔹 Accessing Elements

```python
my_dict = {"name": "Rama", "age": 30}
print(my_dict["age"])        # 30

# Accessing a non-existing key → KeyError
# print(my_dict["address"])  # KeyError

# Safer access using get()
print(my_dict.get("address"))                     # None
print(my_dict.get("address", "Not found"))        # "Not found"

# Check if a key exists
print("age" in my_dict)   # True
```

### Iterating over a dictionary
```python
my_dict = {1: "Rama", 2: "Krishna"}
for key in my_dict:
    print(key, my_dict[key])   # prints key and value
```

---

## 🔹 Modifying & Adding Items

```python
my_dict = {1: "Rama", 2: "Krishna"}

# Modify by key
my_dict[1] = "Gopal"    # updates value for key 1

# Add new key
my_dict[3] = "Seetha"

print(my_dict)          # {1: 'Gopal', 2: 'Krishna', 3: 'Seetha'}
```

---

## 🔹 Deleting Items

```python
my_dict = {1: "Rama", 2: "Krishna"}

# Delete by key
del my_dict[1]
print(my_dict)          # {2: 'Krishna'}

# Delete entire dictionary variable
del my_dict
# print(my_dict)        # NameError: my_dict is not defined
```

Use `pop()` if you want to remove a key and get its value:

```python
d = {1: "ram", 2: "Seetha"}
val = d.pop(1)   # returns "ram"
print(val, d)    # "ram", {2: "Seetha"}
```

---

## 🔹 Common Dictionary Methods

```python
d = {1: "ram", 2: "Seetha"}

# items() → view of (key, value) pairs
print(d.items())    # dict_items([(1, 'ram'), (2, 'Seetha')])

# keys() → view of keys
print(d.keys())     # dict_keys([1, 2])

# values() → view of values
print(d.values())   # dict_values(['ram', 'Seetha'])
```

```python
# get(key, default)
print(d.get(3))                         # None
print(d.get(3, "Please check the key"))# "Please check the key"

# pop(key) already shown above
d = {1: "ram", 2: "Seetha"}
d.popitem()     # removes and returns last inserted (Python 3.7+)
```

```python
# setdefault(key, default)
d = {1: "ram", 2: "Seetha"}
print(d.setdefault(11, "Rama Krishna"))  # adds key 11 if missing
print(d.setdefault(2, "Harini"))         # returns existing value for 2
```

```python
# update() merges another dict (overwrites existing keys)
d1 = {1: "ram", 2: "Seetha"}
d2 = {2: "Raju", 4: "Harini"}
d1.update(d2)   # d1 becomes {1:'ram', 2:'Raju', 4:'Harini'}
```

```python
# copy() → shallow copy; assignment creates reference
d1 = {1: "Ram", 2: "Krishna"}
d2 = d1.copy()
d3 = d1          # d3 references same object as d1
```

```python
# clear()
d1.clear()       # {}
```

---

## 🔹 Creating from Keys — `fromkeys()`

```python
l = [10, 20, 30]
print(dict.fromkeys(l))                # {10: None, 20: None, 30: None}

r = range(5)
print(dict.fromkeys(r, "Hello"))       # {0: 'Hello', 1: 'Hello', ...}

# If you pass a mutable default value, the same object is used for all keys:
r = range(3)
l = ["Ram", "Banti", "Chanti"]
print(dict.fromkeys(r, l))   # {0: [...], 1: [...], 2: [...]}
# NOTE: careful with mutable defaults
```

---

## 🔹 Counting Occurrences (character frequency)

```python
s = "Rama"
d = {}
for ch in s:
    d[ch] = d.get(ch, 0) + 1
print(d)   # {'R':1, 'a':2, 'm':1}

# Pretty print counts
for k, v in d.items():
    print(f'{k} is present {v} times')
```

---

## 🔹 Interactive Example: Add & Search at Runtime

```python
# Build dictionary at runtime
d = {}
while True:
    key = input("Enter the Key (or press Enter to stop): ")
    if key == "":
        break
    value = input("Enter the Value: ")
    d[key] = value

# Search loop
while True:
    name = input("Enter the name to get the place (or press Enter to stop): ")
    if name == "":
        break
    place = d.get(name)
    if place is None:
        print(f"No entry found for {name}")
    else:
        print(f"Hi {name}, you are from {place}")
```

---

## 🔹 Dictionary Comprehensions

```python
# simple key -> value
d = {i: i for i in range(5)}         # {0:0, 1:1, ...}
d = {i: i*i for i in range(5)}       # {0:0, 1:1, 2:4, ...}

l = [10, 20, 30, 40]
d = {i: 3*i for i in l}              # {10:30, 20:60, ...}

names = ["Rama", "Krishna", "Gopal"]
d = {name: len(name) for name in names}  # {'Rama':4, ...}
```

---

## 🔹 Nested Dictionaries

```python
students = {
    1: {"name": "Rama Krishna", "place": "Kakinada"},
    2: {"name": "Rajaram", "place": "Rajahmundry"}
}

for sid, info in students.items():
    print("student id is:", sid)
    for key in info:
        print(f"{key} is: {info[key]}")
    print('-' * 20)
```

---

## 🔹 Merging Dictionaries (Python 3.5+ unpacking)

```python
d1 = {"Name": "Rama"}
d2 = {"Place": "Kakinada"}
d3 = {**d1, **d2}
print(d3)   # {'Name': 'Rama', 'Place': 'Kakinada'}
```

For repeated merging or updates, prefer `update()`.

---

## 🔹 Quick Reference Table

| Operation | Example |
|-----------|---------|
| Create | `d = {}` or `d = dict()` |
| Add / Update | `d[key] = value` |
| Access | `d[key]`, `d.get(key, default)` |
| Delete key | `del d[key]`, `d.pop(key)` |
| Iterate keys | `for k in d:` |
| Iterate items | `for k, v in d.items():` |
| Keys / Values | `d.keys()`, `d.values()`, `d.items()` |
| Merge | `d1.update(d2)` or `d3={**d1, **d2}` |
| Comprehension | `{k: v for k, v in iterable}` |

---

✨ *“Dictionaries map names to things — they are fundamental for structured data, configurations, and fast lookups.”* 🗝️🐍
