📅 DAY 1 — Full Setup (From Zero → Running Project)
🎯 Goal of Day 1
By the end, we will:
•	Install Django 
•	Create project + app 
•	Understand folder structure 
•	Run server successfully ✅ 
________________________________________
🪜 STEP 1 — Install Python & Django
✅ Check Python
python --version
👉 If not installed → install Python 3.10+
________________________________________
✅ Install Django
pip install django
Check:
django-admin --version
________________________________________
🪜 STEP 2 — Create Project
django-admin startproject certifacts
👉 This creates:
certifacts/
 ├── certifacts/
 │    ├── __init__.py
 │    ├── settings.py
 │    ├── urls.py
 │    ├── asgi.py
 │    └── wsgi.py
 └── manage.py
________________________________________
🪜 STEP 3 — Go Inside Project
cd certifacts
________________________________________
🪜 STEP 4 — Create App
python manage.py startapp app
👉 Now structure becomes:
certifacts/
 ├── certifacts/
 ├── app/
 │    ├── models.py
 │    ├── views.py
 │    ├── admin.py
 │    ├── apps.py
 └── manage.py
________________________________________
🪜 STEP 5 — Register App
Open:
certifacts/settings.py
Find:
INSTALLED_APPS = [
Add:
'app',
________________________________________
🪜 STEP 6 — Create Templates Folder
Inside project root:
certifacts/
 ├── templates/
Inside templates:
templates/
 ├── student/
 ├── college/
 ├── company/
________________________________________
🪜 Configure Templates
Open settings.py
Find:
'DIRS': [],
Change to:
'DIRS': [BASE_DIR, 'templates'],
________________________________________
🪜 STEP 7 — Create Static Folder
certifacts/
 ├── static/
      ├── css/
      ├── js/
      ├── images/
________________________________________
🪜 Configure Static
In settings.py:
STATIC_URL = 'static/'
Add:
STATICFILES_DIRS = [BASE_DIR, 'static']
________________________________________
🪜 STEP 8— Create First HTML Page
Create:
templates/home.html
Add:
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h1>Certificate Verification System</h1>
</body>
</html>

🪜 STEP 9 — Create First View
Open:
app/views.py
Write:
from django.shortcuts import render

def home(request):
    return render(request, 'home.html')
________________________________________
🪜 STEP 10 — Create URLs (App Level)
Create file:
app/urls.py
Add:
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
]
________________________________________
🪜 STEP 11— Connect Project URLs
Open:
certifacts/urls.py
Modify:
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
]
________________________________________
🪜 STEP 12 — Run Server
python manage.py runserver
👉 Open browser:
http://127.0.0.1:8000/
✅ Output:
Certificate Verification System ________________________________________
✅ END OF DAY 1
✔ Django installed
✔ Project created
✔ App created
✔ Templates + static configured
✔ First page running

