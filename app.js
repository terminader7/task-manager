const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

const port = 3000;

//middleware
app.use(express.json());

//routes

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
