const { TeamController } = require("../http/controllers/team.controller");
const { checkLogin } = require("../http/middlewares/autoLogin");
const { expressValidatorMapper } = require("../http/middlewares/checkErrors");
const { mongoIdValidator } = require("../http/validation/public");
const { createTeamValidator } = require("../http/validation/team-validation");
const router = require("express").Router();

router.post("/create", checkLogin, createTeamValidator(), expressValidatorMapper, TeamController.createTeam)
router.get("/list", checkLogin, TeamController.getListOfTeam)
router.get("/me", checkLogin, TeamController.getMyTeams)
router.get("/invite/:teamID/:username", checkLogin, TeamController.inviteUserToTeam)
router.get("/:id", checkLogin, mongoIdValidator(), expressValidatorMapper, TeamController.getTeamById)
router.delete("/remove/:id", checkLogin, mongoIdValidator(), expressValidatorMapper, TeamController.removeTeamById)
router.put("/update/:teamID", checkLogin, TeamController.updateTeam)

module.exports = {
    teamRoutes : router
}