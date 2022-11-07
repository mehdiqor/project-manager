const { authRoutes } = require("./auth-router");
const { projectRoutes } = require("./project-router");
const { teamRoutes } = require("./team-router");
const { userRoutes } = require("./user-router");
const router = require("express").Router();

router.use("/auth", authRoutes)
router.use("/user", userRoutes)
router.use("/team", teamRoutes)
router.use("/project", projectRoutes)

module.exports = {
    AllRoutes : router
}