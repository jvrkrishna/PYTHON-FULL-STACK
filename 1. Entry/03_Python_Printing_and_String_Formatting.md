# 🐍 Python — Printing Output and String Formatting

## 🔹 Definition
In Python, the `print()` function is used to **display output** on the screen.  
We can format and display variables in several ways using:
1. Basic `print()` function
2. Old-style formatting (`%`)
3. `str.format()` method
4. f-strings (formatted string literals)

## 🔹 1. Print with the `print()` Function
The simplest way to display output.
```python
x = 10
print(x)

✅ Output:
10

You can print text, numbers, or variables together:
name = "Rama Krishna"
age = 29
print("My name is", name, "and my age is", age)


✅ Output:
My name is Rama Krishna and my age is 29

🔹 2. Print with String Formatting using %
This is the old-style of formatting (from Python 2, still works in Python 3).
name = "Rama Krishna"
age = 29
print("My name is %s and my age is %d" % (name, age))

✅ Format specifiers:
Symbol	Meaning
%s	String
%d	Integer
%f	Float
%.2f	Float with 2 decimal places

✅ Example:
price = 12.3456
print("The price is %.2f dollars" % price)

Output:
The price is 12.35 dollars

🔹 3. Print with the str.format() Method
Introduced in Python 3 — more readable and flexible.
name = "Rama Krishna"
age = 29
print("My name is {} and my age is {}".format(name, age))

✅ Using named placeholders:
name1 = "Gopal"
age = 29
print("My name is {name} and my age is {age}".format(name=name1, age=age))

✅ Formatting numbers:
course = "Python"
price = 2.99
print("My course is {} and the price is ${price:.1f}".format(course, price=price))

Output:
My course is Python and the price is $3.0

🔹 4. Print with f-Strings (Python 3.6+)
✅ Recommended modern method
Simpler, faster, and more readable — variables can be embedded directly inside strings.
name = "Rama Krishna"
print(f"My name is {name}")

You can even perform calculations inside the curly braces {}.
salary = 10000
tax = 0.2
print(f"My monthly salary after tax is ${salary - (salary * tax)}")

✅ Output:
My monthly salary after tax is $8000.0

✅ Formatting numbers:
pi = 3.14159265
print(f"Value of pi: {pi:.2f}")

Output:
Value of pi: 3.14

✅ Use expressions:
a = 5
b = 3
print(f"Sum of {a} and {b} is {a + b}")

Output:
Sum of 5 and 3 is 8
