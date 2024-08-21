"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDefaultValueForRefreshToken1724209772344 = void 0;
class SetDefaultValueForRefreshToken1724209772344 {
    constructor() {
        this.name = 'SetDefaultValueForRefreshToken1724209772344';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`refresh_token\` \`refresh_token\` varchar(255) NOT NULL`);
    }
}
exports.SetDefaultValueForRefreshToken1724209772344 = SetDefaultValueForRefreshToken1724209772344;
//# sourceMappingURL=1724209772344-set_default_value_for_refresh_token.js.map