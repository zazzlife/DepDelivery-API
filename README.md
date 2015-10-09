## Create Your Own RESTful API with Node.js, MongoDb, Express.js, Heroku Boilerplate

This is boilerplate code for setting up a simple node.js RESTful API app using: the express.js framework, a MongoDb database (with the help of Mongoose), and hosting it on Heroku. Please refer to the following documentation for each of these components:

* Node.js: <http://nodejs.org/>
* Express.js: <http://expressjs.com/>
* Moongoose.js (for MongoDB interaction): <http://mongoosejs.com/>
* Heroku: <https://devcenter.heroku.com/categories/support> 

### Getting started with your local development server

**Dependenices:**

1) Download node.js if you have not already <http://nodejs.org/>. You can confirm that node is successfully installed on your machine by opening up Terminal and typing 'node'. If you don't get an error, it's installed! You can exit the node process with Ctrl+c.

2) Download and install the Heroku Toolbelt <https://toolbelt.heroku.com>, this will give you Foreman and the Heroku CLI (command line interface).

3) Set up an account at <https://heroku.com>. You will be asked to enter a credit card, but the app we are doing will not incur any charges (they just need a card on file). In fact, all Heroku apps have a starter/free level.

4) Download this boilerplate repo and navigate into the code directory with Terminal:

cd path/to/this/code/directory

5) Run **npm install** to get all required libraries.

	npm install

6) We now need to setup a Git repository and Heroku app.

	git init
	git add .
	git commit -am "init commit"

7) Create the Heroku app

	heroku create

NOTE: if it is your very **FIRST** time setting up a Heroku app, you will need to upload a public key to Heroku. See <http://stackoverflow.com/a/6059231>. As explained in that StackOverlow link, if you don't yet have a public key, you'll be prompted to add one.

8) Now that your heroku app is set-up, you can rename it whenever you like (now or in the future):

	heroku rename your-new-name

Your app will now be available at your-app-name.herokuapp.com

You can always open your app with the command:

	heroku open

### Setting Up Your MongoDB database

Heroku has many nice add-ons that make it easier to set-up an app. For example, the MongoLabs add-on gives you a MongoDB database with a single line of code.

9) Add MongoLabs Starter MongoDB to your heroku app:

	heroku addons:add mongolab

If you log-in to your heroku dashboard at <https://heroku.com>, you'll now see this as an add-on. Click on the 'MongoLab' link to see your database.

10) Get the Heroku MongoLab connection string into an .env file

	heroku config --shell | grep MONGOLAB_URI >> .env

Your connection string to MongoDB will now be in a **.env** file now (go have a look at the .env file). Your app connects to this database in the app.js file:

	app.db = mongoose.connect(process.env.MONGOLAB_URI);

Your **.env file** is a secret config file that holds key app variables like this MongoDB URI string, and other things like 3rd Party API secrets and keys. It is specified in the .gitignore file, which means the .env file will **not** be tracked by .git and not available for others to see on github (this is good).

11) We're ready to go! Start server with **foreman start**.

	foreman start

Foreman reads your .env file, populates the process.env object for use in your app.

12) Open web browser to <http://localhost:5000> to view the web app.

13) Stop the web server press Ctrl+c in the Terminal window.

### Push Your App to Github and Heroku

As you make changes, you'll want to periodically push your updated code base to both Github and to Heroku (where it is publicly hosted).

To get your updated code to **Heroku**, you'll need to:

	git add .
	git commit -am "your commit message"
	git push heroku master

To get your updated code to **Github**, you'll need to:

(first, create a new repo; then, once a repo is created and you have changes to push):

	git add .
	git commit -am "your commit message"
	git push origin master

You don't need to double add and double commit though. So the following will work:

	git add .
	git commit -am "your commit message"
	git push origin master
	git push heroku master

### Auto restart development server (optional)

To auto restart your development server after you make some changes to your code. Install **Nodemon**. [Nodemon](https://github.com/remy/nodemon) will watch your files and restart the server for you.

Install Nodemon. In Terminal type,

	npm install -g nodemon

There are two possible ways to use Nodemon. You can start the app with:

	foreman run nodemon app.js

Or with the helper script:

	. devserver

The **.nodemonignore** file will ignore certain files and directories from being watched. By default and for example we're ignoring /public folder.


### This App's Framework and NodeJS

This app uses the following libraries and concepts:

#### ExpressJS

ExpressJS (http://expressjs.com/) is a popular framework for building web applications in NodeJS.

#### RESTful API Routes

Web service APIs that adhere to the REST architectural constraints are called RESTful APIs (http://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services). HTTP based RESTful APIs are defined with these aspects:

* base URI, such as http://example.com/resources/ or http://example.com/api/
* an Internet media type for the data. We are using JSON, but it can be any other valid Internet media type (e.g. XML, Atom, microformats, images, etc.)
* standard HTTP methods (e.g., GET, PUT, POST, or DELETE) and standardized and descriptive naming in API endpoints

Typical REST queries will look like:

* CREATE - http://example.com/api/create (POST)
* RETRIEVE 1 - http://example.com/api/get/:id (GET)
* RETRIEVE ALL - http://example.com/api/get (GET)
* UPDATE - http://example.com/api/update/:id (PUT)
* DELETE - http://example.com/api/delete/:id (DELETE)

The above are typically called API endpoints, and client applications interact with your API by sending requests to these endpoints. Remember, a client can be anything that can send an HTTP request, such as a browser, a mobile app, an Arduino Yun, etc.

Routing is how your app handles these incoming HTTP requests: performing the appropriate action and responding back to the client.

In node.js (using Express), this is done through executing a callback function. In human language: 

	when this request is received, perform this action, and respond back (usually with JSON).

For example:

  // when the user requests the 'api/get' route, call a function that retrieves the data, and responds back

	app.get('api/get',function(request, response){
		// step 1 - code to retrieve data
		// step 2 - code to respond back with res.json();
	})

-----

#### App Dependencies and package.json

A nice part about the ExpressJS framework (and nodejs in general) is the NPM system. NPM stands for Node Package Manager, and it allows us to include helpful node packages (libraries) that we can use in our app.

For example, open up package.json. You can see we are setting our dependent packages. When you run npm install, all of these dependencies will be installed in your node_modules folder.

package.json
	
	"dependencies": {
	  "body-parser": "^1.10.1",
	  "express": "^4.10.7",
	  "geocoder": "^0.2.2",
	  "method-override": "^2.3.1",
	  "moment": "^2.9.0",
	  "mongoose": "^3.8.21",
	  "request": "^2.51.0"
	}

Dependencies are then declared in app.js like:

	var express = require('express');
	var http = require('http');
	var path = require('path');
	var mongoose = require('mongoose');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override');

To add a new node package, do the following in terminal:

	npm install --save nameOfPackage

The --save flag will automatically include the package in package.json as a dependency.

