# Architecture Overview - Akash Kumar

## Hook: useLikes
what it does:
Manages the like and unlike state for movies and other items shared across components.

why this logic belongs here:
This hook centralizes presentation logic so that multiple components can reuse the same like behavior without duplicating code.  
It keeps the UI state separate from data management and ensures consistent behavior in all pages.

where it's used:
Used in the Movies component to handle movie likes.

## Service: likesService
What it does:
Takes care of the main logic for liking and unliking movies.  
It saves liked items in localStorage and keeps the data the same across all pages.

Why this logic belongs here: 
This service handles the business logic so components don't deal with localStorage directly.  
It makes the code easier to reuse and manage.

Where it's used:
Used inside the useLikes hook and also in the **LikedPage** component.

## Repository: moviesRepository
What it does:  
Gets movie data from `movie.json`.  
Has methods to load all movies and can be updated later to work with an API or database.

Why this logic belongs here:  
It separates how we get the data from how we show it in the UI.  
If movie data moves to an API, only this file will need changes.

Where it's used:  
Used in the Movies.tsx component to load and show movie data.