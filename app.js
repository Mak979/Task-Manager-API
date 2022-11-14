const express = require('express');
const tasksRoutes = require('./routes/tasks');
const connectDb = require('./db/connect');
require('dotenv').config();

const app = express();

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Task Manager API</h1> <a href="/api-docs"> Documentation </a>');
});

app.use('/api/v1/tasks', tasksRoutes);

const PORT = 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
