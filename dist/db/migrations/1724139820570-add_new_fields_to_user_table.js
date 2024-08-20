"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewFieldsToUserTable1724139820570 = void 0;
class AddNewFieldsToUserTable1724139820570 {
    constructor() {
        this.name = 'AddNewFieldsToUserTable1724139820570';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`refresh_token\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`refresh_token\``);
    }
}
exports.AddNewFieldsToUserTable1724139820570 = AddNewFieldsToUserTable1724139820570;
//# sourceMappingURL=1724139820570-add_new_fields_to_user_table.js.map