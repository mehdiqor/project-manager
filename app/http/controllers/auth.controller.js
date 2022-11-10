const { validationResult } = require("express-validator");
const { Usermodel } = require("../../models/user");
const { hashString, tokenMaker } = require("../../modules/functions");
const bcrypt = require("bcrypt");

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
    async login(req, res, next){
        try {
            const {username, password} = req.body;
            console.log(req.headers);
            const user = await Usermodel.findOne({username});
            if(!user) throw {status: 401, message: "نام کاربری یا رمز عبور اشتباه میباشد"}
            const compareResult = bcrypt.compareSync(password, user.password);
            if(!compareResult) throw {status: 401, message: "نام کاربری یا رمز عبور اشتباه میباشد"}
            const token = tokenMaker({username});
            user.token = token;
            await user.save();
            return res.status(200).json({
                status: 200,
                success: true,
                message: "شما با موفقیت وارد حساب کاربری خود شدید",
                token
            })
        } catch (error) {
            next(error)
        }
    }
    resetPassword(){
        
    }
}

module.exports = {
    AuthController : new AuthController
}