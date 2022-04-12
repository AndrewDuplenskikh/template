const express = require('express');
const config = require('./config');
const cors = require('cors');

const { loanPurposesRouter } = require('./routes/loanPurposes');
const { sendDataRouter } = require('./routes/sendData');

const app = express();

app.use(cors());

app.use('/loanPurposes', loanPurposesRouter);
app.use('/sendData', sendDataRouter);

app.get('/', (req, res) => {
    res.send('Mock-server is running');
});

app.listen(config.PORT, () => {
    console.log(`mock-server listening on ${config.PORT}...`);
});
