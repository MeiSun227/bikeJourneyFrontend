# Getting Started with Create React App

This project is built in conjunction with the backend, which can be found in bike journey api. It fetches the REST API from the bike journey backend and displays the data using Material UI components. Additionally, there are unit tests for the components, and further development can include end-to-end testing with tools like Cypress. Lottie React is utilized to incorporate animation effects on the landing page. The features include a single station page that displays station information and a map, a station table with a search bar, and a journey table with a search bar, pagination, and column sorting. 

## Table Contents
- [Configuration](#configuration)
- [Features](#features)
- [Testing](#testing)


## Configuration

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `Google_api_key`

Developers need to configure a Google API key that is used in the map functionality of the application. This can be achieved by setting up an environment variable specifically for the API key. It is important to ensure that the .env file for TypeScript is correctly configured with the necessary types and embedded values. Please make sure to configure the environment variable correctly and embed it in the .env file for the application to function properly.

Read more:
 - https://developers.google.com/maps/documentation/javascript/get-api-key
 - https://dev.to/asjadanis/parsing-env-with-typescript-3jjm

### `Lottie react`

This is a lightweight animated SVG that can be seamlessly embedded into React/TypeScript code using JSON. It offers various motion and functions that can be utilized within the SVG. Developers have the flexibility to explore and utilize additional motion and functionality within the SVG to enhance the user experience

Read more: 
 - https://lottiereact.com/

## Feature
- #### Landing Page
![Alt text](./src/assets/Landing.png "Landing Page")

- #### Station Table 
![Alt text](./src/assets/Station.png "Station Table")

- #### Add Station 
![Alt text](./src/assets/AddStationModal.png "Add Station Modal")

- #### Single Station  
![Alt text](./src/assets/SingleStation.png "Add Station Modal")

- #### Journey Table
![Alt text](./src/assets/Journey.png"Add Station Modal")


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
