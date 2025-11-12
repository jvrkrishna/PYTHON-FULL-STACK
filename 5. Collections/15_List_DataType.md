# 🟦 Python Lists

## 🔹 Definition
A **list** is an ordered, mutable collection of elements.  
Lists are created using square brackets `[]` and can contain items of different data types (numbers, strings, other collections, objects, etc.).

---

## 1. Creation

```python
# Empty list
L1 = []

# Literal creation
L2 = ["John", 102, "USA", 10, "20"]

# Using the list() constructor
L3 = list([1, "Ram"])

# Using range()
L4 = list(range(0, 11))  # [0,1,2,...,10]

# List can hold complex types
L5 = [40, {"name": "Ram"}, list((10, 20, 30))]
```
---

## 2. Accessing Elements & Slicing

```python
lst = [1, 2, 3, 4, 5, 6, 7]

# Indexing (0-based)
print(lst[0])   # 1
print(lst[3])   # 4
print(lst[-1])  # last element -> 7

# Slicing
print(lst[0:6])   # elements 0..5
print(lst[:])      # full copy
print(lst[2:5])    # elements 2..4
print(lst[1:6:2])  # step slicing: indices 1,3,5
print(lst[-3:])    # last 3 elements
print(lst[:-1])    # all except last
print(lst[-3:-1])  # slice from -3 up to -2
```

---

## 3. Iterating / Traversing a List

```python
names = ["John", "David", "James", "Jonathan"]

# For-each style
for name in names:
    print(name)

# Using index via range()
for i in range(len(names)):
    print(names[i])

# While loop traversal
i = 0
while i < len(names):
    print(names[i])
    i += 1
```

### Print element with positive & negative index
```python
lst = [10, 20, 30]
n = len(lst)
for i in range(n):
    print(f"{lst[i]} is present at index {i}/{i-n}")
```

---

## 4. Access a specific index when iterating

```python
lst = [30, 40, 50, "Ram", 1, "Gopal", 80]
for i in range(len(lst)):
    if i == 2:
        print(lst[i])   # prints element at index 2
```

---

## 5. Updating Lists

```python
L = [1, 2, 3, 4, 10, 20, 30]

# Single element assignment
L[2] = 30       # replace index 2
L[2:4] = [30, 40]  # slice assignment (replace slice)
```

### Insert elements using `insert()`
```python
L = [1, 2, 3, 4, 10, 20, 30]
L.insert(3, 24)      # insert 24 at index 3
L.insert(100, 84)    # index > len -> appends at end
L.insert(-100, 88)   # index <-len treated as start

# Insert multiple elements at an index:
# use slice assignment or extend with a slice
L[3:3] = [100, 200]  # inserts before index 3
```

---

## 6. Common List Methods

```python
lst = [1, 2, 3]

# append - adds one element at the end
lst.append(4)  # [1,2,3,4]

# extend - merges another iterable
lst.extend([5, 6])  # [1,2,3,4,5,6]

# pop - remove and return by index (default last)
last = lst.pop()    # last element
third = lst.pop(2)  # element at index 2

# remove - remove by value (first occurrence)
lst.remove(2)

# index - returns index of first occurrence
idx = lst.index(3)

# count - number of occurrences
cnt = lst.count(10)

# clear - empties the list
lst.clear()

# copy - shallow copy of the list
l_copy = lst.copy()

# sort - in-place sort
lst = [8, 2, 3, 5, 8, 9]
lst.sort()               # ascending
lst.sort(reverse=True)   # descending

# reverse - in-place reverse
lst.reverse()

# sum, len, min, max
total = sum([1, 2, 3])
length = len(lst)
minimum = min([10, 30, 4])
maximum = max([10, 30, 4])
```

**Notes:**
- `append([4])` will add a sublist `[4]`. Use `extend()` to add elements from an iterable.
- `sort()` and `reverse()` modify the list in place and return `None`.

