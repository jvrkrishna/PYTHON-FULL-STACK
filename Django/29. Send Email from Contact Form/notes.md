## Project No: 0023
## Project Name: Contact Email Integration

**Objective**
This project focuses on:
- Sending email from Django
- Integrating email with contact form
- Using SMTP (Gmail)

---
# Step 1 — Configure Email Settings
📄 Project/settings.py
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True

EMAIL_HOST_USER = 'your_email@gmail.com'
EMAIL_HOST_PASSWORD = 'your_app_password'
```

---
# Important Note
⚠️ Use **App Password**, not your real Gmail password
Steps:
- Enable 2-Step Verification in Gmail
- Generate App Password
- Use that password here

---
# Step 2 — Modify View
📄 contact_us/views.py
```python
from django.core.mail import send_mail
from django.conf import settings
from django.shortcuts import render, redirect
from .models import Contact

def contactus(request):

    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Save to database
        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

        # Send Email
        subject = f"New Contact Message from {name}"
        message_body = f"""
        Name: {name}
        Email: {email}
        Message: {message}
        """

        send_mail(
            subject,
            message_body,
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )

        return redirect('success')

    return render(request, 'contact_us.html')
```

---
# Step 3 — Run Server
```bash
python manage.py runserver
```

---
# Step 4 — Test
Open:
```
http://127.0.0.1:8000/
```

👉 Submit form

---
# Output
- Data saved in database ✅  
- Email sent to receiver ✅  

---
# Flow
```
User → Form → View → Save DB → Send Email → Success Page
```

---
# Important Concepts
## Send Mail Function
```python
send_mail(subject, message, from_email, recipient_list)
```

---
## Settings Used
```python
settings.EMAIL_HOST_USER
```

---
# Optional: Send Confirmation Email to User
```python
send_mail(
    "Thank You",
    "We received your message.",
    settings.EMAIL_HOST_USER,
    [email],
)
```

---
# Concepts Covered
- SMTP Configuration
- send_mail()
- Email Integration with Django
- Real-world Contact Form