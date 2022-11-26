const { body, param } = require("express-validator");
const { teamModel } = require("../../models/team");

function createTeamValidator(){
    return [
        body("name").isLength({min : 5}).withMessage('نام تیم نمیتواند کمتر از 5 نویسه باشد'),
        body("description").notEmpty().withMessage('لطفا توضیحات تیم را کامل کنید'),
        body("username").custom(async (username) => {
            const usernameRegex = /^[a-z]+[a-z0-9\.\_]{3,}$/gim;
            if(!(usernameRegex.test(username))) throw {message: "نام کاربری را بطور صحیح وارد کنید"};
            const teamId = await teamModel.findOne({username});
            if(teamId) throw {message: "این نام کاربری قبلا توسط تیم دیگری استفاده شده است"};
            return true
        })
    ]
}

module.exports = {
    createTeamValidator
}