# Story Format (JSON)

This document defines the expected contract for files in src/stories/*.json.

## 1. Base Structure

Simplified example:

```json
{
  "title": {
    "es": "Titulo",
    "en": "Title",
    "de": "Titel",
    "fr": "Titre"
  },
  "chapters": [
    {
      "id": 0,
      "text": {
        "es": "Texto...",
        "en": "Text...",
        "de": "Text...",
        "fr": "Texte..."
      },
      "image": "imagen.png",
      "options": [
        {
          "text": {
            "es": "Opcion A",
            "en": "Option A",
            "de": "Option A",
            "fr": "Option A"
          },
          "next": 1,
          "addItem": "optional_item"
        }
      ]
    }
  ]
}
```

## 2. Chapter Fields

- id (number, required): unique chapter identifier.
- text (object, required): localized text map.
- image (string, optional): file name in assets/images.
- options (array, optional): branching choices.
- type (string, optional): special chapter type, such as "puzzle".
- next:
  - if options exist, each option defines its own next.
  - in puzzle chapters, next may be an array of outcomes.
- condition (object, optional): ending rules (planned behavior).

## 3. Recommended Rules

- Keep ids sequential or clearly documented.
- Ensure every next value points to an existing chapter id.
- Avoid empty localized values.
- Keep addItem naming consistent.
- Validate that each image file exists.

## 4. Current State vs Target

Current state:
- The reading engine uses id, text, image, options, addItem, and type.
- condition.requires appears in some stories but is not enforced yet.

Target:
- Enforce condition.requires at runtime.
- Support compound conditions (AND/OR).
- Add chapter metadata (difficulty, duration, tags).
