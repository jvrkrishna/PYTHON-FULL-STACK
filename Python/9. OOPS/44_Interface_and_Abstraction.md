# 🧩 Interface and Abstraction in Python

---

## 🔹 What is an Interface?

> An **Interface** is a fully abstract class that contains **only abstract methods** and **no concrete methods**.  
> It defines **what** a class must do, but not **how** it should do it.

In Python, interfaces are not explicitly supported like in Java or C#,  
but we can **simulate them** using the **`abc` module** (Abstract Base Classes).

---

### 🧠 Key Points

- If a class contains **only abstract methods**, it is called an **Interface**.  
- An interface defines a **contract** or **blueprint** for child classes.
- Child classes **must implement all** the abstract methods.
- We **cannot create objects** of an interface.
- Interfaces ensure **100% abstraction** (no implementation, only method declarations).

---

### 🧩 Difference Between Class Types

| Type | Abstract Methods | Concrete Methods | Object Creation | Purpose |
|------|------------------|------------------|----------------|----------|
| Normal Class | ❌ None | ✅ Yes | ✅ Possible | Fully implemented class |
| Abstract Class | ✅ Some | ✅ Some | ❌ Not allowed | Partial abstraction |
| Interface | ✅ All | ❌ None | ❌ Not allowed | 100% abstraction |

---

### ✅ Example — Interface in Python
```python
from abc import ABC, abstractmethod

class Test(ABC):
    @abstractmethod
    def m1(self):
        pass

class Child(Test):
    def m1(self):
        print("Hello")

c = Child()
c.m1()
```

🧾 **Output:**
```
Hello
```

✅ **Explanation:**
- `Test` acts as an **interface** because it contains only abstract methods.
- `Child` provides the **implementation** for the abstract method `m1()`.
- The interface (`Test`) cannot be instantiated.

---

### ✅ Example — Real-world Interface Example
```python
from abc import ABC, abstractmethod

class PaymentGateway(ABC):
    @abstractmethod
    def pay(self, amount):
        pass

class PayPal(PaymentGateway):
    def pay(self, amount):
        print(f"Paid ₹{amount} using PayPal")

class RazorPay(PaymentGateway):
    def pay(self, amount):
        print(f"Paid ₹{amount} using RazorPay")

# Using interface
p1 = PayPal()
p2 = RazorPay()
p1.pay(500)
p2.pay(700)
```

🧾 **Output:**
```
Paid ₹500 using PayPal
Paid ₹700 using RazorPay
```

✅ **Explanation:**
- The `PaymentGateway` interface ensures every payment class defines its own `pay()` method.  
- This creates **flexibility** and **scalability**.

---

## 🔹 What is Abstraction?

> **Abstraction** means **hiding the implementation details** and showing only the **essential functionality** to the user.

In simple terms — *“Show what an object does, not how it does it.”*

---

### 🧠 Key Points of Abstraction

- **Purpose:** Hide complex code and expose only necessary operations.
- **Achieved by:** Using **abstract classes** and **interfaces**.
- **Benefit:** Increases security, readability, and reusability.
- **Levels of Abstraction:**
  - **Abstract Class:** 0–100% abstraction  
  - **Interface:** 100% abstraction

---

### ✅ Example — Abstraction using Abstract Class
```python
from abc import ABC, abstractmethod

class Car(ABC):
    @abstractmethod
    def mileage(self):
        pass

    def start(self):
        print("Car started")

class Tesla(Car):
    def mileage(self):
        print("Tesla mileage is 250 miles per charge")

class Suzuki(Car):
    def mileage(self):
        print("Suzuki mileage is 22 km/l")

# Objects
t = Tesla()
s = Suzuki()
t.start()
t.mileage()
s.mileage()
```

🧾 **Output:**
```
Car started
Tesla mileage is 250 miles per charge
Suzuki mileage is 22 km/l
```

✅ **Explanation:**
- `Car` defines the **structure** of car-related behavior.
- Each brand (Tesla, Suzuki) provides its own **implementation**.

---

### ✅ Example — Abstraction using Interface
```python
from abc import ABC, abstractmethod

class RemoteControl(ABC):
    @abstractmethod
    def power_on(self):
        pass
    
    @abstractmethod
    def power_off(self):
        pass

class TV(RemoteControl):
    def power_on(self):
        print("TV is now ON")
    def power_off(self):
        print("TV is now OFF")

class AC(RemoteControl):
    def power_on(self):
        print("AC is now ON")
    def power_off(self):
        print("AC is now OFF")

tv = TV()
ac = AC()
tv.power_on()
tv.power_off()
ac.power_on()
ac.power_off()
```

🧾 **Output:**
```
TV is now ON
TV is now OFF
AC is now ON
AC is now OFF
```

✅ **Explanation:**
- The interface `RemoteControl` defines what operations devices must support.
- Each device (TV, AC) provides its own implementation — **complete abstraction**.

---

## 🔹 Difference Between Abstract Class and Interface

| Feature | Abstract Class | Interface |
|----------|----------------|------------|
| Contains Abstract Methods | ✅ Yes | ✅ Yes |
| Contains Concrete Methods | ✅ Yes | ❌ No |
| Achieves Abstraction | 0–100% | 100% |
| Object Creation | ❌ No | ❌ No |
| Purpose | Partial implementation | Full abstraction (specification only) |
| Implementation in Python | Using `ABC` module | Using `ABC` module |
| Child Responsibility | Implement missing methods | Implement all methods |

---

### 🧠 Summary

- **Interface** → Defines *what* a class should do (no implementation).  
- **Abstract Class** → Defines *what* a class should do and *partly how* it should do it.  
- **Abstraction** → The principle that hides internal complexity and exposes only the needed functionality.

---

✨ *“Abstraction hides complexity — Interface enforces responsibility.”* 🧬🐍
