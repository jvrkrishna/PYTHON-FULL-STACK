# ⚙️ Python Operators — Introduction & Explanation

## 🔹 What are Operators?

An **operator** is a symbol or keyword used to perform an operation on one or more operands (variables or values).  
They are used to perform **arithmetic, comparison, logical, and other operations** on data.

📘 **Example:**
```python
a = 10
b = 5
print(a + b)   # '+' is an operator → adds a and b
```

🧠 **Output:**
```
15
```

---

## 🔹 Types of Operators in Python
```text
+------------------------------+--------------------------------------+---------------------------------------+
| Type                         | Description                          | Example                               |
+------------------------------+--------------------------------------+---------------------------------------+
| Arithmetic Operators          | Perform mathematical operations      | +, -, *, /, %, //, **                 |
| Relational (Comparison) Ops   | Compare two values                   | ==, !=, >, <, >=, <=                 |
| Assignment Operators          | Assign or update values              | =, +=, -=, *=, /=, %=, **=           |
| Logical Operators             | Combine conditional statements       | and, or, not                         |
| Identity Operators            | Compare memory locations             | is, is not                           |
| Membership Operators          | Check value in a sequence            | in, not in                           |
| Bitwise Operators             | Perform bit-level operations         | &, |, ^, ~, <<, >>                  |
+------------------------------+--------------------------------------+---------------------------------------+
```

---

## 🔹 Arithmetic Operators
```text
+------------+--------------------------+--------------+-----------+
| Operator   | Description              | Example      | Output    |
+------------+--------------------------+--------------+-----------+
| +          | Addition                 | 10 + 5       | 15        |
| -          | Subtraction              | 10 - 5       | 5         |
| *          | Multiplication           | 10 * 5       | 50        |
| /          | Division (float result)  | 10 / 5       | 2.0       |
| %          | Modulus (remainder)      | 10 % 3       | 1         |
| //         | Floor Division (quotient)| 10 // 3      | 3         |
| **         | Exponentiation (power)   | 2 ** 3       | 8         |
+------------+--------------------------+--------------+-----------+
```

---

## 🔹 Relational (Comparison) Operators
```text
+------------+-----------------------------+-------------+----------+
| Operator   | Description                 | Example     | Output   |
+------------+-----------------------------+-------------+----------+
| ==         | Equal to                    | 10 == 5     | False    |
| !=         | Not equal to                | 10 != 5     | True     |
| >          | Greater than                | 10 > 5      | True     |
| <          | Less than                   | 10 < 5      | False    |
| >=         | Greater than or equal to    | 10 >= 5     | True     |
| <=         | Less than or equal to       | 10 <= 5     | False    |
+------------+-----------------------------+-------------+----------+
```

---

## 🔹 Assignment Operators
```text
+------------+----------------------------+-------------+----------------+
| Operator   | Description                | Example     | Equivalent To  |
+------------+----------------------------+-------------+----------------+
| =          | Assign value               | x = 10      | x = 10         |
| +=         | Add and assign             | x += 5      | x = x + 5      |
| -=         | Subtract and assign        | x -= 3      | x = x - 3      |
| *=         | Multiply and assign        | x *= 2      | x = x * 2      |
| /=         | Divide and assign          | x /= 2      | x = x / 2      |
| %=         | Modulus and assign         | x %= 3      | x = x % 3      |
| **=        | Exponent and assign        | x **= 2     | x = x ** 2     |
+------------+----------------------------+-------------+----------------+
```

---

## 🔹 Logical Operators
```text
+------------+-------------------------------------+---------------------------+----------+
| Operator   | Description                         | Example                   | Output   |
+------------+-------------------------------------+---------------------------+----------+
| and        | True if both conditions are True     | (10 > 5) and (10 < 20)    | True     |
| or         | True if any one condition is True    | (10 > 5) or (10 < 5)      | True     |
| not        | Reverses the result                 | not(10 > 5)               | False    |
+------------+-------------------------------------+---------------------------+----------+
```

---

## 🔹 Identity Operators
```text
+------------+------------------------------------+-------------+-----------+
| Operator   | Description                        | Example     | Output    |
+------------+------------------------------------+-------------+-----------+
| is         | True if both refer to same object  | x is y      | True/False|
| is not     | True if they are different objects | x is not y  | True/False|
+------------+------------------------------------+-------------+-----------+
```

