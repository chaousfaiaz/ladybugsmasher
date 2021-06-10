// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/public", function (req, res) {
  
     res.render('assignment5.html');
})

// start the server listening for requests
app.listen(process.env.PORT || 3002, 
	() => console.log("Server is running on port 3002"));