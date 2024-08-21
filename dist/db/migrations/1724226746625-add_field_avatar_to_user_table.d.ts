import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddFieldAvatarToUserTable1724226746625 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
