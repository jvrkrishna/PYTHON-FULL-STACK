# 🧠 Python Functional Programming — filter(), map(), reduce()

---

## 🔹 The `filter()` Function

### 📘 Definition:
The **`filter()`** function filters elements from an iterable (like list, tuple, set) based on a condition provided by a function.

> It only **keeps elements that return True** for the given test function.

---

### 🧩 Syntax:
```python
filter(function, sequence)
```

| Parameter | Description |
|------------|--------------|
| `function` | Tests each element to be True or False |
| `sequence` | The iterable (list, tuple, set, etc.) to filter |

---

### ⚙️ Note:
- Returns only elements that **evaluate to True**.
- Returns a **filter object** (which is iterable).

---

### ✅ Example 1 — Filter Age > 18
```python
ages = [10, 20, 30, 4, 5, 9]

def sample(x):
    if x > 18:
        return True
    else:
        return False

result = filter(sample, ages)
print(list(result))   # [20, 30]
```

OR using **lambda**:
```python
print(list(filter(lambda x: x > 18, ages)))
```

---

### ✅ Example 2 — Filtering Vowels
```python
sequence = ['g', 'e', 'e', 'j', 'k', 's', 'p', 'r']

def fun(i):
    vowels = ['a', 'e', 'i', 'o', 'u']
    return i in vowels

result = filter(fun, sequence)
print(list(result))
```

🧾 Output:
```
['e', 'e']
```

---

### ✅ Example 3 — Using Lambda
```python
sequence = ['g', 'e', 'e', 'j', 'i', 'o', 'p', 'r']
vowels = ['a', 'e', 'i', 'o', 'u']

result = filter(lambda i: i in vowels, sequence)
print(list(result))
```

🧾 Output:
```
['e', 'e', 'i', 'o']
```

---

### ✅ Example 4 — Filtering Dictionary Items
```python
d = {1: "Rama", 2: "Krishna", 3: "Gopal", 4: "Rambabu"}
print(list(filter(lambda i: i[0] % 2 == 0, d.items())))
```

🧾 Output:
```
[(2, 'Krishna'), (4, 'Rambabu')]
```

---

## 🔹 The `map()` Function

### 📘 Definition:
The **`map()`** function applies a given function to **each item** in an iterable (like list, tuple, etc.) and returns a new iterable (map object).

---

### 🧩 Syntax:
```python
map(function, iterable)
```

| Parameter | Description |
|------------|--------------|
| `function` | Function that performs operation on each item |
| `iterable` | Sequence (list, tuple, etc.) whose items are modified |

---

### ⚙️ Note:
- Returns a **map object** (an iterator).
- It **modifies** or **transforms** each element.

---

### ✅ Example 1 — Doubling Numbers
```python
ages = [10, 20, 30, 40, 50]

def function(n):
    return n + n

result = map(function, ages)
print(list(result))
```

🧾 Output:
```
[20, 40, 60, 80, 100]
```

---

### ✅ Example 2 — Using Lambda
```python
ages = [10, 20, 30, 40, 50]
print(list(map(lambda x: x + x, ages)))
```

🧾 Output:
```
[20, 40, 60, 80, 100]
```

---

### ✅ Example 3 — Merging Two Lists
```python
a = [10, 20, 30, 40, 50]
b = [1, 2, 3, 4, 5, 6]

print(list(map(lambda i, j: i + j, a, b)))
```

🧾 Output:
```
[11, 22, 33, 44, 55]
```

---

## 🔹 The `reduce()` Function

### 📘 Definition:
The **`reduce()`** function applies a function of **two arguments cumulatively** to all items in an iterable — reducing it to a **single value**.

> Unlike `map()` and `filter()`, `reduce()` is not built-in.  
> You must import it from the **`functools`** module.

---

### 🧩 Syntax:
```python
from functools import reduce
reduce(function, iterable)
```

| Parameter | Description |
|------------|--------------|
| `function` | Performs reduction (e.g., sum, max, etc.) |
| `iterable` | Sequence to reduce |

---

### ✅ Example 1 — Sum of All Elements
```python
from functools import reduce

seq = [10, 20, 30, 40]

def function(a, b):
    return a + b

result = reduce(function, seq)
print(result)
```

🧾 Output:
```
100
```

---

### ✅ Example 2 — Using Lambda
```python
from functools import reduce
result = reduce(lambda a, b: a + b, [2, 3, 4, 5])
print(result)
```

🧾 Output:
```
14
```

---

### ✅ Example 3 — Maximum Element
```python
from functools import reduce
result = reduce(lambda a, b: a if a > b else b, [2, 8, 4, 5])
print(result)
```

🧾 Output:
```
8
```

---

### ⚠️ Example — Reduce on Dictionary Items
```python
from functools import reduce
d = {1: "Rama", 2: "Krishna", 3: "Gopal", 4: "Rambabu"}
result = reduce(lambda a, b: a + b, d.items())
print(result)
```

🧾 Output:
```
(1, 'Rama', 2, 'Krishna', 3, 'Gopal', 4, 'Rambabu')
```
(Note: Depends on data type — works only if concatenation is supported.)

---

## 🔹 Difference Between `reduce()` and `accumulate()`

Both **reduce()** and **accumulate()** perform cumulative operations.  
However, they differ in output type:

| Function | Output | Module | Example Output |
|-----------|----------|----------|----------------|
| **reduce()** | Returns a **single value** | `functools` | `14` |
| **accumulate()** | Returns **all intermediate results** | `itertools` | `[2, 5, 9, 14]` |

---

### ✅ Example — Using `reduce()`
```python
from functools import reduce
result = reduce(lambda a, b: a + b, [2, 3, 4, 5])
print(result)
```

🧾 Output:
```
14
```

---

### ✅ Example — Using `accumulate()`
```python
from itertools import accumulate
result = list(accumulate([2, 3, 4, 5], lambda a, b: a + b))
print(result)
```

🧾 Output:
```
[2, 5, 9, 14]
```

---

✨ *“Functional programming in Python helps you write cleaner, more expressive code — all thanks to filter(), map(), and reduce().”* 🧠🐍
