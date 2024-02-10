const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let auth = false;

app.post("/validate", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "admin") {
        auth = true;
        res.send({ status: "success", message: "Logged Successfully!", redirect: "/", });
    } else {
        auth = false;
        res.send({ status: "error", message: "Invalid Credentials!", redirect: "/login" });
    }
});

app.get("/checkAuth", (req, res) => {
    res.send({ auth });
});

app.listen(5000);