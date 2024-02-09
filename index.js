const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/validate", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "admin") {
        res.send({ redirect: "/", message: "Logged Successfully!" });
    } else {
        res.send({ redirect: "/login", message: "Invalid Credentials!" });
    }
});

app.listen(5000);