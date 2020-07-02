const mongoose = require("mongoose");
const schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  age: Number,
  teamId: String,
});

module.exports = mongoose.model("Player", playerSchema);
