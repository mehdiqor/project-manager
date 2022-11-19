const { ProjectModel } = require("../../models/project");

class ProjectConttroller{
    async createProject(req, res, next){
        try {
            const {title, text, image, tags} = req.body;
            console.log(tags);
            const owner = req.user._id
            const result = await ProjectModel.create({title, text, owner, image, tags})
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
    getAllProject(){

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