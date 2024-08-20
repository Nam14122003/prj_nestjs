import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserTable1724127310827 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
