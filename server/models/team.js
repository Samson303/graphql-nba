const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  city: String,
});

module.exports = mongoose.model("Team", teamSchema);
