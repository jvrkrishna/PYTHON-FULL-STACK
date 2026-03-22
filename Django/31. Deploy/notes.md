## Project No: 0026
## Topic: Deploy Django Project (Live Website)

**Objective**
This project focuses on:
- Hosting Django project online
- Making project accessible via URL
- Using Render platform

---
# Step 1 — Prepare Project
Go to your project folder:
```bash
cd Project
```

---
# Step 2 — Install Required Packages
```bash
pip install gunicorn
pip install whitenoise
pip install dj-database-url
pip install psycopg2-binary
```

---
# Step 3 — Create requirements.txt
```bash
pip freeze > requirements.txt
```

---
# Step 4 — Create Procfile
Create a file named:
```
Procfile
```

Add:
```
web: gunicorn Project.wsgi
```

---
# Step 5 — Update settings.py
📄 Project/settings.py

---
## Add Allowed Hosts
```python
ALLOWED_HOSTS = ['*']
```

---
## Add Static Configuration
```python
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

---
## Add Middleware
```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]
```

---
# Step 6 — Push Code to GitHub
```bash
git init
git add .
git commit -m "first commit"
```

Create repo on GitHub and push:
```bash
git remote add origin your_repo_link
git push -u origin main
```

---
# Step 7 — Create Account on Render
👉 https://render.com

---
# Step 8 — Deploy on Render
- Click **New Web Service**
- Connect GitHub repo
- Select your project

---
# Step 9 — Configure Deployment
Fill details:

```
Build Command:
pip install -r requirements.txt

Start Command:
gunicorn Project.wsgi
```

---
# Step 10 — Add Environment Variables
Add:

```
SECRET_KEY = your_secret_key
DEBUG = False
```

---
# Step 11 — Deploy
Click **Deploy**

---
# Step 12 — Run Migrations (Important)
In Render shell:
```bash
python manage.py migrate
```

---
# Output
You will get a live URL like:

```
https://your-project.onrender.com
```

---
# Flow
```
Local Project → GitHub → Render → Live Website
```

---
# Important Concepts
## Gunicorn

Production server for Django

---
## WhiteNoise
Serves static files

---
## Procfile
Tells server how to run project

---
# Common Errors
## Static files not loading

✔ Run:
```bash
python manage.py collectstatic
```

---
## Module not found
✔ Check:

```
requirements.txt
```

---
# Concepts Covered
- Deployment
- Hosting Django
- Static files in production
- GitHub integration