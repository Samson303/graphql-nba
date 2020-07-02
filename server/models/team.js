const mongoose = require("mongoose");
const schema = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
  city: String,
});

module.exports = mongoose.model("Team", teamSchema);
