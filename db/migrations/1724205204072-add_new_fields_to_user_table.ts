import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewFieldsToUserTable1724205204072 implements MigrationInterface {
    name = 'AddNewFieldsToUserTable1724205204072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`satus\` \`status\` int NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`status\` \`satus\` int NOT NULL DEFAULT '1'`);
    }

}
