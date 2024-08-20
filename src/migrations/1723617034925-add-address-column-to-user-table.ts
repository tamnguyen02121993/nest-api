import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAddressColumnToUserTable1723617034925 implements MigrationInterface {
    name = 'AddAddressColumnToUserTable1723617034925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
    }

}
