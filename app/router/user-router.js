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
router.get("/requests", checkLogin, UserController.getAllRequests);
router.get("/requests/:status", checkLogin, UserController.getRequestsByStatus);
router.get("/request-answer/:id/:status", checkLogin, UserController.requestAnswer);

module.exports = {
  userRoutes: router
};
