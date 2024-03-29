# Space Gallery

Space Gallery is a React application that displays a collection of photos fetched from the NASA API. Users can view details of each photo and add them to their favorites.

## Project Structure

The project is structured as follows:

- `src/`: This directory contains all the React components and the main `App.js` file.
  - `components/`: This directory contains all the individual React components used in the application.
- `public/`: This directory contains the static files served by the application.
- `package.json`: This file contains the list of project dependencies and scripts.

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Components

- `Header`: Displays the header of the application.
- `PhotoCard`: Displays a single photo card with the photo, title, and buttons to view details and toggle the photo as a favorite.
- `FavoritesFilter`: Allows the user to filter the displayed photos to only show their favorites.
- `PhotoDetail`: Displays the details of a selected photo.

## Getting Started

To get started with this project:

1. Clone the repository.
2. Install the dependencies with `npm install`.
3. Start the development server with `npm start`.