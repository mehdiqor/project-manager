const { ProjectModel } = require("../../models/project");

class ProjectConttroller{
    async createProject(req, res, next){
        try {
            const {title, text, image} = req.body;
            const owner = req.user._id
            const result = await ProjectModel.create({title, text, owner, image})
            if(!result) throw {status: 400, message: "افزودن پروژه انجام نشد"}
            return res.status(201).json({
                status: 201,
                success: true,
                message: "پروژه با موفقیت ایجاد شد"
            })
        } catch (error) {
            next(error)
        }
    }
    async getAllProject(req, res, next){
        try {
            const owner = req.user._id;
            const projects = await ProjectModel.find({owner});
            return res.status(200).json({
                status: 200,
                success: true,
                projects
            })
        } catch (error) {
            next(error)
        }
    }
    getProjectById(){

    }
    getAllProjectOfTeam(){
        
    }
    getAllProjectOfUser(){

    }
    updateProject(){

    }
    removeProject(){

    }
}

module.exports = {
    ProjectConttroller : new ProjectConttroller()
}