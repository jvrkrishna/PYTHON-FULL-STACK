## Project No: 0029
## Topic: Certificate Upload + Hashing (Blockchain Concept)

**Objective**  
This project focuses on uploading certificates, generating hash values, and understanding how hashing helps in making data tamper-proof.

---
# 📅 DAY 4 — Certificate Upload + Hashing (Blockchain Concept)

## 🎯 Goal of Day 4
By the end, we will:
- Upload certificates from College panel
- Store certificates in database
- Generate hash (digital fingerprint)
- Understand why blockchain is used

---
# 🧠 Simple Explanation

👉 Until now we stored certificates normally  
👉 Today we make them tamper-proof using hashing (blockchain concept)  

---
# 🔷 Core Idea Diagram

    Certificate Data
          ↓
    Generate Hash
          ↓
    Store in Database (Later Blockchain)
          ↓
    Verification using Hash

---
# 🪜 STEP 1 — Create College Dashboard (Upload Link)

Open:

    templates/college/dashboard.html

Add:

    <h2>College Dashboard</h2>

    <a href="/add_certificate/">Add Certificate</a>

---
# 🪜 STEP 2 — Create Add Certificate Page

    templates/college/add_certificate.html

    <h2>Add Certificate</h2>

    <form method="POST">
        {% csrf_token %}
        
        Student Name: <input type="number" name="name"><br>
        Course: <input type="text" name="course"><br>
        Grade: <input type="text" name="grade"><br>
        Issued By: <input type="text" name="issued_by"><br>

        <button type="submit">Upload</button>
    </form>

---
# 🪜 STEP 3 — Create Hash Function (IMPORTANT 🔥)

Open:

    app/views.py

Add at top:

    import hashlib

---
# 🔷 Hash Function

    def generate_hash(data):
        return hashlib.sha256(data.encode()).hexdigest()

---
# 🧠 Explanation

👉 Hash = Unique fingerprint  

Example:

    "Ravi-BTech-A" → a7f5d3e9c1...

👉 Even small change → completely different hash  

---
# 🪜 STEP 4 — Create Add Certificate View

    from .models import Certificate, User

    def add_certificate(request):
        if request.method == "POST":
            name = request.POST['name']
            course = request.POST['course']
            grade = request.POST['grade']
            issued_by = request.POST['issued_by']

            student = User.objects.filter(name=name, role='student').first()

            if not student:
                return HttpResponse("❌ Student not found")

            data = student.name + course + grade + issued_by
            cert_hash = generate_hash(data)

            Certificate.objects.create(
                student=student,
                course=course,
                grade=grade,
                issued_by=issued_by,
                certificate_hash=cert_hash
            )

            return HttpResponse("✅ Certificate Added Successfully")

        return render(request, 'college/add_certificate.html')

---
# 🪜 STEP 5 — Add URL

Open:

    app/urls.py

Add:

    path('add_certificate/', views.add_certificate),

---
# 🪜 STEP 6 — Test Upload

    python manage.py runserver

---
# 🧪 Demo Flow

1. Login as College  
2. Click Add Certificate  
3. Enter:  
   - Student ID  
   - Course  
   - Grade  
4. Submit  

👉 Output:

    Certificate Added with Hash: 98a7c3f...

---
# 🧠 VERY IMPORTANT CONCEPT

## 🔷 Why Hash?

👉 If someone changes grade:

    Original → A → Hash1  
    Modified → B → Hash2 ❌  

👉 So tampering is detected  

---
# 🪜 STEP 7 — Simple Verification Logic

👉 To verify:
- Recalculate hash  
- Compare with stored hash  

---
# 🧠 Blockchain Explanation

👉 Database can be changed ❌  
👉 Blockchain cannot be changed ✅  

👉 We store hash in blockchain so no one can cheat  