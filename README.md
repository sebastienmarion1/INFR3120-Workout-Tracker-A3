# INFR3120-Workout-Tracker-A3

## Overview of The Project

This website was made for Assignment 3 in my Web & Script Programming class. I used Node, Express, EJS, and MongoDB throughout. This site allows users to record their workouts and review their progress. Users can add, view, edit and delete the workouts, with the weight in pounds.

## Links

Live website: https://workout-tracker-a3.onrender.com/
GitHub repository: https://github.com/sebastienmarion1/INFR3120-Workout-Tracker-A3

## Parts of The Site

1. Homepage introducing the Workout Tracker
2. Shared navigation and footer across all pages
3. A workout table showing all recorded exercises with the name, muscle group, sets, reps, weight, and date
4. Forms to add or edit workouts
5. A confirmation before deleting a workout
6. Workout records are stored in MongoDB Atlas

## Design

I adapted the Bootstrap navigation, table, and form structure from the CRUD lectures. I wrote the CSS file based on what I learned from assignment 1, 2 and lectures to add green accents, a light background, and enough spacing all around.

## References

I used Express Generator to make the app with EJS views, just following what was shown in class.

I referenced the MEAN Stack Development lecture often for the Express routes and EJS views.

I referenced the MongoDB slides and CRUD part 1 class example for the database configuration, Mongoose, shared navigation, and table listing.

I adapted the Book forms and CRUD examples from the CRUB part 1 lecture to use workout fields instead of book fields.

I used Bootstrap for the navigation, tables, forms, and buttons. I wrote the CSS file myself, based on my other assignments.

For the date formatting in my edit form, where I converted the stored date into ISO format, I found this method off of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString. I used .split('T')[0] to keep the date portion.
I found I had to format the saved date like this because it included the time, but the date field in my edit form needed just YYYY-MM-DD.

For the delete confirmation, I found this method off the same site, just another section that explained it: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm

## Deployment

I deployed the website on Render as a Node Web Service connected to the main branch of my GitHub repository.

The only 2 changes, just like assignment 2 and the final project, were: 

Build command: npm ci

Start command: npm start

The MongoDB connection string is stored in Render using the MONGODB_URI environment variable. 

I also added Render's outbound IP ranges to MongoDB so the deployed website could connect to the database, otherwise you cannot modify anything.