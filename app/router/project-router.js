const { ProjectConttroller } = require("../http/controllers/project.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { createProjectValidator } = require("../http/validation/project-validation");
const fileUpload = require("express-fileupload");
const { uploadFile } = require("../modules/express-fileupload");
const { mongoIdValidator } = require("../http/validation/public");
const router = require("express").Router();

router.post(
  "/create",
  fileUpload(),
  checkLogin,
  uploadFile,
  createProjectValidator(),
  expressValidatorMapper,
  ProjectConttroller.createProject
);
router.post(
  "/list",
  fileUpload(),
  checkLogin,
  ProjectConttroller.getAllProject
);
router.post(
  "/:id",
  fileUpload(),
  checkLogin,
  mongoIdValidator(),
  expressValidatorMapper,
  ProjectConttroller.getProjectById
);
router.post(
  "/remove/:id",
  fileUpload(),
  mongoIdValidator(),
  expressValidatorMapper,
  checkLogin,
  ProjectConttroller.removeProject
);
router.post(
  "/edit/:id",
  fileUpload(),
  checkLogin,
  mongoIdValidator(),
  expressValidatorMapper,
  ProjectConttroller.updateProject
);

module.exports = {
  projectRoutes: router,
};
