const jwt = require("jsonwebtoken");
const { JWT_PATIENT_PASSWORD, JWT_HOSPITAL_PASSWORD } = require("../config");

// General verify middleware
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Try verifying with patient secret
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_PATIENT_PASSWORD);
    } catch {
      decoded = jwt.verify(token, JWT_HOSPITAL_PASSWORD);
    }

    req.user = decoded; // { id, role }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}

// Role-based middleware
function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: "Forbidden: Wrong role" });
    }
    next();
  };
}

module.exports = { verifyToken, requireRole };
