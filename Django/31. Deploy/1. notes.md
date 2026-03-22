## Project No: 0026
## Topic: Deploy Django Project

---
# Step 1 — Create Project
```bash
django-admin startproject Project
cd Project
```

---
# Step 2 — Install Deployment Packages
```bash
pip install gunicorn
pip install whitenoise
pip install dj-database-url
pip install psycopg2-binary
```

---
# Why These Packages? (Very Important)
## 1️⃣ gunicorn
👉 What it is:
- A **production web server**

👉 Why needed:
- Django’s default server = only for development
- gunicorn = handles real user traffic

👉 Flow:
```
Browser → gunicorn → Django → Response
```

---
## 2️⃣ whitenoise
👉 What it is:
- Serves **static files (CSS, JS, Images)**

👉 Why needed:
- In production, Django does NOT serve static files
- whitenoise handles static files without extra server

👉 Example:
```
CSS → whitenoise → Browser
```

---
## 3️⃣ dj-database-url
👉 What it is:
- Converts database URL → Django settings

👉 Why needed:
- Hosting platforms (Render, Heroku) give DB as URL
- This package converts it into Django format

👉 Example:
```
postgres://user:pass@host/db → Django DB config
```

---
## 4️⃣ psycopg2-binary
👉 What it is:
- PostgreSQL database adapter
👉 Why needed:
- Production uses PostgreSQL (not SQLite)
- Django needs this to connect to PostgreSQL

---
# Step 3 — Create requirements.txt
```bash
pip freeze > requirements.txt
```

---
# Step 4 — Create Procfile
Create file:
```
Procfile
```

Add:
```
web: gunicorn Project.wsgi
```

---
# Step 5 — Modify settings.py
📄 Project/settings.py

---
## Allowed Hosts
```python
ALLOWED_HOSTS = ['*']
```

---
## Static Files

```python
import os
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
```

---
## Middleware

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]
```

---
# Step 6 — Collect Static Files
```bash
python manage.py collectstatic
```

---
# Step 7 — Push Code to GitHub
```bash
git init
git add .
git commit -m "deploy project"
git remote add origin your_repo_link
git push -u origin main
```

---
# Step 8 — Deploy on Render
Go to:
👉 https://render.com

---
# Step 9 — Configure Deployment
```
Build Command:
pip install -r requirements.txt

Start Command:
gunicorn Project.wsgi
```

---
# Step 10 — Environment Variables
Add:
```
SECRET_KEY = your_secret_key
DEBUG = False
```

---
# Step 11 — Run Migrations
```bash
python manage.py migrate
```

---
# Output
```
https://your-project.onrender.com
```

---
# Full Flow
```
User → Browser → gunicorn → Django → Database → Response
```

---
# Important Understanding
## Development vs Production
| Feature | Development | Production |
|--------|------------|------------|
| Server | runserver | gunicorn |
| Static | Django | whitenoise |
| DB | SQLite | PostgreSQL |

---
# Concepts Covered
- Deployment setup
- Production server (gunicorn)
- Static handling (whitenoise)
- PostgreSQL connection
- Hosting on Render