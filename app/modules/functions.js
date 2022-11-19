const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

function hashString(str){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(str, salt)
}
function tokenMaker(payload){
    const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "365 days"})
    return token
}
function jwtTokenVerify(token){
    const result = jwt.verify(token, process.env.SECRET_KEY)
    if(!result?.username) throw {status: 401, message: "لطفا وارد حساب کاربری خود شوید"};
    return result
}
function createUploadPath(){
    let d = new Date();
    const Year = d.getFullYear() + "";
    const Month = d.getMonth() + "";
    const Day = d.getDay() + "";
    const uploadPath = path.join(__dirname, "..", "..", "public", "uploads", Year, Month, Day);
    fs.mkdirSync(uploadPath, {recursive: true});
    return path.join("public", "uploads", Year, Month, Day)
}

module.exports = {
    hashString,
    tokenMaker,
    jwtTokenVerify,
    createUploadPath
}