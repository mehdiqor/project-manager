const { UserController } = require("../http/controllers/user.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { imageValidator } = require("../http/validation/user-validation");
const { multer_upload } = require("../modules/multer");

const router = require("express").Router();
router.get("/profile", checkLogin, UserController.getProfile);
router.post("/profile", checkLogin, UserController.editProfile);
router.post(
  "/profile-image",
  multer_upload.single("image"),
  imageValidator(),
  expressValidatorMapper,
  checkLogin,
  UserController.uploadProfileImage
);

module.exports = {
  userRoutes: router
};
