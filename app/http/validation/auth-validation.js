const {body} = require("express-validator");
const { Usermodel } = require("../../models/user");

function registerValidator(){
    return [
        body("username").custom(async (value, ctx) => {
            if(value){
                const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi
                if(usernameRegex.test(value)){
                    const user = await Usermodel.findOne({username : value})
                    if(user) throw "نام کاربری تکراری میباشد"
                    return true
                }
                throw "نام کابری صحیح نیست"
            }
            throw "نام کاربری نمیتواند خالی باشد"
        }),
        body("email").isEmail().withMessage("ایمیل وارد شده صحیح نمیباشد")
        .custom(async email => {
            const user = await Usermodel.findOne({email})
            if(user) throw "ایمیل تکراری میباشد"
        }),
        body("mobile").isMobilePhone("fa-IR").withMessage("شماره موبایل وارد شده صحیح نمیباشد")
        .custom(async mobile => {
            const user = await Usermodel.findOne({mobile})
            if(user) throw "شماره موبایل تکراری میباشد"
        }),
        body("password").isLength({min: 6, max:16}).withMessage("رمزعبوز باید بین 6 تا 16 نویسه باشد")
        .custom((value, ctx) => {
            if(!value) throw "رمزعبور نمیتواند خالی باشد"
            if(value !== ctx?.req?.body?.confirm_password)
            throw "رمز عبور با تکرار ان یکسان نمیباشد"
            return true
        })
    ]
}

module.exports = {
    registerValidator
}