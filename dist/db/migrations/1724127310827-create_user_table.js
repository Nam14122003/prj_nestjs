"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1724127310827 = void 0;
class CreateUserTable1724127310827 {
    constructor() {
        this.name = 'CreateUserTable1724127310827';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`satus\` int NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.CreateUserTable1724127310827 = CreateUserTable1724127310827;
//# sourceMappingURL=1724127310827-create_user_table.js.map