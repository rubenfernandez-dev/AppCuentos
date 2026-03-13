# screens

Main app screens:

- ProfileScreen.js
	- Captures name, age, and language.
	- Saves profile in AsyncStorage (user_profile key).

- HomeScreen.js
	- Renders the story library.
	- Uses profile language for localized titles.

- StoryScreen.js
	- Renders story chapters.
	- Handles decisions, inventory, and progress persistence.
	- Loads JSON content from src/stories.

- PuzzleGame.js
	- Placeholder mini-game for type="puzzle" chapters.

Current state:
- End-to-end navigation is functional.
- Puzzle gameplay is not fully implemented yet.

Target:
- More polished child-friendly UI.
- Real mini-games with progressive difficulty.