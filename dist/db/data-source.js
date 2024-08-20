"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptios = void 0;
const typeorm_1 = require("typeorm");
exports.dataSourceOptios = {
    type: "mysql",
    host: "localhost",
    port: 33061,
    username: "root",
    password: "root",
    database: "blog-nestjs",
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptios);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map