---

## 7. Counting / Finding All Indices of a Value

```python
lst = [10, 20, 30, 40, 50, 10, 20, 30, 40]

# Using while
i = 0
count = 0
search = 10
while i < len(lst):
    if lst[i] == search:
        print(f"The value {search} is present at index {i}")
        count += 1
    i += 1
print(f"{search} is present {count} times")

# Using for to collect all indices
indices = []
for i in range(len(lst)):
    if lst[i] == search:
        indices.append(i)
print(f"All indices of {search}: {indices}")
```

---

## 8. Creating Lists Dynamically

```python
# Build a list with n integers from user (safe approach)
n = int(input("Enter the number of elements: "))
lst = []
for k in range(n):
    ele = int(input(f"Enter element {k}: "))
    lst.append(ele)
print(lst)

# Create a list of 20 zeros
zeros = [0] * 20
```

---

## 9. Concatenation & Repetition

```python
L1 = [20, 30, 40]
S1 = ['Ram', 'Priyanka', 40]
C1 = L1 + S1         # concatenation
Rep = L1 * 5         # repetition
```

---

## 10. Searching with `in`

```python
L1 = [10, 20, 30, 40, 50, 60]
choice = int(input("Enter your Lucky Number: "))
while True:
    if choice in L1:
        print("Yes, your number is present")
        break
    else:
        print("The number is not present")
        choice = int(input("Enter your Lucky Number: "))
```

---

## 11. Reversing a List (manual & built-in)

```python
# Manual reverse using while (index based)
lst = [10, 20, 40, 50, 60]
n = len(lst) - 1
while n >= 0:
    print(lst[n])
    n -= 1

# Using sort(reverse=True)
lst.sort(reverse=True)
for i in lst:
    print(i)
```

---

## 12. Sorting without built-in (simple bubble-like approach)

```python
lst = [50, 30, 10, 40, 20]
for i in range(len(lst)):
    for j in range(i + 1, len(lst)):
        if lst[i] > lst[j]:
            lst[i], lst[j] = lst[j], lst[i]
    # optional: print intermediate step to show progress
print("Final List is:", lst)
```

---

## 13. Finding Min / Max manually

```python
lst = [10, 30, 4, 50, 35, 60]
min_val = lst[0]
for i in lst:
    if i < min_val:
        min_val = i
print("Min is:", min_val)
```

---

## 14. Nested Lists (Lists inside Lists) — Matrix style

```python
l = [10, 20, 30, 40, [41, 42, 43], 50, 60]
print(l[2])     # 30
print(l[4][1])  # 42

# Matrix example
m = [[10,20,30],[40,50,60],[70,80,90]]
print(m[0])      # row 0
print(m[0][2])   # element at row 0, col 2
for row in m:
    print(row)
```

---

## 15. `enumerate()` — index & value in one go

```python
x = ('apple', 'banana', 'cherry')
print(list(enumerate(x)))   # [(0,'apple'), (1,'banana'), (2,'cherry')]

# Common usage in loops
l1 = [10,20,30,40]
for idx, val in enumerate(l1):
    print(idx, val)
```

---

## 16. List Comprehensions (concise list creation)

```python
# Equivalent of building list via loop
l = [i for i in range(11)]          # [0..10]
l2 = [i*2 for i in range(11)]       # double each
squares = [i*i for i in range(11)]  # squares
evens = [i for i in range(1,21) if i % 2 == 0]

names = ["rama", "banti", "chanti"]
first_two = [n[:2] for n in names]            # ['ra', 'ba', 'ch']
with_a = [n for n in names if 'a' in n]       # names containing 'a'
replace_banti = [n if n != "banti" else "hello" for n in names]

# From tuple to list
t = (10, 20, 30, 40)
l_from_t = [i for i in t]

# Matrix using list comprehension
m = [[j for j in range(3)] for i in range(3)]
```

---

