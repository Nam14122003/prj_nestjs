import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePostTable1724292613020 implements MigrationInterface {
    name = 'CreatePostTable1724292613020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`updateAt\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`createAt\``);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`post\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

}
