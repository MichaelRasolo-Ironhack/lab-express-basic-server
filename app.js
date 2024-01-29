// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express = require('express')
const morgan = require('morgan')


// CREATE EXPRESS APP
// Here you should create your Express app:
const app = express()
//! Serving static files

//! Parse json in the request sent by the client.


// MIDDLEWARE
// Here you should set up the required middleware:
// - `express.static()` to serve static files from the `public` folder
app.use(express.static("public"))
// - `express.json()` to parse incoming requests with JSON payloads
app.use(express.json())
// - `morgan` logger to log all incoming requests
app.use(morgan("dev"))


const projects = require("./data/projects.json")
const articles = require("./data/articles.json")
// ROUTES
// Start defining your routes here:
app.get("/", (request, response) => {
	response.sendFile(__dirname + "/views/home.html")
})
app.get("/blog", (request, response) => {
	response.sendFile(__dirname + "/views/blog.html")
})

app.get("/api/projects", (req, res) => {
	res.json({ result: projects})
})
app.get("/api/articles", (req, res) => {
	res.json({ result: articles})
})
app.use((req, res) => {
	res.status(404).sendFile(__dirname + "/views/not-found.html")
})

// START THE SERVER
// Make your Express server listen on port 5005:
app.listen(5005, () => {
	console.log(`Server is 🏃 on http://localhost:5005`)
})