## Project No: 0022
## Project Name: Project (contact_us)

**Objective**
This project focuses on:
- Creating Contact Us page
- Collecting user input
- Saving data into database
- Using Model + View + Template

---
# Step 1 — Create Project
```bash
django-admin startproject Project
cd Project
```

---
# Step 2 — Create App
```bash
python manage.py startapp contact_us
```

---
# Step 3 — Register App
📄 Project/settings.py
```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.staticfiles',
    'contact_us',
]
```

---
# Step 4 — Create Templates Folder
```bash
mkdir templates
```

---
# Step 5 — Configure Templates
```python
import os

'DIRS': [os.path.join(BASE_DIR, 'templates')],
```

---
# Step 6 — Create Templates
📄 templates/contact_us.html  
📄 templates/success.html  

---
# Step 7 — Create Model
📄 contact_us/models.py

```python
from django.db import models
from datetime import datetime

class Contact(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=datetime.now)

    class Meta:
        verbose_name = 'Contact'
        verbose_name_plural = 'Contacts'

    def __str__(self):
        return self.email
```

---
# Step 8 — Register Model in Admin
📄 contact_us/admin.py
```python
from django.contrib import admin
from .models import Contact

admin.site.register(Contact)
```

---
# Step 9 — Apply Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

---
# Step 10 — Create Views
📄 contact_us/views.py
```python
from django.shortcuts import render, redirect
from .models import Contact

def contactus(request):

    if request.method == 'POST':

        name = request.POST.get('name', '').strip()
        email = request.POST.get('email', '').strip()
        message = request.POST.get('message', '').strip()

        contact = Contact(name=name, email=email, message=message)
        contact.save()

        return redirect('success')

    return render(request, 'contact_us.html')


def success(request):
    return render(request, 'success.html')
```

---
# Step 11 — Create App URLs
📄 contact_us/urls.py
```python
from django.urls import path
from .views import contactus, success

urlpatterns = [
    path('', contactus, name='contactus'),
    path('success/', success, name='success'),
]
```

---
# Step 12 — Configure Project URLs
📄 Project/urls.py
```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contact_us.urls')),
]
```

---
# Step 13 — Create HTML Form
📄 templates/contact_us.html
```html
{% load static %}

<h2>Contact Us</h2>

<form action="{% url 'contactus' %}" method="POST">
    {% csrf_token %}

    <input type="text" name="name" placeholder="Enter Name" required><br><br>
    <input type="email" name="email" placeholder="Enter Email" required><br><br>
    <textarea name="message" placeholder="Enter Message"></textarea><br><br>

    <button type="submit">Submit</button>
</form>
```

---
# Step 14 — Success Page
📄 templates/success.html
```html
<h2>Message Sent Successfully!</h2>

<a href="{% url 'contactus' %}">Go Back</a>
```

---
# Step 15 — Create Superuser (Optional)
```bash
python manage.py createsuperuser
```

---
# Step 16 — Run Server
```bash
python manage.py runserver
```

---
# Output
```
http://127.0.0.1:8000/
```

---
# Check Data
```
http://127.0.0.1:8000/admin/
```

---
# Flow
```
User → Form → View → Model → Database → Success Page
```

---
# Important Concepts
## Get Form Data
```python
request.POST.get()
```

---
## Save Data
```python
contact.save()
```

---
## CSRF Protection
```html
{% csrf_token %}
```

---
## Redirect (PRG Pattern)
```python
return redirect('success')
```

---
# Concepts Covered
- HTML Form + Django Integration
- POST Data Handling
- Saving Data to Database
- Model + View + Template Integration
- Admin Panel Verification