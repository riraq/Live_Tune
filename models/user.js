const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String },
  events: { 
    id: {type: String },
    name: {type: String },
    image: {type: String },
    link: {type: String },
    date: {type: Date },
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
