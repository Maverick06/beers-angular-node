# Beers 'n AngularJS + Node.js

This is a template project used to be a starting point for Ajax/JSON CRUD using AngularJS and Node.js

## To get this up and running...

* Install [Node.js](http://nodejs.org) locally or on your server.
* Type `npm install` in the console the first time to get the server's dependencies, which will get pulled into 'node_modules'
* Type `node index.js` in the console to start the server
* Go to [http://localhost:3000](http://localhost:3000) or your server environment/port in your browser.

## A few side notes...

* All of the front-end and AngularJS code is in the 'public' folder
* The server-side Node.js code is a combo of index.js and the JSON in the data folder.  Keep in mind there is no DB associated with this project and everything that gets persisted is just in memory.  Once you re-start the server, it will clear everything out.  A good follow-on project would be to write these to a DB like MongoDB.
* I recommend [Cloud9](http://c9.io) if you don't run it locally. It is free, has a command line for running the instructions above, and gives you a public URL so you can hit it on any device or share it with a friend.