## Project No: 0028
## Topic: Views + Forms + Frontend Flow

**Objective**  
This project focuses on connecting frontend with backend, creating forms, inserting data from UI, and implementing login with role-based dashboards.

---
# 📅 DAY 3 — Views + Forms + Frontend Flow

## 🎯 Goal of Day 3
By the end, we will:
- Connect Frontend (HTML) ↔ Backend (Views)
- Create Forms
- Perform Data Insert & Display
- Build basic Login + Dashboard flow

---
# 🧠 Simple Concept

👉 Yesterday we stored data manually in admin  
👉 Today users will enter data from web pages  

---
# 🔷 Core Flow Diagram

    User → Form → View → Model → Database → View → Template → User

---
# 🪜 STEP 1 — Create Home Page Navigation

Open:

    templates/home.html

Update:

    <h1>Certificate Verification System</h1>

    <a href="/register/">Register</a><br>
    <a href="/login/">Login</a>

---
# 🪜 STEP 2 — Create Register Page

Create file:

    templates/register.html

Add:

    <h2>Register</h2>

    <form method="POST">
        {% csrf_token %}
        Name: <input type="text" name="name"><br>
        Email: <input type="email" name="email"><br>
        Password: <input type="password" name="password"><br>

        Role:
        <select name="role">
            <option value="student">Student</option>
            <option value="college">College</option>
            <option value="company">Company</option>
        </select><br>

        <button type="submit">Register</button>
    </form>

---
# 🪜 STEP 3 — Create Register View

Open:

    app/views.py

Add:

    from django.shortcuts import render, HttpResponse
    from .models import User

    def register(request):
        if request.method == "POST":
            name = request.POST['name']
            email = request.POST['email']
            password = request.POST['password']
            role = request.POST['role']

            User.objects.create(
                name=name,
                email=email,
                password=password,
                role=role
            )
            return HttpResponse("Registered Successfully")

        return render(request, 'register.html')

---
# 🪜 STEP 4 — Add URL

Open:

    app/urls.py

Add:

    path('register/', views.register),

---
# 🪜 STEP 5 — Create Login Page

Create:

    templates/login.html

Add:

    <h2>Login</h2>

    <form method="POST">
        {% csrf_token %}
        Email: <input type="email" name="email"><br>
        Password: <input type="password" name="password"><br>

        <button type="submit">Login</button>
    </form>

---
# 🪜 STEP 6 — Create Login View

    def login(request):
        if request.method == "POST":
            email = request.POST['email']
            password = request.POST['password']

            user = User.objects.filter(email=email, password=password).first()

            if user:
                return HttpResponse(f"Welcome {user.name} ({user.role})")
            else:
                return HttpResponse("Invalid Login")

        return render(request, 'login.html')

---
# 🪜 STEP 7 — Add Login URL

    path('login/', views.login),

---
# 🪜 STEP 8 — Create Dashboard Pages

Create folders:

    templates/student/
    templates/college/
    templates/company/

Example: Student Dashboard

    templates/student/dashboard.html

    <h2>Student Dashboard</h2>
    <p>Welcome Student</p>

---
# 🪜 STEP 9 — Role-Based Redirect

Update login view:

    def login(request):
        if request.method == "POST":
            email = request.POST['email']
            password = request.POST['password']

            user = User.objects.filter(email=email, password=password).first()

            if user:
                if user.role == 'student':
                    return render(request, 'student/dashboard.html')
                elif user.role == 'college':
                    return render(request, 'college/dashboard.html')
                elif user.role == 'company':
                    return render(request, 'company/dashboard.html')
            else:
                return HttpResponse("Invalid Login")

        return render(request, 'login.html')

---
# 🧠 Explanation

👉 Same login → different dashboards based on role

---
# 🪜 STEP 10 — Test Everything

    python manage.py runserver

---
# 🧪 Demo Flow

1. Register as Student  
2. Login → Student dashboard  
3. Register as College  
4. Login → College dashboard  

---
# ✅ END OF DAY 3

✔ Forms created  
✔ Data inserted via UI  
✔ Login system working  
✔ Role-based dashboards working  