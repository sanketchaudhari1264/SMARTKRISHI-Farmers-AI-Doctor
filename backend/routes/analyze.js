const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const fakeCropAnalysis = {
  tomato: {
    disease: "Early Blight",
    severity: "Moderate",
    treatment: "Apply fungicide spray every 7-10 days. Remove affected lower leaves immediately.",
    fertilizer: "Use balanced NPK (19:19:19) fertilizer with added zinc sulfate.",
    prevention: "Use mulch, ensure good air circulation, avoid overhead watering."
  },
  rice: {
    disease: "Rice Blast",
    severity: "High",
    treatment: "Apply copper-based fungicide. Drain excess water from the field.",
    fertilizer: "Use potassium-rich fertilizer. Avoid excessive nitrogen.",
    prevention: "Use disease-resistant varieties, maintain proper water levels."
  },
  wheat: {
    disease: "Wheat Rust",
    severity: "Moderate",
    treatment: "Apply sulfur dust or fungicide spray. Remove infected plants.",
    fertilizer: "Use balanced fertilizer based on soil test.",
    prevention: "Plant resistant varieties, avoid overcrowding, sanitize tools."
  }
};

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { cropName, description = "No description provided" } = req.body;

    if (!cropName) {
      return res.status(400).json({ success: false, error: "cropName is required" });
    }

    const diagnosis = fakeCropAnalysis[cropName.toLowerCase()] || {
      disease: "Unknown – Needs Expert Review",
      severity: "Undetermined",
      treatment: `Based on your description: "${description}" — consult a local expert.`,
      fertilizer: "Use crop-specific balanced fertilizer as per soil test.",
      prevention: "Inspect crops regularly and avoid overwatering."
    };

    res.json({ success: true, cropName, diagnosis });

  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;