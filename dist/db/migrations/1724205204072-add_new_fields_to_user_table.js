"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNewFieldsToUserTable1724205204072 = void 0;
class AddNewFieldsToUserTable1724205204072 {
    constructor() {
        this.name = 'AddNewFieldsToUserTable1724205204072';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`satus\` \`status\` int NOT NULL DEFAULT '1'`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`status\` \`satus\` int NOT NULL DEFAULT '1'`);
    }
}
exports.AddNewFieldsToUserTable1724205204072 = AddNewFieldsToUserTable1724205204072;
//# sourceMappingURL=1724205204072-add_new_fields_to_user_table.js.map