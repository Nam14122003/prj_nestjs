import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddNewFieldsToUserTable1724139820570 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
