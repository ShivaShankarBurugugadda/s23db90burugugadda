const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
color:String,
model: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
year: {
    type: Number,
    required: true,
    min: 1900, 
    max: 2023, 
  },

})
module.exports = mongoose.model("vehicle",
vehicleSchema)