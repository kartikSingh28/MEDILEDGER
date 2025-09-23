// db.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

// ----------------- User Schema -----------------
const userSchema = new Schema({
  name: String, // optional (for patient/hospital name)
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  role: { 
    type: String, 
    enum: ["patient", "hospital"],
    required: true 
  },
});

// ----------------- Document Schema -----------------
const documentSchema = new Schema({
  title: String,
  fileUrl: String, // store path or dummy link
  uploadedBy: { type: Schema.Types.ObjectId, ref: "User" }, // patient
  sharedWith: { type: Schema.Types.ObjectId, ref: "User" }, // hospital
  status: { type: String, enum: ["Pending", "Granted", "Revoked"], default: "Pending" },
  uploadedAt: { type: Date, default: Date.now },
});

// ----------------- Models -----------------
const User = mongoose.model("User", userSchema);
const Document = mongoose.model("Document", documentSchema);

module.exports = { User, Document };
