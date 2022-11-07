const { validationResult } = require("express-validator");
const { Usermodel } = require("../../models/user");
const { hashString } = require("../../modules/functions");

class AuthController{
    async register(req, res, next){
        try {
            const {username, password, email, mobile} = req.body;
            const hash_password = hashString(password)
            const user = await Usermodel.create({ username, email, mobile, password : hash_password })
            .catch(err => {
            if(err?.code == 11000){
                throw {status: 400, message: "نام کاربری ثبلا ثبت شده"}
            }
        })
        return res.json(user)
        } catch (error) {
            next(error)
        }
    }
    login(){

    }
    resetPassword(){
        
    }
}

module.exports = {
    AuthController : new AuthController
}