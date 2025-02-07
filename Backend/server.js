const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// In-memory storage for events (for demonstration purposes)
let events = [];

// GET /events – retrieve all events
app.get('/events', (req, res) => {
  res.json(events);
});

// GET /events/:id – retrieve a specific event by id
app.get('/events/:id', (req, res) => {
  const event = events.find(e => e.id === req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
});

// POST /events – create a new event
app.post('/events', (req, res) => {
  const { title, description, date, location } = req.body;
  if (!title || !description || !date || !location) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newEvent = {
    id: uuidv4(),
    title,
    description,
    date,
    location
  };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
