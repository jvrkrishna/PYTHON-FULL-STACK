**Objective**  
This section explains the basic software requirements, environment setup, and steps to run the Django project successfully.

---
# 🔧 Basic Requirements

1. Install Python  
2. Install VS Code  
3. Install Django  

    pip install django  
    python -m django --version  

4. Install Anaconda and set environment variable  

    C:\Users\jvrkr\anaconda3\condabin  

5. Check Conda Environment in VS Code terminal  

    conda env list  

👉 Check whether base environment is present  

---
# 🪜 Create Virtual Environment (Conda)

    conda env list

👉 To see existing environments  

---
    conda create -n venv

👉 To create new environment  

---
    conda activate venv

👉 To activate environment  

---
    conda deactivate

👉 To deactivate environment  

---
    conda remove --name venv --all

👉 To delete environment  

---
# ⚙️ Instructions: How to Run Project

👉 Open Terminal / Command Prompt in project root folder  

---
# 📦 Install Requirements

    pip install -r requirements.txt

---
# 🗄️ Apply Migrations

    python manage.py makemigrations  
    python manage.py migrate  

---
# 👤 Create Admin User

    python manage.py createsuperuser  

👉 Enter username, email, password  

---
# 🚀 Run Server

    python manage.py runserver  

---
# 🌐 Open in Browser

    http://127.0.0.1:8000/

👉 Replace port if needed  

---
# 🔐 Admin Panel Access

👉 Open:

    http://127.0.0.1:8000/admin

👉 Login using superuser credentials  

---
# 📌 Important Notes

- Always activate virtual environment before running project  
- Ensure Django is installed  
- Run migrations before starting server  
- Admin user is required to access admin panel  

---
# 🎯 Summary

✔ Python & VS Code installed  
✔ Django installed  
✔ Virtual environment created  
✔ Project successfully running  