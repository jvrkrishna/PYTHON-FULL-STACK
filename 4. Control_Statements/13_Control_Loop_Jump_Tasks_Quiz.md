# 🧩 Python Practice & Quiz — Conditional, Looping, and Jump Statements

---

## 🎯 PART 1 — PRACTICE TASKS

### 🔹 Conditional Statements (if / elif / else)
1️⃣ Write a program to check if a number is **positive, negative, or zero**.  
2️⃣ Create a program to print the **largest of three numbers**.  
3️⃣ Write a program to check whether a given number is **even or odd**.  
4️⃣ Take marks as input and print the **grade** according to the range:  
   - 90–100 → A  
   - 70–89 → B  
   - 50–69 → C  
   - Below 50 → Fail  
5️⃣ Create a login system:
   - If username = `"admin"` and password = `"Admin@123"`, print `"Login Successful"`, else `"Try Again"`.  
6️⃣ Write a program that checks if a person is **eligible to vote** or not (age ≥ 18).  
7️⃣ Create a calculator using `if...elif...else` that performs +, -, ×, ÷ operations.

---

### 🔹 Looping Statements (for / while)
8️⃣ Write a program to print **1 to 10** using a while loop.  
9️⃣ Write a program to print the **multiplication table** for a given number.  
🔟 Find the **sum of N natural numbers** using a while loop.  
11️⃣ Print **even numbers between 1 to 50** using a for loop.  
12️⃣ Write a for loop to print each **character of your name**.  
13️⃣ Using nested for loops, print this pattern:
```
*
* *
* * *
* * * *
```
14️⃣ Write a program to count how many **positive, negative, and zero** numbers the user enters until -1 is typed.  
15️⃣ Create a program to print this pattern:
```
1
1 2
1 2 3
1 2 3 4
```

---

### 🔹 Jump Statements (break / continue / pass)
16️⃣ Write a loop that prints letters in `"HELLO"` but stops when `'L'` appears (use `break`).  
17️⃣ Write a loop that prints numbers 1–10 but skips multiples of 3 (use `continue`).  
18️⃣ Create a placeholder function using `pass`.  
19️⃣ Write a loop to print characters in `"Python"` but **skip vowels** using `continue`.  
20️⃣ Create a loop that keeps taking numbers until the user enters `-1`, then breaks out.

---

## 🧠 PART 2 — QUIZ (MCQs & Output Prediction)

---

### 🔸 Q1. What will be the output?
```python
x = 10
if x > 5:
    print("A")
else:
    print("B")
```
a) A  
b) B  
c) Error  
d) None  

---

### 🔸 Q2. Which of the following correctly checks if a number is even?
a) if num / 2 == 0:  
b) if num % 2 == 0:  
c) if num // 2 = 0:  
d) if num == 2 %:  

---

### 🔸 Q3. What will this print?
```python
for i in range(3):
    print(i)
else:
    print("Done")
```
a) 0 1 2  
b) 0 1 2 Done  
c) Done  
d) Error  

---

### 🔸 Q4. What does `continue` do in a loop?
a) Stops the loop completely  
b) Skips the rest of the loop and goes to the next iteration  
c) Restarts the program  
d) Terminates the program  

---

### 🔸 Q5. What will be the output?
```python
for i in "PYTHON":
    if i == "T":
        break
    print(i)
```
a) P Y T H  
b) P Y  
c) P Y T  
d) Error  

---

### 🔸 Q6. Which of the following is a valid `while` loop?
a) while (x = 5):  
b) while x == 5:  
c) while (x : 5):  
d) while == 5:  

---

### 🔸 Q7. How many times will this print?
```python
count = 1
while count < 4:
    print(count)
    count += 1
```
a) 2  
b) 3  
c) 4  
d) Infinite  

---

### 🔸 Q8. What is the output of the following?
```python
for i in range(5):
    if i == 3:
        continue
    print(i)
```
a) 0 1 2 3 4  
b) 0 1 2 4  
c) 1 2 3 4  
d) 0 2 3 4  

---

### 🔸 Q9. What does the `pass` statement do?
a) Skips the loop iteration  
b) Terminates the loop  
c) Does nothing (placeholder)  
d) Exits the program  

---

### 🔸 Q10. What will be the output?
```python
for i in range(5):
    if i == 2:
        break
    print(i)
else:
    print("Done")
```
a) 0 1 2 Done  
b) 0 1 Done  
c) 0 1  
d) 0 1 2  

---

## 🧾 PART 3 — ANSWERS

| Q.No | Answer | Explanation |
|------|---------|-------------|
| 1 | a) A | 10 > 5 → True, so “A” printed |
| 2 | b) if num % 2 == 0 | `%` checks remainder |
| 3 | b) 0 1 2 Done | else executes when loop ends normally |
| 4 | b) Skips rest of iteration | Moves to next cycle |
| 5 | b) P Y | Loop stops before printing T |
| 6 | b) while x == 5 | Correct comparison syntax |
| 7 | b) 3 | Runs for 1, 2, 3 |
| 8 | b) 0 1 2 4 | Skips 3 due to continue |
| 9 | c) Does nothing | Used as placeholder |
| 10 | c) 0 1 | else skipped because loop broke early |

---

## 💻 BONUS CODING CHALLENGE — Menu-Driven Calculator

### 🎯 Problem:
Write a Python program that continuously displays a **menu** to perform mathematical operations.

### ✅ Requirements:
- Use `while True` to repeat until user quits.  
- Use `if...elif...else` for operation choices.  
- Use `break` to exit.  

### 💡 Solution:
```python
while True:
    print("\n===== Simple Calculator =====")
    print("Press + to Add")
    print("Press - to Subtract")
    print("Press * to Multiply")
    print("Press / to Divide")
    print("Press q to Quit")

    choice = input("Enter your choice: ")

    if choice == 'q':
        print("Exiting Calculator... Goodbye!")
        break

    # Input two numbers
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))

    if choice == '+':
        print(f"Result: {a + b}")
    elif choice == '-':
        print(f"Result: {a - b}")
    elif choice == '*':
        print(f"Result: {a * b}")
    elif choice == '/':
        if b != 0:
            print(f"Result: {a / b}")
        else:
            print("Error: Division by zero!")
    else:
        print("Invalid choice! Please select again.")
```

### 🧠 Output Example:
```
===== Simple Calculator =====
Press + to Add
Press - to Subtract
Press * to Multiply
Press / to Divide
Press q to Quit
Enter your choice: +
Enter first number: 10
Enter second number: 5
Result: 15.0
```

🧩 Input: `q` → Output:
```
Exiting Calculator... Goodbye!
```

---

✨ *“Conditionals help you decide, loops repeat your logic, and jump statements control the flow — together, they build your program’s brain!”* 🧠⚙️🐍
