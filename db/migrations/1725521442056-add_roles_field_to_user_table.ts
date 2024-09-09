import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRolesFieldToUserTable1725521442056 implements MigrationInterface {
    name = 'AddRolesFieldToUserTable1725521442056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`roles\` varchar(255) NOT NULL DEFAULT 'User'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`roles\``);
    }

}
