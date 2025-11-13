#How to solve any pattern programs in python.
#Requirements to print the patterns.

'''
1. First we have to follow orderly for row by row. 
   When a row completes, there is no possibility to go back to that row.

2. Second, decide how many rows of pattern you want to print.
   Ex: n = 5 → range(1, 6)

3. If we want to print one “*” → print("*")
   If we want n number of “*” → print("*" * n)
'''

# ============================
# Stage 1
# ============================
n = 5
for j in range(n):
    print("*")

'''
*
*
*
*
*
'''


# ============================
# Stage 2 — Horizontal stars
# ============================
n = 5
for j in range(n):
    print("*", end=" ")

'''
* * * * *
'''


# ============================
# Stage 3 — Using 2 loops
# ============================
n = 5
for i in range(n):
    for j in range(n):
        print("*", end=" ")
    print()

'''
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
'''


# ============================
# Increasing Triangle (LOW to HIGH)
# ============================
n = 5
for i in range(n):
    for j in range(i + 1):
        print("*", end=" ")
    print()

'''
*
* *
* * *
* * * *
* * * * *
'''


# ============================
# Decreasing Triangle (HIGH to LOW)
# ============================
n = 5
for i in range(n):
    for j in range(i, n):
        print("*", end=" ")
    print()

'''
* * * * *
* * * *
* * *
* *
*
'''


# ============================
# Right Sided Low to High Triangle
# ============================
n = 5
for i in range(n):
    for j in range(i, n):
        print(" ", end=" ")
    for j in range(i + 1):
        print("*", end=" ")
    print()

'''
          *
        * *
      * * *
    * * * *
  * * * * *
'''


# ============================
# Right Sided High to Low Triangle
# ============================
n = 5
for i in range(n):
    for j in range(i + 1):
        print(" ", end=" ")
    for j in range(i, n):
        print("*", end=" ")
    print()

'''
  * * * * *
    * * * *
      * * *
        * *
          *
'''


# ============================
# Pyramid Pattern
# ============================
n = 5
for i in range(n):
    for j in range(i, n):
        print(" ", end=" ")
    for j in range(i + 1):
        print("*", end=" ")
    print()

'''
     *
    * *
   * * *
  * * * *
 * * * * *
'''


# ============================
# Hill Pattern
# ============================
n = 5
for i in range(n):
    for j in range(i, n):
        print(" ", end=" ")
    for j in range(i + 1):
        print("*", end=" ")
    for j in range(i):
        print("*", end=" ")
    print()

'''
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
'''


# ============================
# Reverse Hill Pattern
# ============================
n = 5
for i in range(n):
    for j in range(i + 1):
        print(" ", end=" ")
    for j in range(i, n):
        print("*", end=" ")
    for j in range(i, n - 1):
        print("*", end=" ")
    print()

'''
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
'''


# ============================
# Diamond Pattern (Hill + Reverse Hill)
# ============================
n = 5
for i in range(n - 1):
    for j in range(i, n):
        print(" ", end=" ")
    for j in range(i + 1):
        print("*", end=" ")
    for j in range(i):
        print("*", end=" ")
    print()

for i in range(n):
    for j in range(i + 1):
        print(" ", end=" ")
    for j in range(i, n):
        print("*", end=" ")
    for j in range(i, n - 1):
        print("*", end=" ")
    print()

'''
          *
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
    * * * * * * *
      * * * * *
        * * *
          *
'''


# ============================
# Hollow First & Last Row
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if i == 0 or i == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
* * * * *

* * * * *
'''


# ============================
# Hollow First & Last Column
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if j == 0 or j == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
*       *
*       *
*       *
*       *
*       *
'''


# ============================
# Plus Pattern (+)
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if i == n // 2 or j == n // 2:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
    *
    *
* * * * *
    *
    *
'''


# ============================
# X Pattern
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if i == j or i + j == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
*       *
  *   *
    *
  *   *
*       *
'''


# ============================
# Zero Shape Pattern
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if i == 0 or j == 0 or i == n - 1 or j == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
* * * * *
*       *
*       *
*       *
* * * * *
'''


# ============================
# Pattern (Diagonal + Left Border + Bottom Row)
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if j == 0 or i == n - 1 or i == j:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
*
* *
*   *
*     *
* * * * *
'''


# ============================
# Pattern (Top Row + Diagonal + Last Column)
# ============================
n = 5
for i in range(n):
    for j in range(n):
        if i == 0 or j == i or j == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
* * * * *
*     *
*   *
* *
*
'''


# ============================
# Pattern like Hollow Pyramid Sides
# ============================
n = 5
for i in range(n):
    for j in range(i, n):
        print(" ", end=" ")
    for j in range(i):
        if j == 0:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    for j in range(i + 1):
        if i == j:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
          *
        *   *
      *       *
    *           *
  *               *
'''


# ============================
# Opposite pattern (V shape wide)
# ============================
n = 5
for i in range(n):
    for j in range(i + 1):
        print(" ", end=" ")
    for j in range(i, n - 1):
        if j == i:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    for j in range(i, n):
        if j == n - 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

'''
  *                   *
    *               *
      *           *
        *       *
          *   *
            *
'''
