# ---------------------------------------------
# 🔹 OTP GENERATION
# ---------------------------------------------

import random


# ---------------------------------------------
# 1️⃣ Manual OTP Generation (POP)
# ---------------------------------------------
print("Manual OTP:")
print(random.randint(0,9), random.randint(0,9),
      random.randint(0,9), random.randint(0,9))


# ---------------------------------------------
# 2️⃣ Using Loop (POP)
# ---------------------------------------------
otp = ""
for i in range(6):
    otp += str(random.randint(0, 9))

print("\nOTP using loop:")
print(otp)


# ---------------------------------------------
# 3️⃣ Shortcut Method (POP)
# ---------------------------------------------
print("\n4-digit OTP using randint:")
print(random.randint(1000, 9999))  
# Drawback: OTP always ≥ 1000 (no leading zeros)


# ---------------------------------------------
# 4️⃣ OOP Version — BEST PRACTICE
# ---------------------------------------------
class OTPGenerator:
    def __init__(self, digits=6):
        """
        Create an OTP generator with given number of digits.
        """
        self.digits = digits

    def generate(self):
        """
        Return an OTP as a string (supports leading zeros).
        """
        otp = ""
        for _ in range(self.digits):
            otp += str(random.randint(0, 9))
        return otp


# Using the OOP class
print("\nOTP using OOP:")
otp_obj = OTPGenerator(6)   # 6-digit OTP
print(otp_obj.generate())
