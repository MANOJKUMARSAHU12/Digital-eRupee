const express = require('express');
const cors=require('cors');
const app = express();
const port = 4000; // You can change this to any port number you prefer

app.use(cors())

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express.js!!');
});

app.get('/backendApi/helloWorld', (req, res) => {
    res.send('Hello World!');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
