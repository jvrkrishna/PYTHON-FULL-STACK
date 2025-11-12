# 🧩 Class Relationships in Python (HAS-A and IS-A)

---

## 🔹 What is a Relationship in OOP?

> A **relationship** is used to access the members of one class inside another class.  
> It allows one class to use another class’s data or behavior.

The **main advantage** of relationships is **code reusability** —  
you can use one class’s functionality inside another without duplicating code.

---

### 🧠 Types of Relationships

| Type | Also Known As | Description |
|------|----------------|--------------|
| **HAS-A Relationship** | Composition / Containership | One class contains another class as a member. |
| **IS-A Relationship** | Inheritance | One class derives from another class. |

---

### 🧩 Real-World Examples

| Example | Relationship Type |
|----------|-------------------|
| Employee **HAS-A** Car | HAS-A (Composition) |
| Employee **IS-A** Person | IS-A (Inheritance) |
| Car **HAS-A** Engine | HAS-A (Composition) |
| Car **IS-A** Vehicle | IS-A (Inheritance) |

---

## 🔹 1. HAS-A Relationship (Composition)

### 📘 Definition:
A **HAS-A Relationship** represents a **composition** or **containership** between two classes —  
that is, one class **contains** another class as a part of its structure.

> It models “part-of” or “has-a” relationships.  
> Example: A **College HAS-A Department**, or a **Person HAS-A Laptop**.

---

### ✅ Key Points

| Feature | Description |
|----------|--------------|
| Relationship | One class contains another class |
| Also Called | Composition or Containership |
| Example | A person “has a” car or laptop |
| Lifespan | If container is destroyed, contained objects are also destroyed |
| Advantage | Code reusability, modular structure, easy maintenance |

---

### 🧩 Example: Employee HAS-A Laptop

```python
class Car:
    def __init__(self, cname, ccolor, cprice):
        self.cname = cname
        self.ccolor = ccolor
        self.cprice = cprice

    def Car_details(self, ename):
        print(f'{ename} Car Name is {self.cname}')
        print(f'{ename} Car color is {self.ccolor}')
        print(f'{ename} Car Price is {self.cprice}')
        print("* " * 20)


class Laptop:
    def __init__(self, lname, lcolor, lprice):
        self.lname = lname
        self.lcolor = lcolor
        self.lprice = lprice

    def Laptop_details(self, ename):
        print(f'{ename} Laptop Name is {self.lname}')
        print(f'{ename} Laptop color is {self.lcolor}')
        print(f'{ename} Laptop Price is {self.lprice}')
        print("* " * 20)


class Person:
    def __init__(self, ename, eid, eaddress):
        self.ename = ename
        self.eid = eid
        self.eaddress = eaddress
        self.l = Laptop("Lenovo", "Grey", "40K")  # Composition (Person HAS-A Laptop)

    def Emp_details(self):
        print(f'Emp Name is {self.ename}')
        print(f'Emp ID is {self.eid}')
        print(f'Emp Address is {self.eaddress}')
        self.l.Laptop_details(self.ename)  # Calling inner class method


# Example usage
p1 = Person("Sekhar", 1001, "Guntur")
p1.Emp_details()
```

---

🧾 **Output:**
```
Emp Name is Sekhar
Emp ID is 1001
Emp Address is Guntur
Sekhar Laptop Name is Lenovo
Sekhar Laptop color is Grey
Sekhar Laptop Price is 40K
```

---

### 🧠 Explanation:

- `Person` class **contains** an instance of `Laptop` inside it.
- This forms a **HAS-A relationship** because:
  - Person **has a** laptop.
  - Laptop’s lifecycle depends on the Person’s lifecycle.

---

### 🧩 Example: Car HAS-A Engine

```python
class Engine:
    def __init__(self, horsepower):
        self.horsepower = horsepower

    def start(self):
        print(f"Engine with {self.horsepower} HP started")

class Car:
    def __init__(self, brand, engine_power):
        self.brand = brand
        self.engine = Engine(engine_power)  # Composition (Car HAS-A Engine)

    def drive(self):
        print(f"Driving {self.brand} car")
        self.engine.start()  # Accessing Engine class method

# Example
c1 = Car("Tesla", 400)
c1.drive()
```

🧾 **Output:**
```
Driving Tesla car
Engine with 400 HP started
```

---

## 🔹 2. Difference Between HAS-A and IS-A

| Feature | HAS-A Relationship | IS-A Relationship |
|----------|--------------------|-------------------|
| Relationship Type | Composition | Inheritance |
| Definition | One class **contains** another class | One class **inherits** from another class |
| Example | Car **HAS-A** Engine | Car **IS-A** Vehicle |
| Dependency | Inner object depends on outer object | Child depends on parent class |
| Reusability | Uses existing class objects | Uses parent class properties and methods |
| Syntax | Containment (create object inside another class) | `class Child(Parent):` |
| Example Code | `self.engine = Engine()` | `class Car(Vehicle):` |

---

## 🧠 Key Takeaways

- **HAS-A Relationship (Composition)** allows **object reusability** by containing one object inside another.
- The **outer class (container)** holds a **reference to another class (contained)**.
- If the outer class is destroyed, the inner objects usually become inaccessible.
- It’s a foundation for **modular OOP design**.

---

## 🧩 Real-World Analogy

| Real-World Example | Explanation |
|---------------------|-------------|
| College HAS-A Department | Department exists only within a college |
| Person HAS-A Laptop | Laptop belongs to a person |
| Car HAS-A Engine | Engine cannot exist independently of car in this context |
| Company HAS-A Employee | Company composition example |

---

✨ *“Composition (HAS-A) builds classes like building blocks — small, reusable, and interconnected.”* 🧱🐍
