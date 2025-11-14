# Architecture Overview - Aakash Aakash

## Hook: useLikes

What it does:
Manages the like/unlike state for videos across components.

Why this logic belongs here:
This hook contains presentation-level logic for reusing the like functionality in multiple components.  
It separates UI state from data management and ensures consistent behavior across pages.

Where it's used:
Used in FunFacts component to control the like button behavior.


## Service: likesService

What it does:
Handles the core business logic for liking and unliking videos.  
Stores liked items in localStorage and syncs data across all pages.

Why this logic belongs here:
It separates reusable business logic from UI and data access layers.  
Components or hooks can use it without worrying about localStorage directly.

Where it's used:
Used by the `useLikes` hook and in the `LikedPage` component.


## Repository: funFactsRepository

What it does:
Provides access to local Fun Facts data (funfacts.json).  
Supports fetching all items or filtering by category.

Why this logic belongs here:
Separates data access from UI logic.  
If a database or API is added later, only this repository needs to change.

Where it's used:
Used in the `FunFacts.tsx` component to display data dynamically.
