//require dependencies

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//initiate express
var app = express();

//assign sport
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//assigning routes

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function(){
    console.log("listening on" + port);
});
