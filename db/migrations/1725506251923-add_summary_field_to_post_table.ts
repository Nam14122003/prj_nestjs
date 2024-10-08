import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSummaryFieldToPostTable1725506251923 implements MigrationInterface {
    name = 'AddSummaryFieldToPostTable1725506251923'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`summary\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`summary\``);
    }

}
