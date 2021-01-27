"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const model1_1 = require("./models/model1");
const app = express();
const port = 3000;
// Set up BodyParser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Render the CSS Files
app.use(express.static("public"));
const item = [{ a: 1 }, { b: 2 }];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    res.json({ data: item });
});
app.post("/user", function (req, res) {
    const newUser = req.body.newUser;
    // Add the new task from the post route.
    model1_1.addUser(newUser, function () {
        res.json({ status: 'sucessfully added' });
    });
});
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map