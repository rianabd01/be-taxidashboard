require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// routes
app.use("/api/trips", require("./routes/trips.route"));

app.get("/", (_, res) => {
  res.send("We are on home");
});

app.get("/healthz", (_, res) => {
  res.status(200).send("Ok");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
