import json
import re

# Load 100 questions from extracted docx
with open('apple_all_100_questions.json', 'r', encoding='utf-8') as f:
    raw_questions = json.load(f)

print(f"Loaded {len(raw_questions)} questions.")
