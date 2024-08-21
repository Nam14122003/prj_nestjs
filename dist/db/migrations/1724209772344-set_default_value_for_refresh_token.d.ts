import { MigrationInterface, QueryRunner } from "typeorm";
export declare class SetDefaultValueForRefreshToken1724209772344 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
