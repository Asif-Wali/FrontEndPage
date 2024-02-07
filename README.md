# App Documentation

## Introduction
This React app is designed to showcase a simple UI with a title, a button, and a background image that is responsive across all screen sizes.



## Deployed Link
Here you will find the deployed link of the app in production:(https://remarkable-travesseiro-a29130.netlify.app/)


# Project Structure
The project structure is organized as follows:


- **`/node_modules`:** Contains project dependencies.
- **`/public`:** Holds static assets like the HTML file and images.
- **`/src`:** The source code of the application.
  - **`/Components`:** Contains React components which are rendered on the single page called LandingPage.jsx which is stored inside the Pages folder of the same directory.
  - **`/Images`:** Contains different Images used in this project. 
  - **`/Pages`:** Houses React pages.
  - **`/Styles`:** Includes styling files for components and pages.
  - **Other files:**
    - `App.css`
    - `App.js`
    - `index.css`
    - `index.js`
- **`.gitignore`:** Specifies files and directories to be ignored by version control.
- **`package-lock.json`:** Locks the version of dependencies.
- **`package.json`:** Contains project metadata and dependencies.
- **`README.md`:** Documentation file providing an overview of the project structure.

## Components
1. **NavBar Component (NavBar.jsx)**
   - The NavBar component displays the NavBar of the app, which is deliberately kept empty in this app.
3. **Hero Component (Hero.jsx)**
   - The Hero component displays the hero section which renders an image and has a translucent layer on top (set as `background: rgba(0,0,0, 0.2)` in this case), which can be altered accordingly. It also has a title and a button displaying the title of our app and alerting the "Hello World" message, respectively.

## Pages
1. **Landing Page**
   - This is the component which imports other components from Components directory and then renders it on the app.js.
## Styling
- The components are styled using module.css, with each component having its own uniquely named folder inside which there is its respective file.



## Dependencies
- "react" and "react-dom" for building user interfaces.

## Setup and Running the App
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Execute `npm start` to run the app locally.


## Future Improvements
- Implement state management for more complex interactions.
- Enhance styling for a more polished look.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
