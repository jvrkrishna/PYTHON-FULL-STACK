## Project No: 0027
## Topic: Database Models + User Roles

**Objective**  
This project focuses on creating database models, defining user roles, and storing data using Django Admin Panel.

---
# 📅 DAY 2 — Database Models + User Roles

## 🎯 Goal of Day 2
By the end, we will:
- Understand models (database tables)
- Create Student, College, Company
- Use Admin Panel
- Store data in database

---
# 🧠 Simple Explanation

👉 Yesterday we created structure  
👉 Today we will create data (database)

---
# 🔷 Basic Concept Diagram

    User → Form → View → Model → Database

👉 Explanation:
- Model = Table  
- Each row = Record  

---
# 🪜 STEP 1 — Open models.py

Open:

    app/models.py

---
# 🪜 STEP 2 — Create User Roles Model

Add:

    from django.db import models

    class User(models.Model):
        ROLE_CHOICES = (
            ('student', 'Student'),
            ('college', 'College'),
            ('company', 'Company'),
        )

        name = models.CharField(max_length=100)
        email = models.EmailField()
        password = models.CharField(max_length=100)
        role = models.CharField(max_length=20, choices=ROLE_CHOICES)

        def __str__(self):
            return self.name

---
# 🧠 Explanation

What is ROLE_CHOICES and why do we write it?

ROLE_CHOICES is used to restrict a field to a fixed set of valid values.

Instead of letting users enter anything for role, you are saying:
“The role must be one of these: student, college, or company.”

---
# 🪜 STEP 3 — Create Certificate Model

    class Certificate(models.Model):
        student = models.ForeignKey(User, on_delete=models.CASCADE)
        course = models.CharField(max_length=100)
        grade = models.CharField(max_length=10)
        issued_by = models.CharField(max_length=100)
        certificate_hash = models.CharField(max_length=255)

        def __str__(self):
            return self.course

---
# 🧠 Explanation

👉 Certificate belongs to Student

- ForeignKey → connection between tables  
- Hash → used later for blockchain  

---
# 🪜 STEP 4 — Register Models in Admin

Open:

    app/admin.py

Add:

    from django.contrib import admin
    from .models import User, Certificate

    class UserAdmin(admin.ModelAdmin):
        list_display = ('id', 'name', 'email', 'role')

    admin.site.register(User, UserAdmin)
    admin.site.register(Certificate)

---
# 🪜 STEP 5 — Run Migrations

👉 VERY IMPORTANT STEP

    python manage.py makemigrations
    python manage.py migrate

---
# 🧠 Explanation

- makemigrations → create structure  
- migrate → apply to database  

---
# 🪜 STEP 6 — Create Admin User

    python manage.py createsuperuser

👉 Enter:
- username  
- email  
- password  

---
# 🪜 STEP 7 — Run Server

    python manage.py runserver

👉 Open:
http://127.0.0.1:8000/admin

---
# 🪜 STEP 8 — Add Data in Admin Panel

➤ Add User

- Name: Ravi  
- Role: Student  

➤ Add College

- Name: ABC College  
- Role: College  

➤ Add Company

- Name: TCS  
- Role: Company  

---
➤ Add Certificate

- Student: Ravi  
- Course: B.Tech  
- Grade: A  
- Issued by: ABC College  
- Hash: test123  

---
# 🧠 Explanation of Relationship

    User (Student)
         ↓
    Certificate

👉 One student → many certificates

---
# 🪜 STEP 9 — Show Data Flow

Explain clearly:

- College → Adds Certificate  
- Student → Owns Certificate  
- Company → Verifies Certificate  