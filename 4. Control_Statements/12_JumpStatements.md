# 🚀 Python Jump Statements — `break`, `continue`, `pass`, and `return`

## 🔹 Introduction

**Jump statements** are used to **control or alter** the normal flow of loops or program execution.  
They let you *exit early, skip iterations,* or *hold a place for future code*.

Python supports the following jump statements:

```text
+------------+--------------------------------------------------------+
| Statement  | Purpose                                                |
+------------+--------------------------------------------------------+
| break      | Immediately exits the current loop                    |
| continue   | Skips the rest of the current iteration and continues  |
| pass       | Acts as a placeholder — does nothing                   |
| return     | Exits from a function and optionally returns a value   |
+------------+--------------------------------------------------------+
```

---

## 🔹 1. The `break` Statement

🧠 **Purpose:**  
Used to **terminate** the loop when a specific condition is met.

### 📘 Example
```python
for i in "PYTHON":
    if i == "T":
        break     # stops the loop where 'T' appears
    print(i)
```

🧠 **Output:**
```
P
Y
```

➡️ The loop stops as soon as `i` becomes `"T"`.

---

## 🔹 2. The `continue` Statement

🧠 **Purpose:**  
Skips the rest of the statements inside the loop for the current iteration  
and moves to the **next** iteration.

### 📘 Example
```python
for i in "PYTHON":
    if i == "T":
        continue     # skip when 'T' occurs
    print(i)
```

🧠 **Output:**
```
P
Y
H
O
N
```

➡️ Here, `T` is skipped, but the loop continues printing the remaining letters.

---

## 🔹 3. The `pass` Statement

🧠 **Purpose:**  
The `pass` statement is a **null operation** — it does nothing.  
Used as a **placeholder** for code that’s not yet written.

### 📘 Example
```python
for letter in "python":
    if letter == "t":
        pass   # placeholder, does nothing
    print("This is pass block")
    print("Current Letter:", letter)
print("Good bye!")
```

🧠 **Output (partial view):**
```
This is pass block
Current Letter: p
This is pass block
Current Letter: y
This is pass block
Current Letter: t
This is pass block
Current Letter: h
...
Good bye!
```

➡️ Even though `pass` appears inside the condition,  
it doesn’t affect the flow — the loop executes normally.

---

## 🔹 4. The `return` Statement (for functions)

🧠 **Purpose:**  
Ends a function and optionally **returns a value** to the caller.

### 📘 Example
```python
def add(a, b):
    return a + b   # exits function after returning result

result = add(5, 3)
print("Sum:", result)
```

🧠 **Output:**
```
Sum: 8
```

---

## 🔹 5. Using `break`, `continue`, and `pass` Together
```python
for i in range(1, 10):
    if i == 3:
        continue    # skip 3
    elif i == 6:
        pass        # placeholder, does nothing
    elif i == 8:
        break       # stop at 8
    print(i)
```

🧠 **Output:**
```
1
2
4
5
6
7
```

---

## 🔹 Summary Table
```text
+------------+-------------------------------------------+--------------------------------+
| Statement  | Function                                  | Example Use Case               |
+------------+-------------------------------------------+--------------------------------+
| break      | Exits the loop immediately                | Stop when a condition met      |
| continue   | Skips current iteration                   | Skip invalid data, missing val |
| pass       | Does nothing (placeholder)                | Used to define empty blocks    |
| return     | Exits a function and returns a value      | Return result from function    |
+------------+-------------------------------------------+--------------------------------+
```

---
✨ *“Jump statements are the steering wheel of your loops — they let you stop, skip, or glide smoothly!”* 🧭🐍