## 17. Practical small examples (patterns using lists)

- Create a matrix, slice rows, or flatten nested lists using nested loops or comprehensions.  
- Combine two lists using nested loops to produce greetings or pairings.

```python
l1 = {"Hi ", "Hello "}
l2 = {"Ram", "Banti", "Seetha"}
new_list = []
for i in l1:
    for j in l2:
        new_list.append(i + j)
# new_list contains combined strings
```
---

# 🧩 Python `eval()` Function

---

## 🔹 Definition

The **`eval()`** function in Python evaluates (executes) a string expression as a valid **Python expression** and returns the **result**.

In simple terms:  
> `eval()` takes a string containing Python code and executes it dynamically at runtime.

---

## 🔹 Syntax

```python
eval(expression, globals=None, locals=None)
```

| Parameter | Description |
|------------|-------------|
| `expression` | The string expression to be evaluated |
| `globals` *(optional)* | A dictionary defining the global namespace |
| `locals` *(optional)* | A dictionary defining the local namespace |

**Returns:**  
The result of evaluating the given expression.

---

## 🔹 Purpose of `eval()`

✅ To dynamically evaluate Python expressions  
✅ To convert string input into actual data types (like list, dict, etc.)  
✅ To perform runtime computation  
✅ To simplify interactive programs or testing  

---

## 🔹 Basic Examples

```python
x = 5
print(eval('x + 10'))       # 15

print(eval('10 + 20 * 3'))  # 70

print(eval('len([10, 20, 30])'))  # 3
```

---

## 🔹 Using `eval()` with `input()`

By default, `input()` returns a **string**.  
But `eval(input())` can convert it into the **correct Python object** (list, dict, etc.).

```python
# Without eval()
a = input("Enter data: ")  # Enter: [10, 20, 30]
print(a)                   # "[10, 20, 30]"
print(type(a))             # <class 'str'>

# With eval()
b = eval(input("Enter data: "))  # Enter: [10, 20, 30]
print(b)                         # [10, 20, 30]
print(type(b))                   # <class 'list'>
```

✅ Automatically detects the correct type  
⚠️ Requires proper Python syntax in input  

---

## 🔹 When to Use

You can use `eval()` when you need to:
- Read dynamic data structures from input  
- Evaluate mathematical expressions from strings  
- Quickly parse list/tuple/set/dict entered by users  

---

## 🔹 Difference Between `input()` and `eval(input())`

| Feature | `input()` | `eval(input())` |
|----------|------------|----------------|
| Type Returned | Always string | Depends on input |
| Example Input | `[10, 20, 30]` | `[10, 20, 30]` |
| Example Output | `"[10, 20, 30]"` *(string)* | `[10, 20, 30]` *(list)* |
| Use Case | Text input | Dynamic evaluation |
| Safety | Safe | Risky (can execute arbitrary code) |

---

## 🔒 Important Security Warning

⚠️ **`eval()` executes any code passed into it**, even malicious ones.

```python
eval("__import__('os').system('del C:\\Windows')")  # ⚠️ Dangerous!
```

Never use `eval()` on **untrusted input**, like:
- User input in production
- Files or APIs
- Web input

---

## 🔹 Safe Alternative — `ast.literal_eval()`

If you only need to convert text into a Python object (not execute code),  
use `ast.literal_eval()` — it’s much safer.

```python
import ast

data = ast.literal_eval(input("Enter data: "))  # Example: [1, 2, 3]
print(data)
print(type(data))
```

✅ Only accepts Python literals (lists, dicts, tuples, numbers, strings)  
❌ Does not execute arbitrary code  

---

## 🔹 Evaluating Mathematical Expressions

```python
expr = input("Enter an expression: ")  # 5 * 10 + 20
result = eval(expr)
print("Result =", result)
```

🧠 **Output:**
```
Result = 70
```

---

## 🔹 Using `eval()` with Python Collections

