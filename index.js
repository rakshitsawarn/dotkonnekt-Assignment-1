// Import Express module
const express = require('express');

// Create Express App
const app = express();

//Set the port
const port = 3000;

//Middleware to parse JSON
app.use(express.json());

// Creating in memory storage for tasks

// It is an array which will store all the tasks

let tasks = [];

// It will give unique id to each task

let next_id = 1;
