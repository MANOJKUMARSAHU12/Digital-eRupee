const express = require('express');
const cors=require('cors');
const app = express();
const port = 4000; // You can change this to any port number you prefer

app.use(cors());
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express.js!!');
});

app.get('/backendApi/helloWorld', (req, res) => {
    res.send('Hello World!');
});

// Define the POST route for registration
app.post('/backendApi/register', (req, res) => {
    // Extract the registration data from the request body
    const { name, email, password, balance } = req.body;
  
    // You can now handle the registration data, e.g., save it to a database
    console.log('Received registration data:');
    console.log({ name, email, password, balance });
  
    // Send a response back to the client
    res.status(200).json({ message: 'Registration successful!' });
  });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
