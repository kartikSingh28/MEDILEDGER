const { Router } = require("express");
const { Document, User } = require("./db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_HOSPITAL_PASSWORD } = require("../config");
const { authMiddleware } = require("../middlewares/authMiddleware");

const hospitalRouter = Router();

// ----------------- SIGNUP -----------------
hospitalRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmPassword, name } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      role: "hospital",
      name,
    });

    res.json({ message: "Signup successful", role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------- SIGNIN -----------------
hospitalRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, role: "hospital" });
    if (!user) {
      return res.status(400).json({ error: "Hospital not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_HOSPITAL_PASSWORD,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Signin successful",
      token,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------- REQUEST ACCESS -----------------
hospitalRouter.post(
  "/hospital/requests",
  authMiddleware(["hospital"]), // ✅ Only hospitals allowed
  async (req, res) => {
    try {
      const { documentId } = req.body;
      const hospitalId = req.user.id; // ✅ Extracted from token

      const doc = await Document.findById(documentId);
      if (!doc) {
        return res.status(404).json({ error: "Document not found" });
      }

      doc.status = "Requested";
      doc.sharedWith = hospitalId;
      await doc.save();

      res.json({ message: "Requested access to document", doc });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// ----------------- FETCH GRANTED DOCUMENTS -----------------
hospitalRouter.get(
  "/hospital/documents",
  authMiddleware(["hospital"]), // ✅ Only logged-in hospitals
  async (req, res) => {
    try {
      const hospitalId = req.user.id;

      const docs = await Document.find({
        sharedWith: hospitalId,
        status: "Granted",
      }).populate("uploadedBy", "name email");

      res.json({ message: "Fetched granted documents for hospital", docs });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = { hospitalRouter };
