## Project No: 0025
## Topic: Connect Django with MySQL Database

**Objective**
This project focuses on:
- Connecting Django with MySQL
- Replacing SQLite with MySQL
- Running migrations on MySQL

---
# Step 1 — Install MySQL
Install MySQL Server:
👉 Download from official site  
👉 Install and set username & password  

---
# Step 2 — Install MySQL Client Library
```bash
pip install mysqlclient
```

---
# If Error Occurs (Alternative)
```bash
pip install PyMySQL
```

Then add in project:
📄 project/__init__.py
```python
import pymysql
pymysql.install_as_MySQLdb()
```

---
# Step 3 — Create Database in MySQL
Login to MySQL:
```sql
CREATE DATABASE mydb;
```

---
# Step 4 — Configure settings.py
📄 project/settings.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mydb',
        'USER': 'root',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

---
# Step 5 — Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

---
# Step 6 — Create Superuser
```bash
python manage.py createsuperuser
```

---
# Step 7 — Run Server
```bash
python manage.py runserver
```

---
# Step 8 — Verify Tables in MySQL
Open MySQL:
```sql
USE mydb;
SHOW TABLES;
```

---
# Output
You will see tables like:
- auth_user
- django_admin_log
- django_session

---
# Flow
```
Django Models → ORM → MySQL Database
```

---
# Important Concepts
## Engine
```python
'django.db.backends.mysql'
```

---
## Default Port
```
3306
```

---
# Common Errors & Fix
## Error: mysqlclient install failed
✔ Install:
```bash
pip install PyMySQL
```

---
## Error: Access denied
✔ Check:
- username
- password
- database name

---
# Concepts Covered
- MySQL Setup
- Database Configuration
- Django ORM with MySQL
- Production-level database usage