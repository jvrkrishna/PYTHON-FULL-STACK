## Project No: 0016
## Topic: Migration, Users, and Superuser in Django
**Objective**
This project focuses on understanding:
- Database Migrations
- Creating Users and Superusers
- Django Admin Panel

---
# Step 1 — What is Migration?
Migration is Django’s way of applying changes from **models → database**.

It keeps the database schema in sync with Django models.

---
# Step 2 — Migration Commands
## Create Migration Files
```bash
python manage.py makemigrations
```

👉 Creates migration files based on model changes

---
## Apply Migrations
```bash
python manage.py migrate
```

👉 Applies migrations to database  
👉 Creates tables like:
- auth_user  
- django_admin_log  
- sessions  

---
# Example
```bash
python manage.py makemigrations
```

Output:
```
No changes detected
```

👉 No new model changes

---
```bash
python manage.py migrate
```

👉 Applies all pending migrations successfully

---
# Step 3 — Create Superuser

```bash
python manage.py createsuperuser
```

---
## Example Input
```
Username: rk
Email: rk@gmail.com
Password: 1234
```

---
⚠️ Password Rules:

- Minimum 8 characters
- Not common password
- Not fully numeric

👉 You can bypass using:
```
y
```

---
✅ Superuser created successfully

---
# Step 4 — Run Server
```bash
python manage.py runserver
```

---
# Step 5 — Open Admin Panel
```
http://127.0.0.1:8000/admin/
```

---
# Step 6 — Login
Use credentials:
```
Username: rk
Password: 1234
```

---
# Output
- Admin dashboard opens
- You can manage:
  - Users
  - Groups
  - Permissions

---
# Concepts Covered
- Migration (Model → Database)
- makemigrations
- migrate
- Superuser Creation
- Django Admin Panel

---
# Flow
```
Model → makemigrations → migrate → Database Tables
```

---
# Important Tables Created
- auth_user
- auth_group
- django_admin_log
- django_session

---
# Summary
- Migration → sync models with database
- makemigrations → create migration file
- migrate → apply changes
- createsuperuser → create admin user
- Admin Panel → manage project data