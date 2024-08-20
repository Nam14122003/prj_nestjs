"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmailColumnToUserTable1724127615985 = void 0;
class AddEmailColumnToUserTable1724127615985 {
    constructor() {
        this.name = 'AddEmailColumnToUserTable1724127615985';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }
}
exports.AddEmailColumnToUserTable1724127615985 = AddEmailColumnToUserTable1724127615985;
//# sourceMappingURL=1724127615985-add_email_column_to_user_table.js.map