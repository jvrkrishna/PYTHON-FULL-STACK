# 🔁 Python Looping Statements — Complete Notes

## 🔹 Introduction

**Loops** in Python allow you to execute a block of code multiple times.  
They make programs efficient, reducing redundancy.  

Python provides two main looping constructs:
1. `while` loop — repeats a block as long as a condition is **True**.  
2. `for` loop — iterates over a sequence (range, list, string, etc.).  

---

## 🔹 Syntax Overview
```text
+----------------------------+
| Start                     |
| ↓                         |
| Check Condition            |
| ↓                         |
| True → Execute block       |
| ↓                         |
| Update counter             |
| ↓                         |
| Repeat check               |
| ↓                         |
| False → Exit loop          |
+----------------------------+
```

---

## 🔹 Example 1 — Simple `while` Loop
```python
while True:
    print("This is Loop")
    break  # added to stop infinite loop
```

---

## 🔹 Example 2 — while False + else
```python
while False:
    print("This will not run")
else:
    print("Else block executed because condition is False")
```

🧠 **Output:**
```
Else block executed because condition is False
```

---

## 🔹 Example 3 — Print Values up to 30
```python
a = int(input("Enter A value: "))
while a <= 30:
    print("Value of a is:", a)
    a = a + 1
```

---

## 🔹 Example 4 — Print Numbers 1 to 10
```python
i = 1
while i <= 10:
    print(i)
    i += 1
```

---

## 🔹 Example 5 — Multiplication Table using `while`
```python
i = 1
n = int(input("Enter n Value: "))
while i <= 10:
    print(f"{n} X {i} = {n * i}")
    i += 1
```

---

## 🔹 Example 6 — Print Stars
```python
i = 1
while i < 10:
    print("*", end=' ')
    i += 1
```

🧠 **Output:**
```
* * * * * * * * * 
```

---

## 🔹 Example 7 — Sum of N Natural Numbers
```python
i = 1
sum = 0
while i < 10:
    sum = sum + i
    i = i + 1
print("Sum is:", sum)
```

🧠 **Output:**  
```
Sum is: 45
```

---

## 🔹 Example 8 — `while` with `else`
```python
i = int(input("Enter n Value: "))
while i <= 5:
    print(i)
    i += 1
    if i == 3:
        break
else:
    print("The while loop exhausted")
```

---

## 🔹 Example 9 — Iterate String using `while`
```python
i = 0
a = "Rama krishna"
while i < len(a):
    if a[i] == 'a':
        break
    print(a[i])
    i = i + 1
```

---

## 🔹 Example 10 — Count Positives, Negatives, and Zeros
```python
num = int(input("Enter a value (-1 to stop): "))
pn = 0
nn = 0
zn = 0

while num != -1:
    if num > 0:
        pn += 1
    elif num < 0:
        nn += 1
    else:
        zn += 1
    num = int(input("Enter a value (-1 to stop): "))

print("Number of positives:", pn)
print("Number of negatives:", nn)
print("Number of zeros:", zn)
```

---

## 🔹 Example 11 — Simple `for` Loop
```python
for num in range(10):
    print(num)
```

---

## 🔹 Example 12 — For Loop with Step Value
```python
for i in range(1, 11, 2):
    print(i)
```

🧠 **Output:**  
```
1
3
5
7
9
```

---

## 🔹 Example 13 — Print in One Line
```python
for i in range(0, 10):
    print(i, end=' ')
```

🧠 **Output:**  
```
0 1 2 3 4 5 6 7 8 9
```

---

## 🔹 Example 14 — Print Natural Numbers
```python
n = int(input("Enter a number: "))
for i in range(n):
    print(i)
```

---

## 🔹 Example 15 — Iterate Over String
```python
for i in "Rama Krishna":
    print(i)
```

---

## 🔹 Example 16 — Skipping Characters
```python
a = "Krishna"
for i in range(0, len(a), 2):
    print(a[i])
```

🧠 **Output:**  
```
K i h a
```

---

## 🔹 Example 17 — Iterate Over List
```python
fruits = ["apple", "banana", "cherry"]
for x in fruits:
    print(x)
```

---

## 🔹 Example 18 — Multiplication Table using `for`
```python
n = int(input("Enter a number: "))
for i in range(1, 11):
    print(f"{n} * {i} = {n * i}")
```

---

## 🔹 Example 19 — Difference Between `for` and `while`
| Loop Type | Used When | Example |
|------------|------------|----------|
| **for** | No. of iterations known | Iterating over list, range |
| **while** | Iterations unknown | Waiting for input, conditions |

---

## 🔹 Example 20 — Skipping Character with `continue`
```python
def hide_char():
    name = "Rama"
    for ch in name:
        if ch == "a":
            continue
        print(ch, end="")
hide_char()
```

🧠 **Output:**  
```
Rm
```

---

## 🔹 Example 21 — HackerRank “Print Sequence”
```python
if __name__ == '__main__':
    n = int(input())
    for i in range(1, n + 1):
        print(i, end="")
```

🧠 Input: `3`  
🧠 Output: `123`

---

## 🔹 Example 22 — Nested `while` Loop
```python
i = 1
while i <= 3:
    print(i)
    j = 1
    while j <= 3:
        print(j)
        j += 1
    i += 1
```

---

## 🔹 Example 23 — Nested `for` Loop
```python
for i in range(1, 11):
    for j in range(2, 4):
        print(i * j, end=' ')
    print()
```

---

## 🔹 Example 24 — Nested Lists with `while`
```python
x = [1, 2]
y = [4, 5]
i = 0
while i < len(x):
    j = 0
    while j < len(y):
        print(x[i], y[j])
        j += 1
    i += 1
```

---

## 🔹 Example 25 — Nested Loop Example (Cartesian Product)
```python
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]
for x in adj:
    for y in fruits:
        print(x, y)
```

---

## 🔹 Example 26 — Pattern Printing (Stars)
```python
n = int(input("Enter number of rows: "))
for i in range(0, n):
    for j in range(0, i + 1):
        print("*", end=" ")
    print()
```

🧠 Output (n=5):
```
*
* *
* * *
* * * *
* * * * *
```

---

## 🔹 Example 27 — Increasing Number Pattern
```python
n = 6
for i in range(1, n):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

🧠 Output:
```
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

---

## 🔹 Example 28 — Decreasing Number Pattern
```python
n = 6
for i in range(0, n):
    for j in range(i + 1, n):
        print(j, end=" ")
    print()
```

🧠 Output:
```
1 2 3 4 5
2 3 4 5
3 4 5
4 5
5
```

---

## 🔹 Example 29 — Loop Control Statements
```python
# break
for i in range(1, 6):
    if i == 4:
        break
    print(i)  # 1 2 3

# continue
for i in range(1, 6):
    if i == 3:
        continue
    print(i)  # 1 2 4 5

# else in for
for i in range(3):
    print(i)
else:
    print("Loop finished successfully")
```

## 🔹 Summary
```text
+------------------+-----------------------------------------------+
| Loop Type        | Description                                   |
+------------------+-----------------------------------------------+
| while            | Runs until condition becomes False            |
| for              | Iterates over sequence                        |
| break            | Exits loop immediately                        |
| continue         | Skips current iteration                       |
| else (in loops)  | Runs only if loop didn’t break                |
| Nested loops     | Loop inside another loop                      |
+------------------+-----------------------------------------------+
```

---

✨ *“Loops bring repetition, automation, and rhythm to your code — master them!”* 🔁🐍
