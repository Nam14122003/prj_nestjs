"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageConfig = void 0;
const multer_1 = require("multer");
const storageConfig = (folder) => (0, multer_1.diskStorage)({
    destination: `uploads/${folder}`,
    filename: (req, file, cb) => {
        cb(null, Date.now + '-' + file.originalname);
    }
});
exports.storageConfig = storageConfig;
//# sourceMappingURL=config.js.map