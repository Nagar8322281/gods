const mongoose = require("mongoose");

const ObgjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required : true,
    trim: true,
    unique: true

  },
  profilePic: {
    type: ObgjectId,
    ref:'favorite'
  },
});

module.exports = mongoose.model('users', UserSchema);
