# Technical Architecture

## 1. Overview

The app currently follows a simple layered design:
- Presentation: React Native screens and components.
- Content domain: story definitions in JSON files.
- Local persistence: AsyncStorage for profile and story progress.
- Utilities: audio playback helper.

## 2. App Startup Flow

Main file: App.js

Startup sequence:
1. Read user_profile from AsyncStorage.
2. If it exists, navigate to Home.
3. If it does not exist, navigate to Profile.

## 3. Screens

- ProfileScreen:
  - Captures name, age, and language.
  - Saves user_profile.
  - Redirects to Home using navigation.reset.

- HomeScreen:
  - Reads language from profile.
  - Renders localized story buttons.
  - Navigates to Story with storyId.

- StoryScreen:
  - Loads selected story by storyId.
  - Loads saved progress (step + inventory).
  - Renders the current chapter, options, and inventory.
  - Saves progress after each decision.
  - Renders PuzzleGame when chapter type is puzzle.

- PuzzleGame:
  - Placeholder implementation.
  - Simulates puzzle completion and calls onComplete.

## 4. Data Layer

Stories:
- Location: src/stories/*.json
- Each file defines chapter content and branching paths.

UI translations:
- Location: src/store/translations.js
- Includes localized story titles for Home.

Persistence:
- Profile key: user_profile
- Story progress key: progress_<storyId>

## 5. Decisions and Inventory

- Inventory is updated through option addItem values.
- Inventory and step are saved on each progress update.
- condition.requires is currently not enforced in runtime.

## 6. Audio

- Utility: src/utils/soundPlayer.js
- Uses a static sound map.
- Current state:
  - Sound map exists for story-based keys.
  - StoryScreen triggers event-based keys such as object/decision/final.
  - Key alignment still needs to be completed.

## 7. Target Architecture

Planned evolution:
- Narrative rules engine (conditions, locks, route validation).
- Local analytics service for progress insights.
- Story-aware asset validation pipeline (images/sounds).
- UI theme and accessibility layer.
