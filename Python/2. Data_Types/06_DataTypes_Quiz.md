# 🧩 Python Data Types – Practice Tasks with Answers

---

## 🔹 Task 1: Create variables of type int, float, complex, and print their types.
### 🧾 Question:
Create three variables — one of each type (int, float, complex) — and print their types.

### ✅ Answer:
```python
a = 10           # int
b = 12.5         # float
c = 3 + 4j       # complex

print("a =", a, ", Type:", type(a))
print("b =", b, ", Type:", type(b))
print("c =", c, ", Type:", type(c))
```

### 🧠 Output:
```
a = 10 , Type: <class 'int'>
b = 12.5 , Type: <class 'float'>
c = (3+4j) , Type: <class 'complex'>
```

---

## 🔹 Task 2: Convert int → float and float → int
### 🧾 Question:
Convert an integer to a float, and a float to an integer. Observe the difference.

### ✅ Answer:
```python
x = 5      # int
y = 3.8    # float

a = float(x)   # int to float
b = int(y)     # float to int

print("Float from int:", a)
print("Int from float:", b)
```

### 🧠 Output:
```
Float from int: 5.0
Int from float: 3
```

---

## 🔹 Task 3: Check the real and imaginary parts of a complex number
### 🧾 Question:
Create a complex number and display its real and imaginary parts.

### ✅ Answer:
```python
z = 7 + 9j
print("Real part:", z.real)
print("Imaginary part:", z.imag)
```

### 🧠 Output:
```
Real part: 7.0
Imaginary part: 9.0
```

---

## 🔹 Task 4: Boolean values
### 🧾 Question:
Print the boolean value for `0`, `1`, empty string, and `"Python"`.

### ✅ Answer:
```python
print(bool(0))        # False
print(bool(1))        # True
print(bool(""))       # False
print(bool("Python")) # True
```

### 🧠 Output:
```
False
True
False
True
```

---

## 🔹 Task 5: Input two numbers and print their sum
### 🧾 Question:
Take two numbers from the user, convert them to integers, and print their sum.

### ✅ Answer:
```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Sum =", a + b)
```

### 🧠 Output Example:
```
Enter first number: 10
Enter second number: 20
Sum = 30
```

---

## 🔹 Task 6: Identify different data types
### 🧾 Question:
Create variables of different types and print their values and data types.

### ✅ Answer:
```python
a = 10
b = 12.5
c = 3 + 4j
d = True
e = "Python"

print(a, type(a))
print(b, type(b))
print(c, type(c))
print(d, type(d))
print(e, type(e))
```

### 🧠 Output:
```
10 <class 'int'>
12.5 <class 'float'>
(3+4j) <class 'complex'>
True <class 'bool'>
Python <class 'str'>
```

---

## 🔹 Task 7: Boolean evaluation
### 🧾 Question:
Test which values are True or False.

### ✅ Answer:
```python
print(bool(0))
print(bool(1))
print(bool(2))
print(bool(""))
print(bool("Python"))
```

### 🧠 Output:
```
False
True
True
False
True
```

---

## 🔹 Task 8: Check input type
### 🧾 Question:
Take input from user and display its value and type.

### ✅ Answer:
```python
a = input("Enter something: ")
print("Value:", a)
print("Type:", type(a))
```

### 🧠 Output Example:
```
Enter something: Hello
Value: Hello
Type: <class 'str'>
```

---

## 🔹 Task 9: Type-casted input
### 🧾 Question:
Take one integer and one float input, convert them, and print their sum.

### ✅ Answer:
```python
num1 = int(input("Enter an integer: "))
num2 = float(input("Enter a float number: "))

print("Sum =", num1 + num2)
print("Type of num1:", type(num1))
print("Type of num2:", type(num2))
```

### 🧠 Output Example:
```
Enter an integer: 5
Enter a float number: 3.5
Sum = 8.5
Type of num1: <class 'int'>
Type of num2: <class 'float'>
```

---

## 🔹 Task 10: Small calculator using inputs
### 🧾 Question:
Take two numbers from user and perform basic arithmetic operations.

### ✅ Answer:
```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)
print("Floor Division:", a // b)
print("Remainder:", a % b)
print("Power:", a ** b)
```

### 🧠 Output Example:
```
Enter first number: 10
Enter second number: 3
Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3.3333333333333335
Floor Division: 3
Remainder: 1
Power: 1000
```

---

## 🔹 Task 11: Data type conversion practice
### 🧾 Question:
Mix different data types and fix errors using conversions.

### ✅ Answer:
```python
x = 5
y = "10"

# Incorrect: print(x + y) ❌ TypeError
print(int(y) + x)   # Convert string to int
print(str(x) + y)   # Convert int to string
```

### 🧠 Output:
```
15
510
```

---

## 🔹 Task 12: Dynamic typing in Python
### 🧾 Question:
Show how a variable can change its type during runtime.

### ✅ Answer:
```python
a = 10
print(a, type(a))

a = "Python"
print(a, type(a))

a = 3.14
print(a, type(a))
```

### 🧠 Output:
```
10 <class 'int'>
Python <class 'str'>
3.14 <class 'float'>
```

---

## 🔹 Task 13: Boolean in conditions
### 🧾 Question:
Use boolean values inside conditions.

### ✅ Answer:
```python
is_active = True

if is_active:
    print("User is active")
else:
    print("User is inactive")

print(bool(0))
print(bool(10))
```

### 🧠 Output:
```
User is active
False
True
```

---

## 🧠 Summary

✅ Python automatically detects data types (dynamic typing).  
✅ Convert data types using `int()`, `float()`, `complex()`, `str()`, `bool()`.  
✅ The `input()` function always returns **string** data.  
✅ Boolean values: `True` = 1, `False` = 0.  
✅ Use `type()` to check the data type while debugging.  
