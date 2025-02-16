const mongoose = require("mongoose");

const ObgjectId = mongoose.Schema.Types.ObjectId;

const FavoriteSchema = new mongoose.Schema({
  imgSrc: {
    type: String,
    require: true,

  },
  name: {
    type: String,
    trim:true
  },
  user: {
    type: ObgjectId,
    ref:'users',
    
  },
});

module.exports = mongoose.model('favorite', FavoriteSchema);
