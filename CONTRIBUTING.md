# Contributing to AppCuentos

Thanks for your interest in contributing.
This guide keeps contributions consistent and easy to review.

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start Expo:

```bash
npx expo start
```

## Branching and Commits

- Create a branch from main for each change.
- Use focused commits with clear messages.
- Keep pull requests small and reviewable.

Recommended commit style:
- feat: add story validation utility
- fix: handle missing audio key fallback
- docs: update architecture notes

## Pull Request Checklist

- [ ] Code builds and app starts locally.
- [ ] Changes are scoped and documented.
- [ ] No unrelated files are modified.
- [ ] README/docs are updated when behavior changes.

## Story Content Contributions

When adding or editing files in src/stories:
- Keep chapter ids unique.
- Ensure all next references are valid.
- Provide localized text for all supported languages.
- Confirm image/audio assets exist and paths are correct.

## Reporting Bugs

Please use the Bug Report template and include:
- Environment (OS, Expo version, device/emulator)
- Reproduction steps
- Expected behavior
- Actual behavior
- Logs/screenshots when possible

## Code of Conduct

By participating, you agree to follow CODE_OF_CONDUCT.md.
