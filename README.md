# StreamMark - Mini YouTube
 
## Team
Team Name: StreamMark  
 
**Members:**
- Akash Kumar - Movies  
- Aakash Aakash -  Fun Facts 
- Om Patel - Educational  
- Karanveer - Music  
 
 
## General Description
 
StreamMark is a React-based project that allows users to explore different types of content lists (movies, educational, fun facts, music).
Each component is independently developed by a team member and then rendered together to demonstrate list rendering in React.

 
The goal of the project is to practice list rendering, component modularity, and collaborative development in React while providing a simple
interactive experience.
 
## User Stories
 
1. As a user, I want to view multiple categorized content lists (movies, educational, fun facts, music) so that I can easily explore different
categories in one place.
 
2. As a user, I want each list to contain several items so that I can quickly scan and learn from the information provided.
 
3. As a user, I want each list to be styled consistently and neatly so that the application looks professional and is easy to navigate.
 


## Sprint 2 / Assignment 2

##project goals
1. learning multi-page navgation and shared state accross page.
2. Creating the interactive and reusable components such as forms, like buttons.
3. Each section is developed by an individual team member and linked together using React Router for easy navigation.  


##User Stories
1. As  a user, i can interact with videos, like them, or add/remove favorites.
2. As a user, i can search, filter whatever they want.
3. As  a user, i can see a consistent design across all pages for a smooth experience.


##features
### T.1  Multi-Page Navigation + Navigation Interface
- Users can navigate between Movies, Educational, Fun Facts, and Music pages.  
- A `<nav>` bar is included in the layout header so it appears on every page.  
- Each page has a link in the navigation bar, and the active page is clearly shown.

### I.1 Feature Pages
Each major feature (Movies, Music, Fun Facts, Educational) is a separate page showing lists of videos or facts.  

### I.2 Form Component
- Each page includes search bar at the top where we can browse what we want.

### I.3 Element Addition / Removal
- Users can add or remove list items dynamically .  
- The change is reflected instantly on the page

## Getting Started
 
1. Clone the repository:

   git clone <https://github.com/OMJPATEL/StreamMark>

2. Create Project with Vite
To create a new React + TypeScript project with Vite:

npm create vite@latest

After that select: 
1. React
2. TypeScript

3. Running the development server
npm run dev


# Sprint 5 – Authentication, Authorization, and Deployment

Sprint 5 focused on adding user authentication with Clerk, managing user-specific data, and deploying both the front-end and back-end to Vercel.

## T.1 Clerk Authentication Setup
- Clerk added to front-end and back-end.
- SignIn, SignUp, UserButton used.
- Back-end routes protected using Clerk middleware.
- Session tokens verified to access protected data.

## T.2 Team Vercel Deployment
- Front-end and back-end deployed using one Vercel account.
- Automatic deployment on push to main.
- Environment variables added to Vercel.

## T.3 Back-End User Management
- Prisma schema updated with userId fields.
- Migrations created for user-related changes.
- Only required endpoints protected using Clerk authentication.

## T.4 User Login and Registration
- Users can register, log in, and log out.
- Login link visible in navigation.
- Guest users can access public pages; logged-in users see personalized sections.

## T.5: Local Setup Instructions
- README includes a Local Setup section.
- Must include environment variables for both applications.
- Instructions must include database setup and required commands.

### Local Setup Instructions

#### Front-End Setup
```
npm install
npm run dev
```

Create a `.env.local` file:
```
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

#### Back-End Setup
```
npm install
```

Create a `.env` file:
```
DATABASE_URL="your_database_url"
CLERK_SECRET_KEY="your_clerk_secret_key"
PORT=5000
```

Run Prisma setup:
```
npx prisma migrate dev
npx prisma generate
```

Start the server:
```
npm run dev
```

# I.1 Custom User-Associated Data and Session Management

### Acceptance Criteria
- At least one back-end request includes a Clerk session token.
- Returned data must use the logged-in user's ID.
- Components must behave differently for logged-in and logged-out users.

### Implementation
- Protected endpoints use Clerk to read the session token and extract `userId`.
- Database queries filter data by the authenticated user's ID.
- Logged-in users can save, view, or update their own data.
- Guest users can browse public pages but cannot access personalized content.
- Conditional rendering ensures pages like “My Saved Items” appear only when logged in.

# Commands Used in This Sprint

### `npm install`
Installs all necessary dependencies for either the front-end or back-end.

### `npm run dev`
Starts the project in development mode.

### `npx prisma migrate dev`
Applies migrations and updates the development database.

### `npx prisma generate`
Generates the Prisma client used by the back-end to perform database operations.

### `git push origin main`
Triggers automatic deployments on Vercel for both applications.
