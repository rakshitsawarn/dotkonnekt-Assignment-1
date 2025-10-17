// Import Express module
const express = require('express');

// Create Express App
const app = express();

//Set the port
const port = 3000;

//Middleware to parse JSON
app.use(express.json());