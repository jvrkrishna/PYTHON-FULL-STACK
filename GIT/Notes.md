1️⃣ What is Git
Git is a Version Control System (VCS) used to track changes in code.

It helps developers:
Track code changes
Track who made changes
Collaborate with other developers
Restore older versions of code
Git was created by Linus Torvalds in 2005 and maintained by Junio Hamano.

2️⃣ Why Git is Used
More than 70% of developers use Git because it allows:
✔ Team collaboration
✔ Tracking project history
✔ Backup of code
✔ Reverting to older versions
✔ Working on multiple features simultaneously

3️⃣ What is GitHub
GitHub is a cloud platform that hosts Git repositories.

Difference:
Git	                      GitHub
Version control tool	  Online platform
Works locally	          Works on cloud
Tracks changes	          Stores repositories

GitHub is the largest source code hosting platform and is owned by Microsoft (since 2018).

4️⃣ Key Git Concepts
Repository (Repo)
A folder where Git tracks your project files and history.

Example:
my-project/
Clone
Copy a repository from GitHub to your computer.
git clone repository_url
Stage
Selecting files that will be saved in the next commit.
git add filename
or
git add .
Commit
Saving a snapshot of staged files.
git commit -m "message"

Example:
git commit -m "Added login page"
Branch
A separate version of your project.

Example branches:
main
feature-login
feature-payment

Create branch:
git branch branch-name
Merge
Combines changes from different branches.
git merge branch-name
Pull
Downloads latest changes from GitHub.
git pull origin main
Push
Uploads your changes to GitHub.
git push origin main

5️⃣ Basic Git Workflow
The Git workflow follows this process:
Working Directory → Staging Area → Commit → GitHub

Example workflow:
Edit file
↓
Stage file
↓
Commit changes
↓
Push to GitHub

6️⃣ Install Git
Step 1: Download Git
Go to:
https://git-scm.com
Click Download for Windows / Mac / Linux.

Step 2: Install Git
Run installer and keep default settings.
Recommended options:
Editor → VS Code
Line endings → Checkout Windows-style, commit Unix-style
Click Install → Finish.

Step 3: Verify Installation
Open terminal and run:
git --version

Example output:
git version 2.44.0

7️⃣ Install Visual Studio Code
Download from:
https://code.visualstudio.com
Install normally.
Recommended extensions:
GitLens
GitHub Pull Requests
Prettier

8️⃣ Create GitHub Account
Go to:
https://github.com
Steps:
Click Sign Up

Enter:
Email
Username
Password
Verify email
Now you can create repositories.

9️⃣ Configure Git (First Time Setup)
Open VS Code terminal.

Set your username:
git config --global user.name "Your Name"

Set email:
git config --global user.email "your@email.com"

Check configuration:
git config --list

🔟 Create Project Folder
Method 1: Using File Explorer
Right click → New Folder

Example:
my-project

Method 2: Using Terminal
mkdir my-project
cd my-project

11️⃣ Open Folder in VS Code
Open project folder:
code .
or
File → Open Folder

12️⃣ Initialize Git Repository
Inside project folder run:
git init
Git creates hidden folder:
.git
Now your folder is a Git repository.

13️⃣ Create Files
Using VS Code
Click New File.

Example files:
index.html
style.css
script.js
README.md
Using Terminal

Create file:
touch index.html
or
echo Hello > index.html

14️⃣ Check Git Status
Run:
git status

Example output:
Untracked files:
index.html

15️⃣ Stage Files
Add single file:
git add index.html

Add all files:
git add .

16️⃣ Commit Changes
Save staged files:
git commit -m "First commit"

Example:
git commit -m "Added project files"
Git now stores a snapshot of your project.

17️⃣ Create GitHub Repository
Go to GitHub → New Repository.
Enter:
Repository name: my-project
Description: My first project

Choose:
Public / Private
Click Create Repository.

18️⃣ Connect Local Project to GitHub
Copy repository URL.

Example:
https://github.com/username/my-project.git

Run:
git remote add origin https://github.com/username/my-project.git
Check remote:
git remote -v

19️⃣ Push Code to GitHub
Upload code:
git push -u origin main
Now your project appears on GitHub.

20️⃣ View Git History
See commit history:
git log

Short version:
git log --oneline

Example:
a45bc2 First commit
b87df4 Added login page

21️⃣ Undo Changes
Undo file changes:
git checkout filename

Remove staged file:
git reset filename

Undo last commit:
git reset --soft HEAD~1

22️⃣ Typical Project Structure
Example project:

my-project/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── .git

.git stores Git history.

23️⃣ Daily Git Workflow (Developers Use)
Developers normally follow:
git pull
git add .
git commit -m "update"
git push

Steps:
Pull latest code
Make changes
Stage files
Commit changes
Push to GitHub

24️⃣ Most Important Git Commands
Command	Purpose
git init	Initialize repository
git status	Check changes
git add .	Stage files
git commit	Save changes
git push	Upload code
git pull	Download latest code
git clone	Copy repository
git log	View commit history

25️⃣ Complete Beginner Example
Example full workflow:
mkdir project
cd project
git init
code .
Create files → then run:
git add .
git commit -m "First commit"
git remote add origin repo_url
git push -u origin main

Your project is now live on GitHub.