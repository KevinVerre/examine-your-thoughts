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
- **Short set** (~10 questions): Core Byron Katie questions, defined inline in `index.html` as the `short_list_of_questions` array (around line 217)
- **Long set** (60+ questions): Comprehensive CBT questions, defined in `longListOfQuestions.js` as the `long_list_of_questions` constant

The default question set is the **long set**, controlled by `steps_str = LONG_LIST` near the top of `onload_initialize()`'s setup block in `index.html`.

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
| `ExamineYourThoughts.pdf` | Static downloadable PDF of the worksheet — committed once and not regenerated from source; update by hand if worksheet content changes meaningfully |
| `CNAME` | GitHub Pages custom domain config |

### How to Add a Question to the Long Set

1. **`longListOfQuestions.js`** (required) — Add a question object to `long_list_of_questions` at the desired position. Use a unique `id`. Leave `response_handler` empty for a normal question. Set `result_tag` to `""` to hide it from the results table.
2. **`worksheet.html`** (required, manual) — This file has question text hardcoded in HTML. Hand-add a matching `<li class="q">…</li>` block. `generatedWorksheet.html` does NOT need editing (it reads the JS directly).
3. **`index.html`** (only if the question needs special behavior) — Add a new handler function and reference it in `response_handler`, or extend `prep_string()` if introducing a new placeholder token.
4. **`ExamineYourThoughts.pdf`** (optional) — Update the static PDF by hand if the worksheet content change is significant.
5. **`index.html` short set** (~line 217, optional) — Only if the question should also appear in the short set.

### Important Constraints

- `worksheet.html` is intentionally standalone with no JS dependencies — it has its own copy of question text hardcoded in HTML
- When question text changes in `longListOfQuestions.js`, `generatedWorksheet.html` picks it up automatically (it reads the JS module), but `worksheet.html` must be edited by hand because its question text is hardcoded into the HTML
- The site uses jQuery 3.1.1 and Bootstrap 3.3.7 loaded from CDNs
- Enter submits the current answer; Shift+Enter adds a newline
- Dark mode is a `body.dark-mode` class toggled by `toggleDarkMode()` and persisted in `localStorage` under the `darkMode` key. All dark-mode styles live in `index.html` under `body.dark-mode ...` selectors; two jumbotron background colors are also set imperatively in JS (search for `dark-mode` in the file). Any new themed element needs both a default rule and a `body.dark-mode` override.
