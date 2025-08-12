const mongoose = require ('mongoose');
const StatusSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      min: 0,
      required: true,
    },
    category:{
      type: String,
      required: true,
    },
  },{
    timestamps: true
  }
);

module.exports = mongoose.model("Product", StatusSchema);