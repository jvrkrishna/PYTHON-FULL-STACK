# ⚙️ Python Functions — Parameters, Arguments, Call Types & Return Statement

---

## 🔹 Parameters vs Arguments

| Term | Description | When Used |
|------|--------------|------------|
| **Parameter** | A variable defined **inside the function definition** — acts as a placeholder | Function definition |
| **Argument** | The actual value passed to the function when it is called | Function call |

### Example:
```python
def add(a, b):     # a, b → parameters (formal arguments)
    print(a + b)

add(10, 20)        # 10, 20 → arguments (actual arguments)
```

---

## 🧠 Understanding Call by Value vs Call by Reference (Python Perspective)

Python **does not** strictly use *call by value* or *call by reference* as in C/C++.  
Instead, it uses **"Call by Object Reference"** (also known as **Call by Sharing**).

---

### 🔸 Call by Value (Immutable Types)

When passing **immutable objects** (like `int`, `float`, `str`, `tuple`),  
Python behaves *like* call by value — changes inside the function **don’t affect** the original variable.

```python
def change_value(x):
    x = x + 5
    print("Inside function:", x)

a = 10
change_value(a)
print("Outside function:", a)
```

🧾 **Output:**
```
Inside function: 15
Outside function: 10
```

✅ **Why?**
- `int` is **immutable**
- `x = x + 5` creates a new integer object, doesn’t modify `a`

---

### 🔸 Call by Reference (Mutable Types)

When passing **mutable objects** (like `list`, `dict`, `set`),  
Python behaves *like* call by reference — changes inside the function **affect** the original object.

```python
def modify_list(x):
    x.append(100)
    print("Inside function:", x)

a = [1, 2, 3]
modify_list(a)
print("Outside function:", a)
```

🧾 **Output:**
```
Inside function: [1, 2, 3, 100]
Outside function: [1, 2, 3, 100]
```

✅ **Why?**
- `list` is **mutable**
- Both `x` and `a` point to the same object in memory.

---

### 🔄 Python’s Actual Behavior

> Python uses **Call by Object Reference (Call by Sharing)**

📘 The reference to the object is passed, not the object itself.  
Whether the original object changes depends on whether it is mutable.

---

### 🔹 Summary Table

| Data Type | Mutability | Behavior | Affects Original? | Example |
|------------|-------------|-----------|--------------------|----------|
| `int`, `str`, `tuple` | Immutable | Like Call by Value | ❌ No | `x = 10` |
| `list`, `dict`, `set` | Mutable | Like Call by Reference | ✅ Yes | `[1, 2, 3]` |

---

## 🔹 return vs print

| Concept | Description |
|----------|--------------|
| **print()** | Displays output to console. Used for showing results. |
| **return** | Sends a value back to the caller. Ends function execution. |
| **Default return** | Every function returns `None` if there’s no explicit return. |

---

### Example 1 — Default Return (`None`)
```python
def add(a):
    print(a)

print(add(10))
```

🧾 **Output:**
```
10
None
```

✅ Explanation:
`add()` prints 10 but doesn’t return anything, so Python returns `None` by default.

---

### Example 2 — Function with `return`
```python
def add(a):
    print(a)
    return a - 5

print(add(10))
```

🧾 **Output:**
```
10
5
```

---

### Example 3 — Returning Collections
```python
def add():
    numbers = [10, 20, 30]
    return numbers

print(add())
```
🧾 **Output:**
```
[10, 20, 30]
```

---

### Example 4 — print() vs return
```python
def sample():
    print("Hello")

print(sample())
```

🧾 **Output:**
```
Hello
None
```

✅ `print()` just outputs text; `sample()` has no return → `None`

---

### Example 5 — Adding `return`
```python
def sample():
    print("Hello")
    return 10

print(sample())
```

🧾 **Output:**
```
Hello
10
```

✅ Here `return` replaces the default `None`.

---

### ⚠️ Note:
- `return` **ends** the function immediately.
- Statements after `return` **won’t execute**.

---

## 🔹 Multiple Return Values

In Python, a function can return **multiple values** as a tuple.

```python
def sample(a, b, c):
    return a, b, c

print(sample(10, 20, 30))
```

🧾 **Output:**
```
(10, 20, 30)
```

✅ You can also unpack them:
```python
x, y, z = sample(10, 20, 30)
print(x, y, z)
```

---

## 🧠 Summary Table

| Concept | Description | Example |
|----------|--------------|----------|
| **Parameter** | Variable inside function | `def add(a, b):` |
| **Argument** | Value passed during call | `add(10, 20)` |
| **Call by Value** | Works for immutable objects | `int`, `str`, `tuple` |
| **Call by Reference** | Works for mutable objects | `list`, `dict`, `set` |
| **return** | Sends data back to caller | `return x + y` |
| **print()** | Displays output on screen | `print("Hello")` |
| **Multiple return** | Return multiple values | `return a, b, c` |

---

✨ *“Functions not only organize your logic — they control how data flows in and out of your program.”* 🧠🐍
