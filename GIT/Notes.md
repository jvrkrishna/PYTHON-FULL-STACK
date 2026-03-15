1️⃣ Introduction
What is Version Control?
Version control is a system that tracks changes in files over time so developers can:
See previous versions of code
Restore earlier versions
Collaborate with other developers
Track who made changes

Example:
Version 1 → Version 2 → Version 3 → Version 4

What is Git?
Git is a distributed version control system used to track changes in source code.
It was created by Linus Torvalds in 2005 and maintained by Junio Hamano.

Git is used for:
Tracking code changes
Tracking who made changes
Collaborating with teams
Managing different versions of a project

Why Git is Popular
✔ Used by 70%+ developers worldwide
✔ Allows collaboration from anywhere
✔ Maintains complete project history
✔ Easy to revert to older versions
✔ Supports branching and parallel development

What is GitHub?
GitHub is an online platform that hosts Git repositories.

Difference:
Git	                    GitHub
Version control tool	Cloud platform
Works locally	        Stores projects online
Tracks file changes	    Hosts repositories

GitHub is the largest source code hosting platform and has been owned by Microsoft since 2018.

2️⃣ GitHub Installation / Setup
GitHub itself is not installed like software. It is a cloud service, so you only need to create an account.

Step 1: Create GitHub Account
Go to:
https://github.com
Click Sign Up.
Fill the details:
Email address
Username
Password
Verify your email and complete registration.

Step 2: Create First Repository
After login:
Click New Repository
Enter repository details:
Repository name
Description
Public or Private

Example:
Repository Name: my-project
Click Create Repository.
Now your repository is ready.

3️⃣ Git Installation
Git must be installed on your computer to interact with GitHub.
Step 1: Download Git
Go to the official website:
https://git-scm.com
Click Download for Windows / Mac / Linux.

Step 2: Install Git
Run the installer and keep default settings.
Recommended settings:
Default editor → VS Code
Line endings → Checkout Windows-style
Click Install → Finish.

Step 3: Verify Installation
Open VS Code Terminal or Command Prompt.
Run:
git --version

Example output:
git version 2.44.0
This confirms Git is installed.

4️⃣ Configure Git (First Time Setup)
Set your username and email.
Open terminal and run:
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

Check configuration:
git config --list
This identifies you when making commits.

5️⃣ Create Project Folder
You can create a project folder in two ways.
Method 1: Using File Explorer
Right click → New Folder

Example:
my-project

Method 2: Using Terminal
mkdir my-project
cd my-project

6️⃣ Open Project in VS Code
Open folder in VS Code:
code .
Or use:
File → Open Folder

7️⃣ Initialize Git Repository
Inside the project folder run:
git init
Git creates a hidden folder:
.git
Now the folder becomes a Git repository.

8️⃣ Create Files
Create project files.

Example:
index.html
style.css
script.js
README.md

9️⃣ Check Git Status
Run:
git status

Example output:
Untracked files:
index.html

This means Git detected new files.

🔟 Stage Files
Add files to staging area.

Single file:
git add index.html

All files:
git add .

11️⃣ Commit Changes
Commit saves a snapshot of staged files.
git commit -m "First commit"

Example:
git commit -m "Added project files"

12️⃣ Connect Local Repository to GitHub
Copy your repository URL from GitHub.

Example:
https://github.com/username/my-project.git

Run:
git remote add origin repository_url

Example:
git remote add origin https://github.com/username/my-project.git

Check connection:
git remote -v

13️⃣ Push Code to GitHub
Upload your code to GitHub.
git push -u origin main
Now your project appears on GitHub repository.

14️⃣ Git Workflow
Typical workflow:
Edit files
↓
git add .
↓
git commit -m "message"
↓
git push

15️⃣ Common Git Commands
Command	Purpose
git init	Initialize repository
git status	Check file changes
git add	Stage files
git commit	Save changes
git push	Upload code
git pull	Download updates
git clone	Copy repository
git log	Show commit history

16️⃣ Example Project Structure
Example folder:
my-project/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .git

.git stores version history.

17️⃣ Daily Developer Workflow
Developers usually follow this cycle:
git pull
git add .
git commit -m "update"
git push

Meaning:
Get latest code
Make changes
Stage files
Commit changes
Push to GitHub