## Project No: 0015
## Project Name: AdvancedDTLProject

**Objective**
This project focuses on:
- Template Filters
- include tag
- with tag
- csrf_token
- Template Inheritance
- Template Variables & Tags

---
# Step 1 — Create Project
```bash
django-admin startproject AdvancedDTLProject
cd AdvancedDTLProject
```
---
# Step 2 — Create App
```bash
python manage.py startapp app1
```
---
# Step 3 — Register App
📄 AdvancedDTLProject/settings.py
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.staticfiles',
    'app1',
]
```
---
# Step 4 — Create Templates Folder
```bash
mkdir templates
```
---
# Step 5 — Configure Templates
📄 settings.py
```python
import os
TEMPLATES = [
    {
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
    },
]
```
---
# Step 6 — Create Base Template
📄 templates/base.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
<nav>
    <a href="{% url 'home' %}">Home</a>
</nav>

<hr>

{% block content %}
{% endblock %}

</body>
</html>
```
---
# Step 7 — Create Header (include)
📄 templates/header.html
```html
<h1>My Website Header</h1>
<hr>
```
---
# Step 8 — Create Main Template
📄 templates/at1.html
```html
{% extends "base.html" %}
{% block title %}Home{% endblock %}
{% block content %}
{% include "header.html" %}
<h2>Hello {{ name|upper }}</h2>
<p>Default Name: {{ name|default:"Guest" }}</p>
<ul>
{% for m in marks %}
    <li>{{ m }}</li>
{% endfor %}
</ul>

{% with total=marks|length %}
    <p>Total Subjects: {{ total }}</p>
{% endwith %}

{% if status %}
    <p>Status: Active</p>
{% else %}
    <p>Status: Inactive</p>
{% endif %}

<form method="POST">
    {% csrf_token %}
    <button type="submit">Submit</button>
</form>

{% endblock %}
```
---
# Step 9 — Create View
📄 app1/views.py
```python
from django.shortcuts import render

def home(request):

    data = {
        'name': 'John',
        'marks': [80, 90, 70],
        'status': True
    }

    return render(request, 'at1.html', data)
```
---
# Step 10 — Create App URLs
📄 app1/urls.py
```python
from django.urls import path
from .views import home
urlpatterns = [
    path('', home, name='home'),
]
```
---
# Step 11 — Connect App URLs
📄 AdvancedDTLProject/urls.py
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app1.urls')),
]
```
---
# Step 12 — Run Server
```bash
python manage.py runserver
```
---
# Output
```
http://127.0.0.1:8000/
```
---
# Output Features
- Name shown in uppercase ✅
- Default value applied ✅
- Loop displayed ✅
- Count shown using with ✅
- Condition working ✅
- Header reused (include) ✅
- Form secured with csrf_token ✅

---
# Advanced DTL Concepts
## Filters
```html
{{ name|upper }}
{{ marks|length }}
{{ name|default:"Guest" }}
```
---
## include
```html
{% include "header.html" %}
```
---
## with
```html
{% with total=marks|length %}
{% endwith %}
```
---
## csrf_token
```html
{% csrf_token %}
```
---
## Template Inheritance
```html
{% extends "base.html" %}
```
---
# Flow
```
View → Data → Template → Filters → Output
```
---
# Concepts Covered
- Template Inheritance
- Filters
- include
- with
- csrf_token
- Dynamic Rendering