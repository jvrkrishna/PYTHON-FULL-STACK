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
```text
+------------+------------------------------+-------------+----------+
| Operator   | Description                  | Example     | Output   |
+------------+------------------------------+-------------+----------+
| &          | Bitwise AND                  | 5 & 3       | 1        |
| |          | Bitwise OR                   | 5 | 3       | 7        |
| ^          | Bitwise XOR                  | 5 ^ 3       | 6        |
| ~          | Bitwise NOT                  | ~5          | -6       |
| <<         | Left shift                   | 5 << 1      | 10       |
| >>         | Right shift                  | 5 >> 1      | 2        |
+------------+------------------------------+-------------+----------+
```

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

---

✨ *“Operators are the foundation of every expression in Python — master them early!”* 🚀
