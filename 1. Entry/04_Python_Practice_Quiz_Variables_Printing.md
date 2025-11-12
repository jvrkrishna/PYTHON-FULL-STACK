# 🧠 Python Practice + Quiz — Comments, Variables & Printing

## 🧩 PART 1: PRACTICE TASKS

1. Write a Python program to print:
Hello, welcome to Python!

2. Store your **name** and **age** in variables and print them using `print()`.

3. Add both a **single-line** and **multi-line** comment in your program.

4. Create three variables `x`, `y`, and `z` with values `10`, `20`, and `30`. Print their sum.

5. Assign `"Orange"` to three variables (`a`, `b`, `c`) in one line and print all three.

6. Print the output:
My favorite color is Blue
using the `.format()` method.

7. Create variables for your **course** and **price** and print:
Course: Python Full Stack | Price: $25.5
using an **f-string**.

8. Use `%` formatting to print:
My name is Ramesh and my score is 95

9. Print a float number with only **2 decimal places** using both:
- `%` formatting  
- `.format()` method

10. Given:
 ```python
 course = "Python"
 rating = 4.8579
 ```
 Print:
 ```
 Course: Python | Rating: 4.86/5
 ```
 using an **f-string**.

11. Concatenate these two variables using both `+` and f-strings:
 ```python
 first = "Hello"
 second = "World"
 ```
 Output:
 ```
 Hello World
 ```

12. Create a program that asks user input:
 ```python
 name = input("Enter your name: ")
 age = input("Enter your age: ")
 ```
 Output:
 ```
 Hello <name>, you are <age> years old!
 ```
 (Use f-strings)

13. Predict the output:
 ```python
 x = 10
 y = "10"
 print(x + y)
 ```
 ❓ What error do you get and why?

14. Correct this program:
 ```python
 name = "Rama
 print("My name is" name)
 ```

15. What is the difference between:
 ```python
 print("Age:", age)
 ```
 and  
 ```python
 print("Age=" + age)
 ```

16. What will this print?
 ```python
 a = b = c = "Python"
 print(a, b, c)
 ```

17. Explain why `id(a)` and `id(b)` might be same here:
 ```python
 a = 10
 b = 10
 print(id(a))
 print(id(b))
 ```


## 🧠 PART 2: THEORY QUIZ (Multiple Choice Questions)

# 🧠 Python Quiz — Comments, Variables & Printing

Q1. Which of the following is a valid variable name in Python?
a) 2name  
b) user-name  
c) user_name  
d) my variable  

Q2. Which statement is TRUE about Python variables?
a) Variables must be declared before use  
b) Variables do not need type declaration  
c) Variables can’t be changed once assigned  
d) Variables can start with numbers  

Q3. What will this print?
x = "Hello"
y = "World"
print(x + y)
a) Hello + World  
b) HelloWorld  
c) Hello World  
d) Error  

Q4. Which method is used for string formatting in Python 3?
a) .print()  
b) .format()  
c) .printf()  
d) .output()  

Q5. What will happen with this code?
x = "Hi"
y = 10
print(x + y)
a) Prints: Hi10  
b) Prints: Hi 10  
c) TypeError  
d) No output  

Q6. Choose the correct way to use f-strings:
a) print("Name is {name}")  
b) print(f"Name is {name}")  
c) print("fName is {name}")  
d) print(fName is {name}")  

Q7. Which symbol is used for single-line comments in Python?
a) //  
b) /* */  
c) #  
d) <!-- -->  

Q8. What is the output of:
x = y = z = "Apple"
print(x)
a) Apple Apple Apple  
b) Apple  
c) Error  
d) ['Apple', 'Apple', 'Apple']  

Q9. Which of the following is NOT allowed as a variable name?
a) _value  
b) value_1  
c) for  
d) Value  

Q10. What is the correct syntax to print variables a and b together separated by a space?
a) print(a + b)  
b) print(a, b)  
c) print(a b)  
d) print(a . b)  

--------------------------------------------
💻 Mini Project Task — “My Digital Card”
--------------------------------------------
Create a Python program that prints your digital visiting card.

Expected Output:
-----------------------------
     My Digital Card
-----------------------------
Name   : Rama Krishna
Course : Python Full Stack
Email  : rama@example.com
Phone  : +91 9876543210
-----------------------------
Thank you for visiting!

Use:
Variables, f-strings, print() formatting, and \n for line breaks.

--------------------------------------------
🧩 CHALLENGE
--------------------------------------------
Write a Python program that takes two numbers from the user and prints:
Sum: <sum>  
Difference: <difference>  
Product: <product>  
Quotient: <quotient>
