const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");

const app = express();
const PORT = 5000;

// Allow all origins (fixes Failed to fetch / CORS errors in browser)
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/analyze", analyzeRoute);

// Health check
app.get("/", (req, res) => {
  res.send("✅ SmartKrishi Backend is Running!");
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});