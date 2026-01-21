######## File Handling #############
'''
File handling is an essential concept that allows you to read from and write to files.
Python provides built-in functions to handle files in an easy and efficient way.
We can perform operations such as create, read, write, append, and modify files.
'''

#------------------------------------------------------------
# Create a sample file: sample1.txt
# Add the below text inside it manually:
# Hello Welcome to Python.
#------------------------------------------------------------

#------------------------------------------------------------
# Example 1: open → read → close
#------------------------------------------------------------
s = open('sample1.txt', mode='r')
print(s.read())
s.close()

#------------------------------------------------------------
# Example 2: open → write → close
#------------------------------------------------------------
s = open('sample1.txt', mode='w')
s.write("Bye Bye")
s.close()

#------------------------------------------------------------
# Example 3: open → append → close
#------------------------------------------------------------
s = open('sample1.txt', mode='a')
s.write("\nBye Bye append")
s.close()

#------------------------------------------------------------
# Example 4: open → read and write (r+) → close
#------------------------------------------------------------
s = open('sample1.txt', mode='r+')
print(s.read())       # Read existing content
s.write("\nAdded using r+ mode")  # Write new content
s.close()

#------------------------------------------------------------
# Example 5: open → write and read (w+) → close
#------------------------------------------------------------
s = open('sample1.txt', mode='w+')
print("Current pointer:", s.tell())  # tell() gives current cursor position
s.write("w+ mode example")
print("After write pointer:", s.tell())
s.seek(0)                           # seek() moves pointer to specific position
print("After seek pointer:", s.tell())
print(s.read())                     # Read from start
s.close()

#------------------------------------------------------------
# Using 'with' Statement
#------------------------------------------------------------
'''
In Python, it's a good practice to use the 'with' statement when working with files.
It ensures that the file is automatically closed after the block execution,
even if an error occurs inside the block.
'''

# Example 6: Using 'with' to read a file
with open('sample1.txt', 'r') as file:
    content = file.read()
    print(content)

# Example 7: Using 'with' to write to a file
with open('sample1.txt', 'w') as file:
    file.write("This is written using the 'with' statement.\n")
    file.write("It will automatically close the file when done.\n")

# Example 8: Using 'with' to append data
with open('sample1.txt', 'a') as file:
    file.write("Appended line using with statement.\n")

#------------------------------------------------------------
# Checking if a File Exists
#------------------------------------------------------------
'''
Before opening a file, you might want to check if it exists.
We can do this using the 'os' module.
'''

import os

if os.path.exists('sample1.txt'):
    with open('sample1.txt', 'r') as file:
        print("File content:\n", file.read())
else:
    print("The file does not exist.")

#------------------------------------------------------------
# Notes:
#------------------------------------------------------------
'''
Modes Summary:
'r'  → Read (file must exist)
'w'  → Write (creates new or overwrites existing)
'a'  → Append (adds data at end)
'r+' → Read and Write (no overwrite)
'w+' → Write and Read (overwrites)
'a+' → Append and Read
'b'  → Binary mode (use with images, PDFs, etc.)

Functions:
.read()      → Reads entire file content
.readline()  → Reads one line
.readlines() → Reads all lines into a list
.write()     → Writes a string
.writelines()→ Writes multiple lines
.tell()      → Returns current pointer position
.seek()      → Moves pointer to a specific position
.close()     → Closes the file (handled automatically with 'with')
'''
