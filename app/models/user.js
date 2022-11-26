const mongoose = require("mongoose");

const inviteRequest = new mongoose.Schema({
    teamID : {type : mongoose.Types.ObjectId, required : true},
    caller : {type: String, required : true, lowecase : true, lowercase : true},
    requestDate : {type: Date, default : new Date()},
    status : {type : String, default : "pending"}
})

const UserSchema = new mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    username : {type : String, required : true, unique: true, lowercase : true},
    mobile : {type : String, required : true, unique : true},
    roles : {type : [String], default : ["USER"]},
    email : {type : String, required : true, unique : true, lowercase : true},
    password : {type : String, required : true},
    profile_image : {type : String, required : false},
    skills : {type : [String], default : []},
    team : {type : [mongoose.Types.ObjectId], default : []},
    token : {type : String, default : []},
    inviteRequests : {type : [inviteRequest]}
}, {
    timestamps : true
});
const Usermodel = mongoose.model("user", UserSchema);

module.exports = {
    Usermodel
}