# explodii-mern-maps-travel

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/explodii-mern-maps-travel

https://explodii-mern-maps-travel.herokuapp.com

by MrsKamran https://github.com/MrsKamran

https://github.com/MrsKamran/habit-tracker

<p align="center">
  <a href="https://explodii.netlify.app/" rel="noopener" target="_blank">
 <img src="https://personal-website-me.s3.amazonaws.com/explodii-responsive-resized.png" alt="Project thumbnail"></a>
</p>
<h3 align="center">Explodii</h3> 
<div align="center" >
    <a href="https://explodii.netlify.app" rel="noopener" align="center"> https://explodii.netlify.app
    
</div>
<br>
<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> Explodii (2nd project) is an excursion booking app that allows you to travel to different places, meet new people and reconnect with nature. We offer a variety of excursions all over North America for all budgets, each trip has a unique theme. You will be accompanied by competent and passionate guides. Explodii allows to share your experience with people from around the world.

</p>

## 🥳 About This Production <a name = "problem_statement"></a>

After finishing my first react project Quest, I really wanted to build a fully functional fullstack app. I decided to expand my skills and learn more about back-end development. I took a Udemy course about NodeJS/Express and MongoDB, finished it and decided to put my knowledge in practice as fast as possible.

Explodii is a rich fullstack app with many features. The application adopts a Front-End MVC(Model View Controller) architecture pattern with React as the Front-End framework and Express.js as back-end framework.

For the purposes of this app I did build a Stateless RESTful API that handles four resources : excursions users, reviews and bookings.All the data for each resource is stored in a MongoDB database using MongoDB Compass. The models are built using mongoose same goes with all the CRUD operations, filters, sorts, pagination, and more.

The features in Explodii :

- Explodii offers multiple excursions with unique theme for all budgets. The user can sort and filter them according to her/his preferences.
- The user can book the excursion of his choice, the payments will be handled using Stripe.
- Users can create their own account using an email and a password, the passwords are crypted with bcrypt before they are stored in the DB.
- When the user successfully logs in, a json web token with an expiration is issued for him to access protected routes. It's stored in a cookie.
- Users can update their account information (name, email, password, profile picture).
- Users have access to their bookings in the account section.
- Users can write reviews about their experiences with their excursion(s). They can modify and delete reviews as they see fit.

For each excursion you can track all the locations you will visit in a map built using google map API.

Finally, explodii is a responsive app. Some components are uniquely designed according to the device screen size, please try the app on all devices.

## ⛏️ Built With <a name = "tech_stack"></a>

- [React/Create React App](https://reactjs.org/) - I used Create React App to build user interfaces in this web application.
- [SCSS/Styled-Components](https://sass-lang.com/) - I used SCSS with Block Element Modifier (BEM) notation and Styled-Components to design this full stack web app.
- [Node.js/ Express.js](https://expressjs.com/) - I used Node.js/ Express.js to build the server side.
- [MongoDB/Mongoose](https://expressjs.com/) - I used MongoDB with Mongoose to manage data.
- [AWS S3](https://www.netlify.com/) - I used AWS S3 to store images.
- [JSON Web Tokens](https://www.netlify.com/) - I secured this application using JSON Web Tokens.
- [AWS S3](https://www.netlify.com/) - I used Postman to test the RESTful API I built.
- [Netlify](https://www.netlify.com/) - I deployed the react app on the Netlify cloud.
- [Heroku](https://www.heroku.com/) - I deployed the backend server on Heroku.

## 🧐 For more details <a name = "tech_stack"></a>

Please visit : https://iliasallek.com/explodii/

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/explodii-mern-maps-travel.git
git push -u origin main
```

## Heroku

```java
heroku create explodii-mern-maps-travel
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

CLIENT_URL=""

JWT_COOKIE_EXPIRES_IN=""

STRIPE_WEBHOOK_SECRET=""
EMAIL_FROM=""

SENDGRID_USERNAME=""
SENDGRID_PASSWORD=""

EMAIL_HOST=""
EMAIL_PORT=""
EMAIL_USERNAME=""
EMAIL_PASSWORD=""

AWS_BUCKET_NAME=""
AWS_BUCKET_REGION=""
AWS_ACCESS_KEY_ID=""
AWS_ACCESS_SECRET_ID=""

REACT_APP_SC_ATTR=""
REACT_APP_URL=""
REACT_APP_GOOGLE_MAPS_API_KEY=""
REACT_APP_STRIPE_SECRET_KEY=""

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/explodii-mern-maps-travel?retryWrites=true&w=majority"
heroku config:set PASSWORD="something-secret"

heroku config:set PUBLIC_URL="https://explodii-mern-maps-travel.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== explodii-mern-maps-travel Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on explodii-mern-maps-travel will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== explodii-mern-maps-travel Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/explodii-mern-maps-travel/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/explodii-mern-maps-travel/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
