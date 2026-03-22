## Project No: 0003
## Project Name: WelcomeProject

**Objective**
This project focuses on understanding **Project Level Views using `render()` and Templates**.

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
# Step 3 — Create Templates Folder
Create a folder at project level:
```
WelcomeProject/
└── templates/
```

---
# Step 4 — Configure Templates in settings.py
Open:
```
WelcomeProject/WelcomeProject/settings.py
```

Modify `DIRS`:
```python
import os
'DIRS': [os.path.join(BASE_DIR, 'templates')],
```

---
# Step 5 — Create HTML File
Inside templates folder:
```
templates/
└── t1.html
```

### HTML Content
```html
<b>Hello, {{ name }}</b>
```

---
# Step 6 — Create View File
Create:
```
WelcomeProject/views.py
```

---
# Step 7 — Define View Function Using render()
```python
from django.shortcuts import render
def m1(request):
    return render(request, 't1.html', {'name': 'John'})
```

---
# Step 8 — Configure URL Mapping
Open:
```
WelcomeProject/urls.py
```

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
# Step 9 — Start Development Server

```bash
python manage.py runserver
```

---
# Step 10 — Open in Browser
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

- Templates Configuration
- render() Function
- Passing Data to Templates
- Template Variables (`{{ name }}`)
- URL Mapping
- Request → Response Cycle