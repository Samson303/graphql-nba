const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  age: Number,
  teamId: String,
});

module.exports = mongoose.model("Player", playerSchema);
