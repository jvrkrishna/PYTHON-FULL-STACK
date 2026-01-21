# 🧭 Python Control Statements — Introduction

## 🔹 What are Control Statements?

**Control Statements** are special statements in Python that **control the flow of program execution** based on conditions, loops, or external jumps.  

They decide **which part of the program should execute** and **how many times** it should repeat.  

💡 In simple terms:
> Control statements determine **the order** in which instructions are executed in a program.

---

### 📘 Example (without control statement)
```python
print("Start Program")
print("User logged in")
print("Welcome to Dashboard")
print("End Program")
```

🧠 Output:
```
Start Program
User logged in
Welcome to Dashboard
End Program
```

➡️ Here, all statements execute **sequentially** — one after another.

---

### 📘 Example (with control statement)
```python
age = 18
if age >= 18:
    print("You are eligible to vote.")
else:
    print("You are not eligible to vote.")
```

🧠 Output:
```
You are eligible to vote.
```

➡️ Here, the **if–else control statement** decides which block of code runs.

---

## 🔹 Why Use Control Statements?

Control statements make programs:
- Smarter and dynamic 🧠  
- Efficient and structured ⚙️  
- Able to make decisions 🗳️  
- Able to repeat or skip code 🔁  

---

## 🔹 Types of Control Statements in Python
```text
+--------------------------------+----------------------------------------------------+
| Category                       | Description                                        |
+--------------------------------+----------------------------------------------------+
| Conditional / Decision Making  | Used to execute code based on conditions           |
|                                | Examples: if, if-else, if-elif-else, nested if    |
+--------------------------------+----------------------------------------------------+
| Looping / Iteration            | Used to repeat a block of code multiple times      |
|                                | Examples: for loop, while loop                    |
+--------------------------------+----------------------------------------------------+
| Jump / Branching Statements    | Used to control or alter the normal flow of loops  |
|                                | Examples: break, continue, pass, return           |
+--------------------------------+----------------------------------------------------+
```

---

## 🔹 Syntax Flow Overview

```text
+----------------------------+
| Start                     |
|   ↓                       |
| Condition?                |
|   ├── Yes → Execute Block  |
|   └── No  → Skip / End     |
+----------------------------+
```

🧠 This flow structure applies to **decision-making statements** (`if`, `elif`, `else`),  
while loops (`for`, `while`) repeatedly check the condition until it becomes False.

---

## 🔹 Summary

```text
+---------------------------+----------------------------------------------+
| Concept                   | Description                                  |
+---------------------------+----------------------------------------------+
| Control Statement          | Controls program flow                        |
| Conditional Statements     | Make decisions (if, elif, else)              |
| Looping Statements         | Repeat code (for, while)                     |
| Jump Statements            | Alter normal loop flow (break, continue, pass)|
+---------------------------+----------------------------------------------+
```
