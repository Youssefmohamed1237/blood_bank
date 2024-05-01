const mongoose = require("mongoose");
const validator = require("validator");
const needschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    validate: [validator.isEmail, "email should be valid"],
  },
  phone: {
    type: Number,
    required: true,
    minlength: 11,
  },
  bloodType: {
    type: String,
    required: true,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      message: "blood type is not sutiable",
    },
  },

  message: {
    type: String,
  },
});
const need = mongoose.model("need", needschema);
module.exports = need;
