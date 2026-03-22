## Project No: 0002
## Project Name: WelcomeProject

**Objective**
This project focuses on understanding **Project Level Views and URL Mapping using HttpResponse**.

---
# Step 1 — Create Django Project
```bash
django-admin startproject WelcomeProject
```

---
# Project Structure
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
# Step 3 — Create View File
Create a file at project level:
```
WelcomeProject/views.py
```

---
# Step 4 — Define View Function
```python
from django.http import HttpResponse

def m1(request):
    return HttpResponse("Hello, John")
```

---
# Step 5 — Configure URL Mapping
Open:
```
WelcomeProject/urls.py
```

Modify the file:
```python
from django.contrib import admin
from django.urls import path
from .views import m1

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', m1),
]
```

---
# Step 6 — Start Development Server

```bash
python manage.py runserver
```

---
# Step 7 — Open in Browser
```
http://127.0.0.1:8000/
```

---
# Output
```
Hello, John
```

---
# Concepts Covered
- Project Level View Creation
- HttpResponse
- URL Mapping
- Request → Response Cycle
- Running Development Server