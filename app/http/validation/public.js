const { param } = require("express-validator");

function mongoIdValidator(){
    return [
        param("id").isMongoId().withMessage("شناسه وارد شده صحیح نمی باشد")
    ]
}

module.exports = {
    mongoIdValidator
}