var vehicle = require('../models/vehicle');



exports.vehicle_list = async function(req, res) {
try{
thevehicle = await vehicle.find();
res.send(thevehicle);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
}



// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function(req, res) {
    try{
    thevehicle = await vehicle.find();
    res.render('vehicle', { title: 'vehicle Search Results', results: thevehicle });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };




exports.vehicle_create_post = async function(req, res) {
console.log(req.body)
let document = new vehicle();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"vehicle_type":"goat", "cost":12, "size":"large"}
document.color = req.body.color;
document.model = req.body.model;
document.year = req.body.year;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific vehicle.
exports.vehicle_detail = function(req, res) {
res.send('NOT IMPLEMENTED: vehicle detail: ' + req.params.id);
};

// Handle vehicle delete form on DELETE.
exports.vehicle_delete = function(req, res) {
res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id);
};
// Handle vehicle update form on PUT.
exports.vehicle_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id);
};
