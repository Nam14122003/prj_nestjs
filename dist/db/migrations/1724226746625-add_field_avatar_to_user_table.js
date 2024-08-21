"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddFieldAvatarToUserTable1724226746625 = void 0;
class AddFieldAvatarToUserTable1724226746625 {
    constructor() {
        this.name = 'AddFieldAvatarToUserTable1724226746625';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatar\` varchar(255) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatar\``);
    }
}
exports.AddFieldAvatarToUserTable1724226746625 = AddFieldAvatarToUserTable1724226746625;
//# sourceMappingURL=1724226746625-add_field_avatar_to_user_table.js.map