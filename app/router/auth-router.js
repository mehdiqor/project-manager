const router = require("express").Router();
const { AuthController } = require("../http/controllers/auth.controller");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { registerValidator, loginValidator } = require("../http/validation/auth-validation");

router.post("/register", registerValidator(), expressValidatorMapper, AuthController.register)
router.post("/login", loginValidator(), expressValidatorMapper, AuthController.login)

module.exports = {
    authRoutes : router
}