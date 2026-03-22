## Project No: 0015
## Project Name: project

**Objective**
This project focuses on understanding **Django Template Language (DTL)** including:
- Template Inheritance
- Template Tags (`{% %}`)
- Template Variables (`{{ }}`)
- Navigation using `{% url %}`

---
# Step 1 — Install Django
```bash
pip install Django
```

---
# Step 2 — Create Project
```bash
django-admin startproject project
cd project
```

---
# Step 3 — Create Templates & Static Folder
```bash
mkdir templates
mkdir static
```

---
# Step 4 — Configure settings.py
📄 project/settings.py

```python
import os

TEMPLATES = [
    {
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
    },
]

STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
```

---
# Step 5 — Create Base Template
📄 templates/base.html

```html
{% load static %}

<!DOCTYPE html>
<html>
<head>
  <title>{% block title %}My Site{% endblock %}</title>

  <!-- Bootstrap -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

</head>

<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">

    <div class="navbar-header">
      <a class="navbar-brand" href="{% url 'base' %}">HIE TECH SOLUTIONS</a>
    </div>

    <ul class="nav navbar-nav">
      <li><a href="{% url 'home' %}">Home</a></li>
      <li><a href="{% url 'p1' %}">Page 1</a></li>
    </ul>

  </div>
</nav>

{% block content %}
{% endblock %}

</body>
</html>
```

---
# Step 6 — Create Project View
📄 project/views.py

```python
from django.shortcuts import render

def sample(request):
    return render(request, "base.html")
```

---
# Step 7 — Configure Project URLs
📄 project/urls.py
```python
from django.contrib import admin
from django.urls import path, include
from .views import sample

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', sample, name="base"),
    path('', include("app1.urls")),
]
```

---
# Step 8 — Create App
```bash
python manage.py startapp app1
```

---
# Step 9 — Register App
📄 project/settings.py

```python
INSTALLED_APPS = [
    'django.contrib.staticfiles',
    'app1',
]
```

---
# Step 10 — Create App Views
📄 app1/views.py

```python
from django.shortcuts import render

def home(request):
    return render(request, "at1.html")

def page1(request):
    return render(request, "at2.html")
```

---
# Step 11 — App URLs
📄 app1/urls.py

```python
from django.urls import path
from .views import home, page1

urlpatterns = [
    path('home/', home, name="home"),
    path('page1/', page1, name="p1"),
]
```

---
# Step 12 — Create Templates
📄 templates/at1.html

```html
{% extends "base.html" %}

{% block content %}
<b>Hello This is Home Page</b>
{% endblock %}
```

---

📄 templates/at2.html

```html
{% extends "base.html" %}

{% block content %}
<b>Hello This is Page1</b>
{% endblock %}
```

---
# Step 13 — Run Server
```bash
python manage.py runserver
```

---
# Output
```
http://127.0.0.1:8000/
```

- Navbar displayed
- Navigation working
- Template inheritance working

---
# Django Template Language (DTL) Concepts
## 1. Template Inheritance
```html
{% extends "base.html" %}
```

- Reuse layout (navbar, footer)

---
## 2. Blocks
```html
{% block content %}
{% endblock %}
```

- Replace content in child templates

---
## 3. Template Variables
```html
{{ name }}
```

- Display dynamic data

---
## 4. Template Tags
```html
{% url 'home' %}
{% load static %}
```

- Logic inside templates

---
## 5. Navigation
```html
<a href="{% url 'home' %}">
```

- Dynamic URL linking

---

# Flow

```
View → Template → Base Template → Response
```

---
# Concepts Covered
- Template Inheritance
- Blocks
- URL Tag
- Static Tag
- Reusable Layout
- Navigation System