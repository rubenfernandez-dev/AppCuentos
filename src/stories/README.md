# stories

Contains interactive stories in JSON format.

Current files:
- dragon.json
- brujula.json
- reloj.json
- linterna.json

Each file defines:
- title by locale (es, en, de, fr)
- chapters with id and localized text
- options for branching
- addItem for inventory updates
- type="puzzle" to trigger mini-game flow
- condition.requires (documented, pending full runtime enforcement)

Goal:
- Keep stories data-driven so new content can be added without changing core logic.
- Add automatic structure and asset validation.