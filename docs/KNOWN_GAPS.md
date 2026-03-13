# Current State and Known Gaps

This document summarizes the main differences between intended behavior and current implementation.

## 1. Puzzle Gameplay

- Current state:
  - PuzzleGame is a demonstration screen, not a full gameplay mechanic.
- Impact:
  - Puzzle chapters are completed by pressing a button.
- Target:
  - Real interactive mini-games (drag/drop, matching, or pattern-based), per story.

## 2. Ending Conditions

- Current state:
  - Some stories include condition.requires.
  - StoryScreen does not fully enforce these conditions.
- Impact:
  - Endings do not consistently depend on collected items.
- Target:
  - Inventory-aware ending resolution and route gating.

## 3. Event Audio

- Current state:
  - StoryScreen emits audio events for object/decision/final moments.
  - soundPlayer currently maps a different key set.
- Impact:
  - Playback errors may occur due to missing key mappings.
- Target:
  - Unified event-based audio catalog with fallback behavior.

## 4. Visual Assets

- Current state:
  - Image names are read from story JSON.
  - Asset existence is not validated before rendering.
- Impact:
  - Missing files can break chapter visuals.
- Target:
  - Story validation pipeline and safe visual fallback strategy.

## 5. Profile Language Input

- Current state:
  - Language is captured as free text in Profile.
- Impact:
  - Invalid values can break expected translations.
- Target:
  - Controlled language selector limited to supported locales.
