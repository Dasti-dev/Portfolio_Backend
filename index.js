const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const { emailSender } = require('./api/api');

const PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors());

app.post('/send', emailSender )

app.use('/',(req,res) => {
    res.send('Portfolio Backend');
})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`)
})