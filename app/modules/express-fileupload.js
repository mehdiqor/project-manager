const path = require("path");
const { createUploadPath } = require("./functions");

const uploadFile = async (req, res, next) => {
    try {
        if(req.file || Object.keys(req.files).length == 0) throw {status: 400, message: "تصویر شاخص پروژه را ارسال نمایید"};
        let image = req.files.image
        let type = path.extname(image.name);
        if(!['.png', '.jpeg', '.jpg', '.webp', '.gif'].includes(type)) throw {status: 400, message: "فرمت تصویر صحیح نمیباشد"}
        const imagePath = path.join(createUploadPath(), (Date.now() + type))
        req.body.image = imagePath.substring(7);
        let uploadPath = path.join(__dirname, "..", "..", imagePath);
        console.log(uploadPath);
        console.log(image);
        image.mv(uploadPath, (err) => {
            if(err) throw {status: 500, message: "بارگذاری تصویر انجام نشد"}
            next()
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    uploadFile
}