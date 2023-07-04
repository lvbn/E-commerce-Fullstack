# E-commerce Full Stack

![complete-flow](https://github.com/lvbn/E-commerce-frontend/assets/65773848/33c213ed-0df6-4c47-bdb7-a07808342aed)

## Visit the application
https://646b443975ecde149a5927d4--e-commerce-fe.netlify.app

## About this project

![menu_gif](https://github.com/lvbn/E-commerce-frontend/assets/65773848/4bcf3a8d-2641-4d71-96b8-fbf8f4f7fb67)


This project is a prototype of an online shop. It drives the user through a smooth, frictionless, and rich-in-conversion shopping experience. The animations provide a pleasant UI and allow users to constantly interact with the interface. Corners, borders, and colors are consistent. Calls to action are strategically placed aiming for the maximum number of conversions possible.


## Frontend

Vite + React + TypeScript + Zustand + Framer motion  + CSS
## Backend

Node + Express + TypeScript

## Database

MongoDB + Mongoose + Atlas

## Image Storage

Cloudinary

## Payment

Stripe

## Other Libraries

1. CORS: handles cross-origin resource sharing
2. dotenv: handles environmental variables
3. nodemon: runs the server

## Features

### * Landing page:
Users land on the products page allowing instant contact with products and goods. The title of the product and its price are displayed below the product image. The client's preference is to deliver an easy-to-use and clear UI.
### * Shopping cart:
- The shopping cart floats to the right.
- Is accessible anywhere in the application in order to allow the customer to keep track of it without interrupting the shopping flow, increasing sales and providing a better user experience.

### * Product details:
Here the user can see all product details and add the product to the shopping cart.

### * My store page
On this page, the user will have an overview of his products and a sidebar with extra functionalities used by sellers.

### * Add product page
Here the seller will fill out the form to create a new product with all the needed information and product image. Newly added products can also be seen on the landing page along with all other products.

### * Checkout page
The checkout page is provided by Stripe.

## Getting it up and running
### In the client directory:

#### * `npm i`

install all frontend dependencies

#### * Environmental Variables

Assign 'http://localhost:8080' to the `VITE_BASE_URL` env variable.

#### * `npm run dev`

Runs the app in development mode.\
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### In the server directory:

#### * `npm i`

install all backend dependencies

#### * Environmental Variables

Assign 'http://127.0.0.1:5173' to the `DASHBOARD_CLIENT` env variable.
Assign your atlas connection string to the `DB_CONN_STRING` env variable.
Assign your database name to the `DB_NAMe` env variable.
Assign your collection name to the `PRODUCTS_COLLECTION_NAME` env variable.
Assign 8080 to the `PORT` env variable.
#### * `npx nodemon`

Runs the app in development mode.\
Open [http://127.0.0.1:8080](http://127.0.0.1:8080) to view it in your browser.
