const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    // profilePic: [{ type: String, required: false }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("gallery", gallerySchema);
