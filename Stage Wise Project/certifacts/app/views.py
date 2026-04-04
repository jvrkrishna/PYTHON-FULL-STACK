import hashlib
def generate_hash(data):
    return hashlib.sha256(data.encode()).hexdigest()

from django.shortcuts import render,HttpResponse

def home(request):
    return render(request, 'home.html')

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

from .models import Certificate, User

def add_certificate(request):
    if request.method == "POST":
        student_id = request.POST['name']
        course = request.POST['course']
        grade = request.POST['grade']
        issued_by = request.POST['issued_by']

        student = User.objects.get(id=student_id)

        # Combine data
        data = student.name + course + grade + issued_by

        # Generate hash
        cert_hash = generate_hash(data)

        # Save
        Certificate.objects.create(
            student=student,
            course=course,
            grade=grade,
            issued_by=issued_by,
            certificate_hash=cert_hash
        )

        return HttpResponse(f"Certificate Added with Hash: {cert_hash}")

    return render(request, 'college/add_certificate.html')

def verify_certificate(request):
    if request.method == "POST":
        name = request.POST['name']
        course = request.POST['course']
        grade = request.POST['grade']
        issued_by = request.POST['issued_by']

        # Recreate hash
        data = name + course + grade + issued_by
        new_hash = generate_hash(data)

        # Check in DB
        cert = Certificate.objects.filter(
            certificate_hash=new_hash
        ).first()

        if cert:
            return HttpResponse("✅ Certificate is VALID")
        else:
            return HttpResponse("❌ Certificate is FAKE")

    return render(request, 'company/verify.html')
