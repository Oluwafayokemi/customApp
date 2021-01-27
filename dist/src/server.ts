"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const model1_1 = __importDefault(require("../models/model1"));
// close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
const app = express_1.default();
const port = 3000;
// Set up BodyParser.
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
// Render the CSS Files
app.use(express_1.default.static("public"));
const item = [{ a: 1 }, { b: 2 }];
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    res.json({ data: item });
});
app.post("/user", function (req, res) {
    var newTask = req.body.newtask;
    // Add the new task from the post route.
    model1_1.default.addTask(newTask, function () {
        res.redirect("/");
    });
});
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map