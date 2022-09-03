const express = require("express");

const { registrationsRouter } = require("./routes/registrations.route");

const app = express();

app.use(express.json());

app.use("/api/v1/registrations", registrationsRouter);

app.all("*", (req, res) =>{

    const { method, url } = req;

    res.status(404).json({
        status: "error",
        message: `${method} / ${url} does not exist in our server`
    });
});

module.exports = { app };