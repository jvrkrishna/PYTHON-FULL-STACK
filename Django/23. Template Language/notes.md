## Project No: 0015
## Project Name: project

**Objective**
This project focuses on understanding **Django Template Language (DTL)** including:
- Template Inheritance
- Template Tags `{% %}`
- Template Variables `{{ }}`
- Navigation using `{% url %}`
- Template Filters
- include tag
- with tag
- csrf_token
- Loop & Condition
- Reusable templates

---
# 🔹 1. Template Inheritance
## Code
```html
{% extends "base.html" %}
```

## Meaning
👉 One template **inherits layout** from another template

---
## Why Use
- Avoid repeating code
- Reuse common layout (navbar, header, footer)
- Follow DRY principle

---
## Flow
```
base.html → layout  
child.html → content
```

---
## Example
### base.html
```html
<h1>Header</h1>
{% block content %}{% endblock %}
```

### child.html
```html
{% extends "base.html" %}

{% block content %}
<p>This is page content</p>
{% endblock %}
```

---
# 🔹 2. Template Variables
## Code
```html
{{ name }}
```

## Meaning
👉 Displays data from view
---
## From View
```python
data = {'name': 'John'}
```

---
## Output
```
John
```

---
# 🔹 3. Template Filters
👉 Filters modify data before displaying

---
## Examples
### Uppercase
```html
{{ name|upper }}
```
👉 JOHN

---
### Length
```html
{{ marks|length }}
```
👉 3

---
### Default Value
```html
{{ name|default:"Guest" }}
```
👉 Guest (if empty)

---
## Format
```
variable | filter
```

---
# 🔹 4. Loop (for loop)
## Code
```html
{% for m in marks %}
    {{ m }}
{% endfor %}
```

---
## From View
```python
marks = [80, 90, 70]
```

---
## Output
```
80
90
70
```

---
## Use
👉 Display lists (students, products, posts)

---
# 🔹 5. Condition (if else)
## Code
```html
{% if status %}
    Active
{% else %}
    Inactive
{% endif %}
```

---
## From View
```python
status = True
```

---
## Output
```
Active
```

---
# 🔹 6. include Tag
## Code
```html
{% include "header.html" %}
```

---
## Meaning
👉 Inserts another template inside current template

---
## Why
- Reuse UI components
- Reduce duplicate code

---
## Example
```
header.html → common UI  
at1.html → include header
```

---
# 🔹 7. with Tag
## Code
```html
{% with total=marks|length %}
    {{ total }}
{% endwith %}
```

---
## Meaning
👉 Creates temporary variable

---
## Why
- Avoid repeating calculations
- Improve readability

---
# 🔹 8. csrf_token
## Code
```html
{% csrf_token %}
```

---
## Meaning
👉 Adds security token to form

---
## Why
- Prevents CSRF attacks

---
## Rule
```
Every POST form must include csrf_token
```

---
# 🔹 9. URL Tag
## Code
```html
{% url 'home' %}
```

---
## Meaning
👉 Generates dynamic URL

---
## Why
- Avoid hardcoding URLs
- Easy to manage changes

---
## Example
```html
<a href="{% url 'home' %}">Home</a>
```

---
# 🔥 Full Flow
```
View → Data → Template → DTL Logic → Output
```

---
# 💡 One-Line Memory Tricks
```
{{ }} → display data  
{% %} → logic  
| → filter  
include → reuse  
with → temp variable  
csrf → security  
extends → layout reuse
```

---
# 🚀 Final Understanding
```
DTL = HTML + Logic (without writing Python in HTML)
```

---
# 🎯 Interview Answer
**What is Django Template Language?**

👉 DTL allows us to create dynamic HTML pages using variables, filters, and logic without writing Python code directly in templates.

---
# 🚀 Step 1 — Create Project
```bash
django-admin startproject AdvancedDTLProject
cd AdvancedDTLProject
```

---
# 🚀 Step 2 — Create App
```bash
python manage.py startapp app1
```

---
# 🚀 Step 3 — Register App
📄 AdvancedDTLProject/settings.py
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.staticfiles',
    'app1',
]
```

---
# 🚀 Step 4 — Create Templates Folder
```bash
mkdir templates
```

---
# 🚀 Step 5 — Configure Templates
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
# 🚀 Step 6 — Create Base Template (Reusable Layout)
📄 templates/base.html
```html
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Site{% endblock %}</title>
</head>

<body>
<h2>My Website</h2>

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
# 🚀 Step 7 — Create Reusable Template (include)
📄 templates/header.html
```html
<h1>Welcome Header</h1>
<hr>
```

---
# 🚀 Step 8 — Create Main Template (All Concepts)
📄 templates/at1.html
```html
{% extends "base.html" %}

{% block title %}Home{% endblock %}

{% block content %}

{% include "header.html" %}

<h3>Hello {{ name|upper }}</h3>

<p>Default Name: {{ name|default:"Guest" }}</p>

<h4>Marks:</h4>
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
# 🚀 Step 9 — Create View
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
# 🚀 Step 10 — Create App URLs
📄 app1/urls.py
```python
from django.urls import path
from .views import home

urlpatterns = [
    path('', home, name='home'),
]
```

---
# 🚀 Step 11 — Connect App URLs
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
# 🚀 Step 12 — Run Server
```bash
python manage.py runserver
```

---
# 🌐 Output
```
http://127.0.0.1:8000/
```
