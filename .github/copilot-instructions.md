<!-- Auto-generated guidance for AI coding agents working on this repository -->
# Copilot instructions for Piscine-web

This repository is a collection of short HTML/CSS/JS exercises from a 42 Málaga web "piscine". Agents should treat the code as student work: preserve originals, be conservative with edits, and provide clear explanations for any change.

- **Big picture**: The repo is organized by lesson blocks (`cell00/`, `cell01/`, ...). Each lesson contains multiple exercises under `exNN/`. Most exercises are standalone static pages (HTML, CSS, JS) or tiny shell scripts.

- **Important directories/files**:
  - `README.md` — project overview and purpose.
  - `cellXX/exYY/` — primary working units; examples include `cell03/ex01/balloon.js` and `cell03/ex03/todo.js`.
  - `cell00/*/*.sh` — small helper/learning shell scripts (e.g., `cell00/ex05/build.sh`, `cell00/ex03/count_files.sh`).

- **Patterns & conventions discovered**:
  - Exercises are independent and often include their own `index.html`, `.css`, and `.js` files.
  - Some exercises have duplicated `*bis` copies (e.g., `ex03` and `ex03bis`). Treat duplicates as separate snapshots; do not automatically delete or overwrite them.
  - Variable names, labels, and comments may be in Spanish (examples: `globo`, `tamaño`). When editing, preserve language/context unless asked to internationalize.

- **Developer workflows (how to run / preview):**
  - No build system or package manager is configured. To preview static pages run a simple HTTP server from the repo root:
    - `python3 -m http.server 8000` then open `http://localhost:8000/cell03/ex03/index.html`
    - On macOS you can also `open cell03/ex03/index.html` to view file in default browser.
  - Shell scripts need execute permission: `chmod +x cell00/ex05/build.sh` then `./cell00/ex05/build.sh 01 02`.

- **Editing rules for AI agents (project-specific)**:
  - Do not modify a student's file in-place without a clear reason. Prefer one of:
    1. Add a new file `exYY/fix-<short-desc>.js` or `exYY/notes.md` with the suggested changes and rationale.
    2. Create a backup before editing: save original as `filename.orig` or `filename.bak` and include a commit message documenting the reason.
  - Keep changes minimal and focused; match existing coding style (small, imperative JS; simple CSS). Avoid introducing heavy frameworks or build tooling unless requested.
  - When fixing JS/HTML issues, provide a short explanation comment at the top of the new/modified file and add a human-readable note in `exYY/README.md`.

- **What not to do**:
  - Do not add dependencies, CI, or project-wide tooling without explicit user confirmation.
  - Do not remove `*bis` directories or other student snapshots.

- **Examples of useful actions an agent can take**:
  - Propose a small bugfix as `cell03/ex03/todo.fix.js` and include a `cell03/ex03/README.md` describing the change and manual test steps.
  - Add a short test harness or `preview.sh` that launches `python3 -m http.server` for local verification.

If any part of this guidance is unclear or you want the agent to follow a different merge/edit strategy, please provide instructions and I will update this file.
