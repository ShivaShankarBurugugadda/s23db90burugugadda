const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
color:String,
model: String,
year: Number,

})
module.exports = mongoose.model("vehicle",
vehicleSchema)