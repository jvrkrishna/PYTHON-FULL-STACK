# ✅ Try / Except / Else / Finally & Assertion — Notes and Examples

---

## 🔹 Finally Block

**What it is:**  
`finally` is used for *cleanup code* that must run no matter what — whether an exception was raised or not, and whether it was handled or not.

**When it runs:**  
`finally` will execute after `try` / `except` / `else` blocks — except in extreme cases where the Python process is forcefully killed (e.g., `os._exit()`), or the interpreter crashes.

**Syntax**
```python
try:
    # risky code
except SomeException:
    # handling code
finally:
    # cleanup code (always runs)
