const { ProjectConttroller } = require("../http/controllers/project.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { createProjectValidator } = require("../http/validation/project-validation");
const fileUpload = require("express-fileupload");
const { uploadFile } = require("../modules/express-fileupload");

const router = require("express").Router();
router.post("/create", fileUpload(), checkLogin, uploadFile, createProjectValidator(), expressValidatorMapper, ProjectConttroller.createProject)

module.exports = {
    projectRoutes : router
}