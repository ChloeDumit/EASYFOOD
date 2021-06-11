var dbinfo = require('../db/index');

var http = require("http");
var admin = require('firebase-admin');
var firebase = require("firebase");
var express = require("express");
var app = express();
var routerProj = require("../routes.js");
var bodyParser = require("body-parser");
var port = 3000; // set our port
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var server = app.listen(port);
var serviceAccount = require("../serviceAccountKey.json");


app.use(bodyParser.json());

const config = getFirebase()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://easyfood-4d7ac-default-rtdb.firebaseio.com"
});
const db = firebase.initializeApp(config);
app.use("/v1", routerProj);

console.log("Server running at http://127.0.0.1:3000/");
module.exports.db = db.database(); //this doesnt have to be database only