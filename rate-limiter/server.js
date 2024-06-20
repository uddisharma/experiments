const express = require("express")
const rateLimit = require("express-rate-limit");
const path = require("path")
let logger = require("morgan");


const app = express()

const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
});

// app.use(limiter);

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index");
});

app.post("/sum", (req, res) => {
    const { a, b } = req.body;
    return res.json({ "sum": a + b })
})

app.listen(3000, () => {
    console.log('server is working')
})