# ⚙️ Python Multithreading

## 🧩 Process

**Definition:**  
A process is a program in execution. When we start any application, the operating system creates a process.

**Key Points:**
- Each process runs independently with its own memory space.
- When you open multiple apps like Notepad, Word, and Chrome → OS creates 3 different processes.

---

## 🧩 Thread

**Definition:**  
A thread is the smallest unit of a process. Threads share the same memory space within the process.

**Key Points:**
- Threads run concurrently inside a process.
- Used for performing multiple operations simultaneously.

---

## 🧩 Multitasking

**Definition:**  
Doing multiple tasks simultaneously is called *multitasking.*

### Types of Multitasking
1. **Process-Based Multitasking**
   - Each task is an independent process.
   - Example: Running MS Word and Chrome at the same time.

2. **Thread-Based Multitasking**
   - Multiple threads run within a single process.
   - Example: Browser downloading files while rendering the page.

---

## 🧩 Multithreading

**Definition:**  
Breaking down a large task into smaller sub-tasks and executing them simultaneously.

**Benefits:**
- Better performance  
- Faster execution  
- Efficient CPU utilization

**Module Required:**  
```python
import threading
```

---

## 🧩 Main Thread

When a Python program starts:
- Python Virtual Machine (PVM) creates one thread automatically called the **MainThread**.
- Every Python program has at least one thread — the **MainThread**.

**Check Current Thread:**
```python
import threading
print(threading.current_thread())
```

---

## 🧩 Example — Current Thread Info

```python
import threading
print(1)
print(2)
print(3)
print(threading.current_thread())

for i in range(5):
    print("Rk")

print(threading.current_thread().name)   # Thread name
print(threading.current_thread().ident)  # Thread ID
print(threading.current_thread().is_alive())  # Check if active
```

---

## 🧩 Without Multithreading (Single Thread)

```python
def sample1():
    for i in range(3):
        print("Rama")

def sample2():
    for i in range(3):
        print("Seetha")

sample1()
sample2()
```

🧠 **Explanation:**  
Both functions run sequentially under the **MainThread**.

---

## 🧩 With Multithreading

```python
from threading import Thread

def sample1():
    for i in range(5):
        print("Rama")

def sample2():
    for i in range(5):
        print("Seetha")

t1 = Thread(target=sample1)
t1.start()

t2 = Thread(target=sample2)
t2.start()
```

🧠 **Explanation:**  
There are 3 threads:
- **MainThread** executes main code.  
- **t1** executes `sample1()`  
- **t2** executes `sample2()`  

Output order may vary because threads run concurrently.

---

## 🧩 Getting Thread Information

```python
from threading import *

print('importing: ', current_thread().name)

def sample1():
    print('sample1(): ', current_thread().name)
    for i in range(5):
        print("Rama")

def sample2():
    print('sample2(): ', current_thread().name)
    for i in range(5):
        print("Seetha")

t1 = Thread(target=sample1)
t1.start()
print('t1.start(): ', current_thread().name)

t2 = Thread(target=sample2)
t2.start()
print('t2.start(): ', current_thread().name)
```

---

## 🧩 Thread Count Information

```python
from threading import *

def sample1():
    for i in range(5):
        print("Rama")

def sample2():
    for i in range(5):
        print("Seetha")

t1 = Thread(target=sample1)
t1.start()
print("Thread count:", active_count())

t2 = Thread(target=sample2)
t2.start()
print("Thread count:", active_count())
```

---

## 🧩 Object-Oriented Approach (Single Thread)

```python
class Test:
    def m1(self):
        for i in range(5):
            print("Ram")
    def m2(self):
        for i in range(5):
            print("Seetha")

obj = Test()
obj.m1()
obj.m2()
```

---

## 🧩 Object-Oriented Multithreading

```python
from threading import Thread

class Test:
    def m1(self):
        for i in range(5):
            print("Ram")
    def m2(self):
        for i in range(5):
            print("Seetha")

obj = Test()
t1 = Thread(target=obj.m1)
t1.start()

t2 = Thread(target=obj.m2)
t2.start()
```

---

## 🧩 Multithreading with Arguments

```python
from threading import Thread

class Test:
    def m1(self, name):
        for i in range(5):
            print(name)
    def m2(self):
        for i in range(5):
            print("Seetha")

obj = Test()
t1 = Thread(target=obj.m1, args=('Rama',))
t1.start()

t2 = Thread(target=obj.m2)
t2.start()
```

---

## 🧩 Key Notes

| Concept | Description |
|----------|--------------|
| **Process** | Program in execution |
| **Thread** | Smallest unit of a process |
| **MainThread** | Default thread created by PVM |
| **Multithreading** | Running multiple threads simultaneously |
| **active_count()** | Returns total active threads |
| **current_thread()** | Returns current thread info |
| **start()** | Begins thread execution |
| **is_alive()** | Checks if thread is active |

---

## ✅ Summary

- Each Python program starts with one **MainThread**.
- You can create multiple threads using `threading.Thread()`.
- Thread scheduling is managed by the OS.
- Output order varies due to concurrent execution.

---

## 💡 Advantages of Multithreading

- Increases performance.
- Saves time by parallel execution.
- Useful in I/O-bound programs (e.g., web servers, file I/O).

---

## ⚠️ Disadvantages

- Debugging becomes harder.
- Synchronization issues may arise.
- Too many threads may degrade performance.

---

## 🎯 Conclusion

**Process** → Program in execution.  
**Thread** → Smallest unit of a process.  
**Multithreading** → Running multiple threads simultaneously.

Multithreading improves efficiency but requires careful management.  
