# TechDegree-Project-7
 React Gallery App

 --Description
This project is a React App that loads a simple gallery of images from the Flickr API. User may search any keyword and application will make a request to the Flickr API, interpret the response, and render images in a gallery style display.


--Skills and Process
Skills: React, React-Router, Axios, External API
-Site built via create-react-app from 'npx create-react-app' 
-React is simply a front-end UI. This app demonstrates the following:
    1. react-router-dom used to declare routes. This app uses 'BrowserRouter', 'Switch', and 'Route' to maintain history, redirect search queries to new URLs, and initialize the app at a custom URL
    2. App utilizes axios to fetch requests from the Flickr API, and return a promise. This api request is declared in an app method, and called via the app's componentDidMount() method to set initial state. This initial state contains arrays of objects containing Flickr's image information.
    3. App contains both functional components and classes. The 'App' component passes application methods to the 'SearchForm' class and application state to the 'PhotoContainers' functional component.
    4. 'PhotoContainers' component renders a 'Photo' component. 'Photo' uses Flickr's url convention to render the image via parameters specified in 'PhotoContainers'

--Project Attempt
Meets Expectations
--Project meets 'Exceeds Expectations' requirements, except it does not include a custom 404 page.


###### React Documentation ######

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
