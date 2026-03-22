## Project No: 0001
## Project Name: WelcomeProject

**Objective**
This project focuses on understanding **basic Django Project Creation and structure only**.

---
# Step 1 — Create Django Project
```bash
django-admin startproject WelcomeProject
```
---
# Project Structure
After creating the project, the structure will look like this:
```
WelcomeProject/
│
├── manage.py
│
└── WelcomeProject/
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    ├── asgi.py
    └── wsgi.py
```

---
# Step 2 — Enter Into the Project Folder
```bash
cd WelcomeProject
```

---
# Step 3 — Start Development Server
```bash
python manage.py runserver
```

---
# Step 4 — Open in Browser
```
http://127.0.0.1:8000/
```

---
# Default Output
You will see the **default Django welcome page**:
```
The install worked successfully! Congratulations!
```
---
# Concepts Covered
- Django Project Creation
- Project Structure Understanding
- manage.py usage
- Running Development Server
- Default Django Page