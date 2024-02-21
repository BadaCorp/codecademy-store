[![Netlify Status](https://api.netlify.com/api/v1/badges/791de1d0-ad68-491c-bb5d-761ee0ec162b/deploy-status)](https://app.netlify.com/sites/badacorp-codecademy-store/deploys)

# Codecademy Store

This project involves building a program that mimics Codecademy’s own online store! The application displays products from the Codecademy store and allows the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.

## State
This application has three slices of state:

inventory: An array of objects representing the items that are available to purchase.
cart: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.
currencyFilter: A string that represents the currency used to calculate the prices displayed to the user: ‘USD’, ‘CAD’ or ‘EUR’.
An example of this application’s state might look like this:

JavaScript

```state = { inventory: [{ name: 'Hat', img: 'img/hat.png', price: 15.99 }, { name: 'T-Shirt', img: 'img/t-shirt.png', price: 18.99 },{ name: 'Hoodie', img: 'img/hoodie.png', price: 49.99 },],cart: {'Hat': { price: 15.99, quantity: 0 },'T-Shirt': { price: 15.99, quantity: 2 },'Hoodie': { price: 18.99, quantity: 1 },},currencyFilter: 'CAD'} ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

