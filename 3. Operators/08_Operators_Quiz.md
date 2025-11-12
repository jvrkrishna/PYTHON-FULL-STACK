# 🧩 Python Operators — Quiz & Practice Tasks

## 🔹 Part 1: Multiple-Choice Questions (MCQs)

```text
+-------------------------------------------------------------------------------------------+
| Q1. Which operator is used to add two numbers?                                            |
| a) &     b) +     c) and     d) add()                                                    |
| ✅ Answer: b) +                                                                           |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q2. What will be the output of: print(10 // 3)?                                           |
| a) 3.33     b) 3     c) 3.0     d) Error                                                 |
| ✅ Answer: b) 3                                                                           |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q3. Which of these comparison operators means “not equal”?                                |
| a) ==     b) <=     c) !=     d) equals()                                                |
| ✅ Answer: c) !=                                                                          |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q4. Which logical operator returns True only if both conditions are True?                 |
| a) or     b) and     c) not     d) nor                                                   |
| ✅ Answer: b) and                                                                        |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q5. What is the result of: print(2 ** 3)?                                                 |
| a) 6     b) 8     c) 9     d) 16                                                         |
| ✅ Answer: b) 8                                                                           |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q6. What does the operator // return?                                                     |
| a) Remainder     b) Exact division     c) Quotient (integer part)     d) Error            |
| ✅ Answer: c) Quotient (integer part)                                                     |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q7. Which of the following is an Identity operator?                                       |
| a) ==     b) is     c) in     d) not                                                     |
| ✅ Answer: b) is                                                                          |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q8. Which of these statements is TRUE about membership operators?                         |
| a) They test memory addresses                                                             |
| b) They check presence of an element in sequence                                          |
| c) They compare numbers only                                                              |
| d) They always return False                                                               |
| ✅ Answer: b) They check presence of an element in sequence                               |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q9. Evaluate: print(not(5 > 2 and 3 < 1))                                                 |
| a) True     b) False     c) Error     d) None                                            |
| ✅ Answer: a) True                                                                        |
+-------------------------------------------------------------------------------------------+

+-------------------------------------------------------------------------------------------+
| Q10. Which bitwise operator performs logical AND at bit level?                            |
| a) |     b) ^     c) &     d) ~                                                         |
| ✅ Answer: c) &                                                                          |
+-------------------------------------------------------------------------------------------+
```

---

## 🔹 Part 2: Coding Tasks

```text
+-------------------------------------------------------------------------------------------+
| Q11. Write a Python program to take two numbers and print:                                |
|       - Sum, Difference, Product, Quotient, Remainder                                     |
|                                                                                           |
| ✅ Sample Solution:                                                                      |
| a = int(input("Enter first number: "))                                                    |
| b = int(input("Enter second number: "))                                                   |
| print("Sum:", a + b)                                                                      |
| print("Difference:", a - b)                                                               |
| print("Product:", a * b)                                                                  |
| print("Quotient:", a / b)                                                                 |
| print("Remainder:", a % b)                                                                |
+-------------------------------------------------------------------------------------------+
```

```text
+-------------------------------------------------------------------------------------------+
| Q12. Write a program to check if a number is divisible by 5 and even using logical ops.   |
|                                                                                           |
| ✅ Sample Solution:                                                                      |
| num = int(input("Enter a number: "))                                                      |
| if num % 5 == 0 and num % 2 == 0:                                                         |
|     print("Number is divisible by 5 and even")                                            |
| else:                                                                                     |
|     print("Condition not satisfied")                                                      |
+-------------------------------------------------------------------------------------------+
```

```text
+-------------------------------------------------------------------------------------------+
| Q13. Write a program to swap two numbers using assignment operators only.                 |
|                                                                                           |
| ✅ Sample Solution:                                                                      |
| a = int(input("Enter a: "))                                                               |
| b = int(input("Enter b: "))                                                               |
| a, b = b, a                                                                               |
| print("After swapping: a =", a, ", b =", b)                                               |
+-------------------------------------------------------------------------------------------+
```

```text
+-------------------------------------------------------------------------------------------+
| Q14. Demonstrate use of “in” and “not in” membership operators.                           |
|                                                                                           |
| ✅ Sample Solution:                                                                      |
| fruits = ["apple", "banana", "mango"]                                                     |
| print("apple" in fruits)      # True                                                      |
| print("grape" not in fruits)  # True                                                      |
+-------------------------------------------------------------------------------------------+
```

```text
+-------------------------------------------------------------------------------------------+
| Q15. Check whether two variables refer to the same object (Identity operators).           |
|                                                                                           |
| ✅ Sample Solution:                                                                      |
| x = [1, 2, 3]                                                                             |
| y = x                                                                                     |
| z = [1, 2, 3]                                                                             |
| print(x is y)     # True                                                                  |
| print(x is z)     # False                                                                 |
+-------------------------------------------------------------------------------------------+
```

---

## 🔹 Part 3: Practice Challenge — “Operator Playground”

```text
+-------------------------------------------------------------------------------------------+
| 🎯 Task: Create a menu-driven mini calculator using operators.                            |
|                                                                                           |
| ✅ Requirements:                                                                         |
| 1️⃣ Ask user to choose operation (+, -, *, /, //, %, **)                                  |
| 2️⃣ Input two numbers                                                                    |
| 3️⃣ Use if-elif to perform operation                                                     |
| 4️⃣ Display result neatly                                                                |
|                                                                                           |
| ✅ Sample Output:                                                                        |
| Enter first number: 5                                                                     |
| Enter second number: 3                                                                    |
| Enter operator (+, -, *, /, %, //, **): *                                                |
| Result = 15                                                                               |
+-------------------------------------------------------------------------------------------+
```
