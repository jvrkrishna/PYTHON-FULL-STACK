## Project No: 0030
## Topic: Certificate Verification System (Hash Comparison)

**Objective**  
This project focuses on verifying certificates using hash comparison and completing the full system flow.

---
# 📅 DAY 5 — Certificate Verification

## 🎯 Goal of Day 5
By the end, we will:
- Verify certificates using hash comparison
- Complete full project flow

---
# 🧠 Simple Recap

👉 Day 4: We created certificate + hash  
👉 Today: We check if certificate is original or fake  

---
# 🔷 Verification Concept Diagram

    Stored Hash (DB / Blockchain)
                ↓
    Recalculate Hash (User Input)
                ↓
    Compare Both
         ↓         ↓
     Match ✅   Not Match ❌

---
# 🪜 STEP 1 — Create Verify Page

Create:

    templates/company/verify.html

Add:

    <h2>Verify Certificate</h2>

    <form method="POST">
        {% csrf_token %}

        Student Name: <input type="text" name="name"><br>
        Course: <input type="text" name="course"><br>
        Grade: <input type="text" name="grade"><br>
        Issued By: <input type="text" name="issued_by"><br>

        <button type="submit">Verify</button>
    </form>

---
# 🪜 STEP 2 — Add Link in Company Dashboard

Open:

    templates/company/dashboard.html

Add:

    <h2>Company Dashboard</h2>

    <a href="/verify/">Verify Certificate</a>

---
# 🪜 STEP 3 — Create Verify View (CORE LOGIC 🔥)

Open:

    app/views.py

Add:

    def verify_certificate(request):
        if request.method == "POST":
            name = request.POST['name']
            course = request.POST['course']
            grade = request.POST['grade']
            issued_by = request.POST['issued_by']

            data = name + course + grade + issued_by
            new_hash = generate_hash(data)

            cert = Certificate.objects.filter(
                certificate_hash=new_hash
            ).first()

            if cert:
                return HttpResponse("✅ Certificate is VALID")
            else:
                return HttpResponse("❌ Certificate is FAKE")

        return render(request, 'company/verify.html')

---
# 🪜 STEP 4 — Add URL

Open:

    app/urls.py

Add:

    path('verify/', views.verify_certificate),

---
# 🪜 STEP 5 — Run Project

    python manage.py runserver

---
# 🧪 FINAL DEMO FLOW

## 🔷 Step-by-Step

1️⃣ Register Users  
- Student  
- College  
- Company  

---
2️⃣ Login as College  
- Add Certificate  

---
3️⃣ Copy Details  

Example:

    Name: Ravi
    Course: B.Tech
    Grade: A
    Issued By: ABC College

---
4️⃣ Login as Company  
- Go to Verify Page  
- Enter same details  

👉 Result:

    ✅ Certificate is VALID

---
5️⃣ Change Data (Test Fake)

    Grade: B (changed)

👉 Result:

    ❌ Certificate is FAKE

---
# 🧠 Final Concept

👉 If data is same → hash same → valid  
👉 If data changed → hash different → fake  

---
# 🔷 Full System Diagram

    College → Upload Certificate
            ↓
    Generate Hash
            ↓
    Store in DB (Blockchain concept)
            ↓
    Company → Verify
            ↓
    Recalculate Hash
            ↓
    Compare → VALID / FAKE

---
# 🎓 Viva Questions (IMPORTANT)

❓ What is Blockchain?  
👉 Distributed secure storage system  

❓ What is Hash?  
👉 Unique digital fingerprint  

❓ Why use Blockchain?  
👉 Prevent data tampering  

❓ What happens if data changes?  
👉 Hash changes → verification fails  

❓ Why Django?  
👉 Fast, secure backend framework  

---
# 🧪 Mini Challenge (For Students)

✔ Add 3 certificates  
✔ Verify all  
✔ Try fake modification  

---
# 🚀 Optional Improvements

- QR code verification  
- Real blockchain (Ganache + Solidity)  
- Email alerts  
- File upload (PDF certificate)  

---
# 🎯 FINAL PROJECT SUMMARY

👉 This system allows colleges to upload certificates securely using hashing.  
👉 Companies can verify authenticity, preventing fake certificates.  

---
# ✅ END OF DAY 5

✔ Certificate upload ✔  
✔ Hash generation ✔  
✔ Verification ✔  
✔ Full system working ✔  

---
# 🎯 Final Command

    python manage.py runserver

---
# 🎉 CONGRATULATIONS 🎉

Now students can:
- Explain project confidently  
- Demo without errors  
- Answer viva questions  