import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmailColumnToUserTable1724127615985 implements MigrationInterface {
    name = 'AddEmailColumnToUserTable1724127615985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`email\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`email\``);
    }

}