`eval()` is especially useful to create **lists, tuples, sets, and dictionaries** dynamically from user input.

---

### 🔸 1️⃣ Using `eval()` for Lists

```python
L1 = eval(input("Enter a list: "))  # [10, 20, 30, 40]
print("List:", L1)
print("Type:", type(L1))
```

🧠 **Output:**
```
Enter a list: [10, 20, 30, 40]
List: [10, 20, 30, 40]
Type: <class 'list'>
```

✅ Input must be enclosed in square brackets `[ ]`.  
⚠️ Without brackets, it will throw an error.

---

### 🔸 2️⃣ Using `eval()` for Tuples

```python
T1 = eval(input("Enter a tuple: "))  # (10, 20, 30)
print("Tuple:", T1)
print("Type:", type(T1))
```

🧠 **Output:**
```
Enter a tuple: (10, 20, 30)
Tuple: (10, 20, 30)
Type: <class 'tuple'>
```

⚠️ For single-element tuples, use a trailing comma `(10,)`.

---

### 🔸 3️⃣ Using `eval()` for Sets

```python
S1 = eval(input("Enter a set: "))  # {10, 20, 30}
print("Set:", S1)
print("Type:", type(S1))
```

🧠 **Output:**
```
Enter a set: {10, 20, 30}
Set: {10, 20, 30}
Type: <class 'set'>
```

✅ Curly braces `{}` are required.  
⚠️ Empty `{}` creates a dictionary — for an empty set, use `set()`.

---

### 🔸 4️⃣ Using `eval()` for Dictionaries

```python
D1 = eval(input("Enter a dictionary: "))  # {'name': 'Rama', 'age': 25}
print("Dictionary:", D1)
print("Type:", type(D1))
```

🧠 **Output:**
```
Enter a dictionary: {'name': 'Rama', 'age': 25}
Dictionary: {'name': 'Rama', 'age': 25}
Type: <class 'dict'>
```

✅ Keys must be unique and enclosed in quotes if strings.  
✅ Input must follow proper dictionary syntax `{key: value}`.

---

## 🔹 Example — All Collections Together

```python
L = eval(input("Enter a list: "))        # [10, 20, 30]
T = eval(input("Enter a tuple: "))       # (10, 20, 30)
S = eval(input("Enter a set: "))         # {10, 20, 30}
D = eval(input("Enter a dictionary: "))  # {'a': 10, 'b': 20}

print("\nYou entered:")
print("List:", L, "| Type:", type(L))
print("Tuple:", T, "| Type:", type(T))
print("Set:", S, "| Type:", type(S))
print("Dict:", D, "| Type:", type(D))
```

🧠 **Output Example:**
```
Enter a list: [10, 20, 30]
Enter a tuple: (10, 20, 30)
Enter a set: {10, 20, 30}
Enter a dictionary: {'a': 10, 'b': 20}

You entered:
List: [10, 20, 30] | Type: <class 'list'>
Tuple: (10, 20, 30) | Type: <class 'tuple'>
Set: {10, 20, 30} | Type: <class 'set'>
Dict: {'a': 10, 'b': 20} | Type: <class 'dict'>
```

---

## 🔹 Comparison Table — `eval()` with Collections

| Collection | Example Input | Example Output | Type |
|-------------|----------------|----------------|------|
| List | `[10, 20, 30]` | `[10, 20, 30]` | `<class 'list'>` |
| Tuple | `(10, 20, 30)` | `(10, 20, 30)` | `<class 'tuple'>` |
| Set | `{10, 20, 30}` | `{10, 20, 30}` | `<class 'set'>` |
| Dictionary | `{'a': 10, 'b': 20}` | `{'a': 10, 'b': 20}` | `<class 'dict'>` |

---

✨ *“`eval()` is powerful — it can turn text into live Python objects. But with great power comes great responsibility — use it carefully!”* 🧠🐍
