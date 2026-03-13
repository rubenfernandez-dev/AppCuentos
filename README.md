# AppCuentos

[![Expo](https://img.shields.io/badge/Expo-54.x-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.82-61DAFB?logo=react&logoColor=000000)](https://reactnative.dev/)
[![Status](https://img.shields.io/badge/status-active%20prototype-2ea44f)](#project-status)

AppCuentos is an interactive storytelling mobile app built with React Native and Expo.
It is designed for children and families to read short stories, make choices, collect items, and unlock different endings.

## Table of Contents

- [Overview](#overview)
- [Project Status](#project-status)
- [User Flow](#user-flow)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Story Data Contract](#story-data-contract)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Community Standards](#community-standards)
- [License](#license)

## Overview

AppCuentos uses data-driven stories in JSON format.
Each story contains localized text, branching choices, and optional inventory rewards.
Progress is stored locally so readers can continue where they left off.

## Project Status

Implemented:
- User profile with name, age, and language.
- Library with 4 stories.
- Navigation flow: Profile -> Home -> Story.
- Chapter-based branching decisions.
- Per-story inventory tracking.
- Per-story progress persistence with AsyncStorage.
- Story reset action.
- Story content localized in ES/EN/DE/FR.

Partially implemented or planned:
- Puzzle chapters currently use a playable placeholder.
- Ending conditions are present in JSON but not fully enforced in runtime logic.
- Event-based audio hooks exist, but key mapping is not fully aligned.
- UI and accessibility are functional but still basic.

## User Flow

1. On app launch, the app checks whether user_profile exists in local storage.
2. If no profile is found, the user is routed to Profile.
3. After profile completion, the user lands on Home and selects a story.
4. In Story, each chapter shows text, optional image, and decision buttons.
5. Some decisions add items to inventory.
6. Progress is saved automatically after each decision.
7. The user can reset story progress at any time.

## Tech Stack

- Expo 54
- React Native 0.82
- React Navigation (Stack Navigator)
- AsyncStorage
- Expo AV

See package.json for exact dependency versions.

## Project Structure

- App.js: app entry point and navigation setup.
- src/screens: main app screens.
- src/components: reusable UI components.
- src/stories: JSON story files.
- src/store: persistence and translation helpers.
- src/utils: shared utilities (audio).
- src/assets: static assets (images and sounds).

## Getting Started

Requirements:
- Node.js LTS
- npm
- Expo CLI via npx

Install and run:

```bash
npm install
npx expo start
```

Then open in an emulator/simulator or Expo Go.

## Story Data Contract

Each story in src/stories/*.json includes:
- title by language.
- chapters with id and localized text.
- options with localized text and next chapter id.
- optional addItem to update inventory.
- optional type: "puzzle" to trigger puzzle flow.
- optional condition rules for gated endings (planned behavior).

Full spec: docs/STORIES_FORMAT.md

## Documentation

- docs/ARCHITECTURE.md
- docs/STORIES_FORMAT.md
- docs/ROADMAP.md
- docs/KNOWN_GAPS.md

## Roadmap

High-level roadmap is available in docs/ROADMAP.md.

## Contributing

Contributions are welcome.
Please read CONTRIBUTING.md before opening a pull request.

## Community Standards

- Code of Conduct: CODE_OF_CONDUCT.md
- Bug reports and feature requests: .github/ISSUE_TEMPLATE
- Pull request template: .github/PULL_REQUEST_TEMPLATE.md

## License

This project is licensed under the MIT License.
See LICENSE for details.
