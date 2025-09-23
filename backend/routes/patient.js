const { Router } = require("express");
const { Document, User } = require("./db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_PATIENT_PASSWORD } = require("../config");


const { verifyToken, requireRole } = require("../middlewares/authMiddleware");

const patientRouter = Router();

// ----------- SIGNUP -----------
patientRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, confirmPassword, role, name } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    if (!["patient", "hospital"].includes(role)) {
      return res.status(400).json({ error: "Invalid role. Must be patient or hospital" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      role,
      name,
    });

    res.json({ message: "Signup successful", role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------- SIGNIN -----------
patientRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, role: "patient" });
    if (!user) {
      return res.status(400).json({ error: "Patient not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_PATIENT_PASSWORD,
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

// ----------- UPLOAD DOCUMENT -----------
patientRouter.post(
  "/patient/documents/upload",
  verifyToken,
  requireRole("patient"),
  async (req, res) => {
    try {
      const { title, fileUrl } = req.body;
      const doc = new Document({ title, fileUrl, uploadedBy: req.user.id });
      await doc.save();
      res.json({ message: "Patient uploaded their medical report", doc });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// ----------- GRANT ACCESS -----------
patientRouter.post(
  "/patient/permission/grant",
  verifyToken,
  requireRole("patient"),
  async (req, res) => {
    try {
      const { documentId, hospitalId } = req.body;
      const doc = await Document.findByIdAndUpdate(
        documentId,
        { sharedWith: hospitalId, status: "Granted" },
        { new: true }
      );
      res.json({ message: "Granted hospital access to document", doc });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// ----------- REVOKE ACCESS -----------
patientRouter.post(
  "/patient/permissions/revoke",
  verifyToken,
  requireRole("patient"),
  async (req, res) => {
    try {
      const { documentId } = req.body;
      const doc = await Document.findByIdAndUpdate(
        documentId,
        { sharedWith: null, status: "Revoked" },
        { new: true }
      );
      res.json({ message: "Revoked hospital access to document", doc });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// ----------- FETCH PATIENT DOCUMENTS -----------
patientRouter.get(
  "/patient/documents",
  verifyToken,
  requireRole("patient"),
  async (req, res) => {
    try {
      const docs = await Document.find({ uploadedBy: req.user.id });
      res.json({ message: "Fetched all documents belonging to patient", docs });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

module.exports = { patientRouter };
