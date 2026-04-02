## Project No: 0026
## Topic: Django Project Setup (From Zero → Running Project)

**Objective**  
This project focuses on setting up a Django project from scratch and running the first web page successfully.

---
# Step 1 — Install Python & Django

    python --version
    pip install django
    django-admin --version

---
# Step 2 — Create Django Project

    django-admin startproject certifacts
    cd certifacts

---
# Step 3 — Project Structure

    certifacts/
     ├── certifacts/
     │    ├── __init__.py
     │    ├── settings.py
     │    ├── urls.py
     │    ├── asgi.py
     │    └── wsgi.py
     └── manage.py

---
# Step 4 — Create App

    python manage.py startapp app

---
# Step 5 — App Structure

    app/
     ├── models.py
     ├── views.py
     ├── admin.py
     ├── apps.py

---
# Step 6 — Register App

📄 certifacts/settings.py

    INSTALLED_APPS = [
        'app',
    ]

---
# Step 7 — Create Templates Folder

    certifacts/
     ├── templates/
          ├── student/
          ├── college/
          ├── company/

---
# Step 8 — Configure Templates

📄 certifacts/settings.py

    'DIRS': [BASE_DIR, 'templates'],

---
# Step 9 — Create Static Folder

    certifacts/
     ├── static/
          ├── css/
          ├── js/
          ├── images/

---
# Step 10 — Configure Static Files

📄 certifacts/settings.py

    STATIC_URL = 'static/'
    STATICFILES_DIRS = [BASE_DIR, 'static']

---
# Step 11 — Create First HTML Page

📄 templates/home.html

    <!DOCTYPE html>
    <html>
    <head>
        <title>Home</title>
    </head>
    <body>
        <h1>Certificate Verification System</h1>
    </body>
    </html>

---
# Step 12 — Create View

📄 app/views.py

    from django.shortcuts import render

    def home(request):
        return render(request, 'home.html')

---
# Step 13 — Create App URLs

📄 app/urls.py

    from django.urls import path
    from . import views

    urlpatterns = [
        path('', views.home),
    ]

---
# Step 14 — Connect Project URLs

📄 certifacts/urls.py

    from django.contrib import admin
    from django.urls import path, include

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', include('app.urls')),
    ]

---
# Step 15 — Run Server

    python manage.py runserver

👉 Open browser:  
http://127.0.0.1:8000/

---
# Output

    Certificate Verification System

---
# Flow

    Browser → URL → View → Template → Response

---
# Important Notes

- Always register app in INSTALLED_APPS  
- Templates folder must be configured  
- Static files need proper setup  
- URLs must be connected correctly  

---
# Concepts Covered

- Django Project Structure  
- App Creation  
- Templates & Static Files  
- URL Routing  
- Views Rendering  

🔥 Important Understanding  
Django follows MVT (Model View Template)

🚀 When to Use Django?  
- Web applications  
- Backend APIs  
- Scalable systems  

⚡ Pro Tip (Interview)  
👉 Why Django?  
- Fast development  
- Built-in admin panel  
- Secure & scalable  