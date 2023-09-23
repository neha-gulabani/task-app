const express = require('express');
const mongoose = require('mongoose');


const bodyParser = require('body-parser');

const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://127.0.0.1:27017';

// Database and collection names
const dbName = 'test';
const collectionName = 'projects';
const collectionReminders = 'reminders'

// Create Express app
const app = express();
const cors = require('cors');
// Middleware to parse JSON data
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Define a task schema and model
const projects = new mongoose.Schema({
    task: String,
    status: String,
    details: String,
});

//Define a reminder schema and model
const reminders = new mongoose.Schema({
    reminder: String,
    date: String,

})

// const Task = mongoose.model('project', projects);

var Task = mongoose.model("Task", projects);

var Reminder = mongoose.model("Reminder", reminders);

// Create a new MongoDB client

const client = new MongoClient(uri, { useUnifiedTopology: true });

// Connect to the MongoDB server

client.connect();
// Access the database and collection
const db = client.db(dbName);
const collection = db.collection(collectionName);
const collectionReminder = db.collection(collectionReminders)

// Create a new task
app.post('/', async (req, res) => {
    res.send('backend')

    try {
        //retrieving data from frontend
        const { task, status, details } = req.body
        const taskData = new Task({ task: task, status: status, details: details })
        // Insert the data
        const result = await collection.insertOne(taskData);
    } catch (error) {
        res.status(400).send("unable to save to database")

        // res.status(500).json({ error: 'An error occurred' });
    }
});

//Send task to frontend
app.get('/receiveTasks', async (req, res) => {


    let results = await collection.find({}).toArray()



    res.send(results).status(200);


})

//Send reminders to database
app.post('/reminders', async (req, res) => {

    try {
        //retrieving data from frontend
        const { reminder, dates } = req.body
        const reminderData = new Reminder({ reminder: reminder, date: dates })

        // Insert the data
        const result = await collectionReminder.insertOne(reminderData);
    } catch (error) {
        res.status(400).send("unable to save to database")

    }

})

//Send reminders to frontend
//Send task to frontend
app.get('/receiveReminders', async (req, res) => {


    let results = await collectionReminder.find({}).toArray()


    res.send(results).status(200);


})
//send reminders to frontend for the calendar feature
app.get('/calendar', async (req, res) => {

    let results = await collectionReminder.find({}).toArray()
    res.send(results).status(200);


})
//delete tasks from database
app.delete('/:task', async (req, res) => {
    const taskName = req.params.task;

    try {
        const result = await collection.deleteOne({ task: taskName });
        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'Task deleted successfully' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Start the server
app.listen(3006, () => {
    console.log('Server is running on port 3006');
});