---

## 🔹 Membership Operators
```text
+------------+--------------------------------------+---------------------+----------+
| Operator   | Description                          | Example             | Output   |
+------------+--------------------------------------+---------------------+----------+
| in         | True if value found in sequence       | 'a' in 'apple'      | True     |
| not in     | True if value NOT found in sequence   | 'z' not in 'apple'  | True     |
+------------+--------------------------------------+---------------------+----------+
```

---

## 🔹 Bitwise Operators

Bitwise operators work at the **binary level**.  
They treat numbers as a sequence of bits (0s and 1s) and perform logical operations directly on each bit position.

---

### 📘 Bitwise Example 1
```python
a = 10    # 1010
b = 7     # 0111

print(a & b)   # Bitwise AND
print(a | b)   # Bitwise OR
print(a ^ b)   # Bitwise XOR
```

```text
+----------+--------+-----------------------------------------+
| Operation | Binary | Explanation                             |
+-----------+--------+-----------------------------------------+
| a         | 1010   | (10 in binary)                          |
| b         | 0111   | (7  in binary)                          |
| a & b     | 0010   | Both bits 1 → 1, else 0 → 2             |
| a | b     | 1111   | Any bit 1 → 1 → 15                      |
| a ^ b     | 1101   | Different bits → 1, same bits → 0 → 13  |
+-----------+--------+-----------------------------------------+
```

🧠 **Explanation:**
- `&` → AND → 1 only if both bits are 1  
- `|` → OR  → 1 if any bit is 1  
- `^` → XOR → 1 if bits are different (0 if same)

---

### 📘 Bitwise Example 2 — Bitwise NOT (~)
The **bitwise NOT (~)** operator inverts all bits (0 → 1 and 1 → 0)  
But Python stores integers in **2’s complement** format, so `~x` equals `-(x+1)`.

---

#### 🔹 Example 2.1 — Using `a = 13`
```python
a = 13
print(~a)
```

Binary breakdown:
```text
 a  =  13  →  0|1101
~a  =  invert bits → 1|0010
       add 1 → 1|1110
Result → -14
```

🧠 **Explanation:**
- `~13 = -(13 + 1)` → `-14`  
- The `1|` at left denotes sign bit (1 = negative).

---

#### 🔹 Example 2.2 — Using `x = 10`
```python
x = 10
print(~x)
```

Binary breakdown:
```text
 x  =  10  →  0|1010
~x  =  invert bits → 1|0101
       add 1 → 1|1011
Result → -11
```

🧠 **Explanation:**
- `~10 = -(10 + 1)` → `-11`
- So the **NOT** operator always returns **negative of (n + 1)**.

---

### 📘 Bitwise Summary
```text
+------------+----------------------------------+---------------------------------+
| Operator   | Meaning                          | Example & Result                |
+------------+----------------------------------+---------------------------------+
| &          | AND (both 1 → 1)                 | 10 & 7  → 2                     |
| |          | OR (any 1 → 1)                   | 10 | 7  → 15                    |
| ^          | XOR (same → 0, diff → 1)         | 10 ^ 7  → 13                    |
| ~          | NOT (invert bits, → -(x+1))      | ~10 → -11                       |
| <<         | Left shift (×2 per shift)        | 5 << 1 → 10                     |
| >>         | Right shift (÷2 per shift)       | 5 >> 1 → 2                      |
+------------+----------------------------------+---------------------------------+
```

---

🧠 **Quick Concept Recap**
- `&` — Logical AND of bits  
- `|` — Logical OR of bits  
- `^` — Logical XOR (1 if different)  
- `~` — Bitwise NOT → negate all bits (`~x = -(x + 1)`)  
- `<<` — Left shift (multiply by 2)  
- `>>` — Right shift (divide by 2)

---

## 🧠 Summary
```text
+-------------------+------------------------------------------------------------+
| Operator Category | Common Usage                                               |
+-------------------+------------------------------------------------------------+
| Arithmetic        | Mathematical calculations                                  |
| Relational        | Compare two values and return True/False                   |
| Assignment        | Assign or modify variable values                           |
| Logical           | Combine multiple conditions                                |
| Identity          | Compare object memory locations                            |
| Membership        | Check if a value exists in a list/string                   |
| Bitwise           | Perform binary operations on numbers                       |
+-------------------+------------------------------------------------------------+
```