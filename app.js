const express = require("express"),
      forceSecure = require("force-secure-express"),
      app = express(),
      cookieParser = require("cookie-parser"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      indexRoutes = require("./routes/index");


app.use(forceSecure([
    "thai-dine.com",
    "www.thai-dine.com"
]));

require('dotenv').config()

var url = process.env.URL;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(__dirname + "/public"));

app.use(indexRoutes); 

const PORT = process.env.PORT || 5005;
app.listen(PORT, process.env.IP, function() {
   console.log('Server started on ' + PORT)
});