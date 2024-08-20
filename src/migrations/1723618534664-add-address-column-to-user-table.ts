import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddressColumnToUserTable1723618534664 implements MigrationInterface {
    name = 'AddAddressColumnToUserTable1723618534664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "sex" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "sex"`);
    }

}
