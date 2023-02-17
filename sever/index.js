const express = require("express");
const db = require("./model");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(5173, () => {
  console.log("lisstening");
});
