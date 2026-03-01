import sys
try:
    from pypdf import PdfReader
    reader = PdfReader("Haris Rashid Resume.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open("resume_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Success")
except ImportError:
    print("Needs pypdf")
except Exception as e:
    print(f"Error: {e}")
