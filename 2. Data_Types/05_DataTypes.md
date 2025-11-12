# 🐍 Python Data Types — Definition, Explanation & Examples

## 🔹 What are Data Types?
A data type defines the kind of value a variable can store and what operations can be performed on it.  
Python is a dynamically typed language, meaning you don’t need to declare the data type explicitly — it is determined automatically at runtime.

## 🔹 Types of Data in Python
1. Number  
2. String  
3. List  
4. Tuple  
5. Set  
6. Dictionary  

In this section, we will discuss the **Number Data Type** in detail.

## 🔹 Number Data Type
Numbers in Python can be of four main types:
- int → Integer numbers (whole numbers)
- float → Decimal numbers
- complex → Numbers with real and imaginary parts
- bool → Boolean (True or False)

### Example: Checking Number Data Types
a = 10.7  # Python automatically identifies data type (dynamic typing)
print(a)
print(type(a))  # <class 'float'>
print(id(a))    # memory address (unique ID of the object)

Output:
10.7  
<class 'float'>  
140737489404496  

### Example: String Example (for comparison)
a = "Rama Krishna"
print(a)
print(type(a))  # <class 'str'>
print(id(a))

Output:
Rama Krishna  
<class 'str'>  
140737489568272  

### Different Number Types
x = 8      # int
y = 2.8    # float
z = 1j     # complex (j is the imaginary unit)
print(type(x))  # <class 'int'>
print(type(y))  # <class 'float'>
print(type(z))  # <class 'complex'>

## 🔹 Type Conversion Between Number Types
We can convert between numeric types using:
- int() → converts to integer
- float() → converts to float
- complex() → converts to complex

x = 1       # int
y = 2.8     # float
z = 1 + 10j # complex (1 → real part, 10 → imaginary part)

# Convert from int to float
a = float(x)

# Convert from float to int
b = int(y)

# Convert from int to complex
c = complex(x)

print(z.real)   # Real part → 1.0
print(z.imag)   # Imaginary part → 10.0
print(a)
print(b)
print(c)
print(type(a))
print(type(b))
print(type(c))

Output:
1.0  
10.0  
1.0  
2  
(1+0j)  
<class 'float'>  
<class 'int'>  
<class 'complex'>  

## 🔹 Boolean Type
The Boolean data type has only two values: True and False.  
Booleans are often used in conditions, loops, and logical operations.  
Internally, True = 1 and False = 0.

print(bool(1))     # True
print(bool(0))     # False
print(bool(2))     # True
print(True)
print(False)

Output:
True  
False  
True  
True  
False  

## 🔹 Input Function in Python
The input() function is used to take user input from the keyboard.  
By default, it takes the input as a string.

a = input("Enter something: ")
print(a)
print(type(a))

Output:
Enter something: Hello  
Hello  
<class 'str'>

### Converting Input Type
You can explicitly specify the data type of input:

a = int(input("Enter a number: "))
print(a)
print(type(a))

Output:
Enter a number: 10  
10  
<class 'int'>

Note: By default, all inputs are strings.  
Use int(), float(), or bool() to convert input to the desired type.

## ✅ Summary Table

```
+------------+---------------+-----------------------------+
| Data Type  | Example       | Description                 |
+------------+---------------+-----------------------------+
| int        | 10            | Whole number                |
| float      | 10.5          | Decimal number              |
| complex    | 2+3j          | Real + Imaginary number     |
| bool       | True / False  | Logical values              |
| str        | "Hello"       | String of characters        |
+------------+---------------+-----------------------------+
```


## 🧩 Practice Tasks
1. Create variables of type int, float, complex, and print their types.  
2. Convert int → float and float → int. Observe the change.  
3. Check the real and imaginary parts of a complex number.  
4. Try printing bool(0), bool(1), bool(""), bool("Python").  
5. Take two inputs from the user, convert them to integers, and print their sum.  

