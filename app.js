const express = require("express");

const app = express();
const port = 4000; // port 3000 is what CreateReactApp uses,
//so we can run these at the same time if it is 4000

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

/* --- Serve Static Files --- */
app.use("/static", express.static("public"));

/*--- Routing in Express ---*/
app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.listen(port, () => console.log("Exercise Three is running!"));
// .listen takes parameters port and callback function
// this will run in the console when started



/*
Node requires html to be sent as a string

TO START, log this to console:
node app.js
*/
