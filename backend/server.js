require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { hospitalRouter } = require("../backend/routes/hospital");
const { patientRouter } = require("../backend/routes/patient");

const app = express();

// --- Middlewares ---
app.use(cors()); 
app.use(express.json()); 


app.use("/api/hospital", hospitalRouter);
app.use("/api/patient", patientRouter);


async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ Connected to MongoDB");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(` Server started at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(" Error connecting to DB:", err.message);
  }
}

main();
