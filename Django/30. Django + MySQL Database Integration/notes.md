## Project No: 0025
## Topic: Connect Django with MySQL Database

**Objective**
This project focuses on connecting a Django project with MySQL database.

---
# Step 1 — Create Django Project
```bash
django-admin startproject Project
cd Project
```

---
# Step 2 — Install MySQL Driver
```bash
pip install mysqlclient
```

---
# Alternative (If Error)
```bash
pip install PyMySQL
```

---
# If using PyMySQL
📄 Project/__init__.py
```python
import pymysql
pymysql.install_as_MySQLdb()
```

---
# Step 3 — Create Database in MySQL
```sql
CREATE DATABASE mydb;
```

---
# Step 4 — Configure settings.py
📄 Project/settings.py

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
# Step 5 — Apply Migrations
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
# Step 8 — Verify in MySQL
```sql
USE mydb;
SHOW TABLES;
```

---
# Output
Tables created:
- auth_user
- django_admin_log
- django_session

---
# Flow
```
Django → ORM → MySQL Database
```

---
# Important Notes
- Port → 3306  
- ENGINE → mysql backend  
- Database must exist before migration  

---
# Concepts Covered
- MySQL Integration
- Database Configuration
- Django ORM with MySQL