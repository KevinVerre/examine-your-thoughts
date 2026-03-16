# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Examine Your Thoughts** is a CBT (cognitive behavioral therapy) web tool at examineyourthoughts.com, inspired by Byron Katie's "The Work" and David Burns' cognitive distortion techniques. Users work through guided Socratic questions to examine stressful thoughts. Hosted on GitHub Pages (pushes to master auto-deploy).

All processing is client-side. No backend, no database, no user data leaves the browser.

## Running Locally

No build step. Static files only.

```bash
# Option A: open directly
open index.html

# Option B: local server for serving static files (needed if testing script imports)
python3 -m http.server 8000
# Visit http://localhost:8000
```

No automated tests exist. Test manually by going through both question sets in the browser.

## Architecture

### Question Sets

Two question sets selectable via URL parameter (`?question_set=short` or `?question_set=long`):
- **Short set** (~10 questions): Core Byron Katie questions, defined inline in `index.html`
- **Long set** (60+ questions): Comprehensive CBT questions, defined in `longListOfQuestions.js` as the `long_list_of_questions` constant

### Question Object Structure

```javascript
{
  "id": "unique_identifier",
  "prompt": "Question text with #{NOUN}, #{FEELING}, #{THOUGHT} placeholders",
  "hint": "Helper text",
  "response": "",              // populated at runtime
  "response_handler": "save_noun_response",  // optional callback function name
  "result_tag": "Label in results table"
}
```

### Placeholder System

`prep_string()` in `index.html` substitutes `#{NOUN}`, `#{FEELING}`, `#{THOUGHT}` in question text with user's earlier answers at display time.

### Key Flow (index.html)

`onload_initialize()` → `display_step()` renders one question at a time → `submit_response_handler()` saves answer and advances → special response handlers (`save_noun_response`, `save_feeling_response`, `save_thought_response`) capture key user inputs for placeholder substitution.

State lives in: `current_step_number`, `steps` (active question array), `response` (object with noun/feeling/thought).

### File Purposes

| File | Role |
|------|------|
| `index.html` | Main interactive SPA (HTML + JS + CSS, uses jQuery + Bootstrap) |
| `longListOfQuestions.js` | Long question set data (imported by index.html and generatedWorksheet.html) |
| `worksheet.html` | Static printable worksheet — pure HTML/CSS, no JavaScript, standalone |
| `generatedWorksheet.html` | Dynamic worksheet that renders questions from longListOfQuestions.js |
| `CNAME` | GitHub Pages custom domain config |

### Important Constraints

- `worksheet.html` is intentionally standalone with no JS dependencies — it has its own copy of question text hardcoded in HTML
- When questions are added/edited in `longListOfQuestions.js`, `worksheet.html` must be updated separately
- The site uses jQuery 3.1.1 and Bootstrap 3.3.7 loaded from CDNs
- Enter submits the current answer; Shift+Enter adds a newline
