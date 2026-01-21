# ------------------------------------------------------------
# Q1) Write a program to take multiple inputs into a single variable.
# ------------------------------------------------------------

# Explanation:
# Sometimes we want the user to enter two or more values in a single line.
# Example Input: Ram, Hyderabad
# We use split(",") to separate values based on comma.
# We use strip() to remove unwanted spaces.

Name, Place = input("Enter Name, Place: ").split(",")
print(f"My name is {Name.strip()} and I am from {Place}")

# ------------------------------------------------------------
# Q2) Write a program to take UNLIMITED inputs in one line.
# ------------------------------------------------------------

# Explanation:
# User can enter any number of inputs (unknown count).
# split(",") breaks input into list items.
# List Comprehension stores them in a list.

lst = [i for i in input("Enter unlimited inputs separated by commas: ").split(",")]
print("Your inputs:", lst)

# Example:
# Input : Apple, Banana, Mango, Grapes
# Output: ['Apple', 'Banana', 'Mango', 'Grapes']


# ------------------------------------------------------------
# Q3) Write a program to take LIMITED number of inputs (fixed count).
# ------------------------------------------------------------

# Explanation:
# Takes exactly 6 inputs.
# Every iteration collects one input.

lst = [input("Enter value: ") for i in range(6)]
print("You entered:", lst)


# ------------------------------------------------------------
# Q4) Write a program to read a single integer value from user.
# ------------------------------------------------------------

# Explanation:
# input() returns string → convert to int using int()

d = int(input("Enter a number: "))
print("Type of d is:", type(d))   # Output: <class 'int'>


# ------------------------------------------------------------
# Q5) Write a program to read MULTIPLE integer values from one line.
# ------------------------------------------------------------

# Explanation:
# map(int, ...) converts all split string values into integers.
# All must be valid integers.

a, b, c = map(int, input("Enter three numbers: ").split())
print("Types:", type(a), type(b), type(c))


# ------------------------------------------------------------
# Q6) Bonus: Take inputs for a list of integers in one line.
# ------------------------------------------------------------

# Explanation:
# User enters: 10 20 30 40 50
# map(int, ...) converts all to integers
# list(...) stores them in a list.

numbers = list(map(int, input("Enter many numbers: ").split()))
print("Number List:", numbers)
