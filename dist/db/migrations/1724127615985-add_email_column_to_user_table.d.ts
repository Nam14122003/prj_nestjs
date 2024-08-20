import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddEmailColumnToUserTable1724127615985 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
