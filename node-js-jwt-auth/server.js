const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//
var allowedOrigins = ['http://localhost:4200',
                      'http://localhost:3000',
                      'http://localhost:5000/empleados'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
   // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

//var corsOptions = {
// origin: '*'
//};

//app.use(cors(corsOptions));
//app.use(cors(corsOptions2));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);