# React Art Gallery
Welcome to the React Art Gallery, a dynamic single-page application crafted with React for art enthusiasts and collectors. This application offers a virtual gallery experience, enabling users to manage their art collection efficiently. React Art Gallery allows users to view the currently featured artwork, explore a comprehensive list of artworks, add new pieces to their collection, and select any artwork to be the "featured" piece.

## Features
Main Gallery Page: A central page that displays all the art pieces, with each artwork's name and artist shown underneath to provide quick insights into the collection.
Individual Artwork Pages: Each artwork can be accessed through its own dedicated page, which provides more detailed information about the piece, allowing viewers to engage deeply with each artwork.

## Requirements
React: Set up the project using Create React App to harness a powerful environment for building the user interface.
CSS: Style the application to be visually engaging and intuitive for users.
JavaScript (JS): Utilize React's state management and rendering capabilities to manage interactions such as adding new artworks and updating the featured artwork display.
React Router: Implement react-router-dom for routing to manage navigation to individual artwork pages.
Version Control Using Git
Working with Branches

## To enhance collaboration and streamline development, follow a branching strategy:

Create a Development Branch: After initializing your repository, create a separate branch for development to keep the main branch stable.

git checkout -b development
This command creates a new branch named development and switches to it.

Regular Commits: Make regular commits in your development branch to track changes and updates:

git add .
git commit -m "Add new feature or fix"
Merge to Main: Once you are ready to update the main version of your application, merge the development branch into the main branch:

git checkout main
git merge development
Handling Merge Conflicts: If there are conflicts during the merge, Git will prompt you to resolve them. Ensure all conflicts are resolved before completing the merge.

Push Changes: Always keep your remote repository updated:

git push origin main
Getting Started
Prerequisites
Ensure you have node and npm installed on your machine, as they are essential for running the React application.

## Setup Instructions
Create a new React project:

npx create-react-app react-art-gallery
cd react-art-gallery
Install React Router: This is crucial for adding navigation capabilities to the app.

npm install react-router-dom
Start the Development Server:

npm start
This will run the app in development mode. Visit http://localhost:3000 to see it in your browser.

Initialize Git and Branching: Set up your repository and branching as outlined in the Version Control section.

## Commands to Remember
npm start: Runs the app in development mode.
git add .: Stages your changes for the next commit.
git commit -m "your-message": Records your snapshot into your history.
git push: Updates the remote repository with your local changes.