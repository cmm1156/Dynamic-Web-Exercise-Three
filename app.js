const express = require("express");

const app = express();
const port = 4000; // port 3000 is what CreateReactApp uses,
//so we can run these at the same time if it is 4000

const indexRoute = require("./routes/index.js");
const aboutRoute = require("./routes/about.js");

/* --- Serve Static Files --- */
app.use("/static", express.static("public"));

app.use("/", indexRoute);
app.use("/about", aboutRoute);

app.get("/", (req, res) => {
  res.send("<h1>Wow! Exercise Three!!</h1>");
});


/*
takes two parameters: route and callback function
regular hmtl cannot be sent
Node requires html to be sent as a string
*/


// app.listen(port, () => console.log("Exercise Three is running!"));
/*
.listen takes parameters port and callback function
this will run in the console when started

TO START, log this to console:
node app.js
*/
