const multer = require("multer");
const path = require("path");
const { createUploadPath } = require("./functions");

const storage = multer.diskStorage({
    destination : (req, file, callback) => {
        callback(null, createUploadPath())
    },
    filename : (req, file, callback) => {
        const type = path.extname(file?.originalname || "")
        callback(null, Date.now() + type)
    }
})
const multer_upload = multer({storage})

module.exports = {
    multer_upload
}