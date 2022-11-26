const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    name : {type : String, required : true},
    description : {type : String},
    username : {type : String, required : true},
    users : {type : [mongoose.Types.ObjectId], default : []},
    owner : {type : mongoose.Types.ObjectId, required : true}
}, {
    timestamps : true
});
const teamModel = mongoose.model("team", TeamSchema);

module.exports = {
    teamModel
}