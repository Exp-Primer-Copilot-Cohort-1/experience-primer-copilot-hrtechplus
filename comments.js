// Create web server


// 1. Import express
const express = require('express')

// 2. Create an express instance
const app = express()

// 3. Define the port
const port = 3000

// 4. Define a route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// 5. Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})