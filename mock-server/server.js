const express = require("express");
const config = require("./config");

const { loanPurposesRouter } = require("./routes/loanPurposes");

const app = express();

app.use("/loanPurposes", loanPurposesRouter);

app.get("/", (req, res) => {
    res.send('Mock-server is running')
})

app.listen(config.PORT, () => {
    console.log(`mock-server listening on ${config.PORT}...`)
})