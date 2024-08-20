import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedUserData1723617910377 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Write your seed data query here
        await queryRunner.query(`
                INSERT INTO "user" ("firstName", "lastName", address)
                    VALUES ('Tom', 'Nguyen', 'HCM City'),
                        ('Tam', 'Nguyen', 'SG')
            `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Write your rollback data query here
        await queryRunner.query(
            `
                DELETE FROM "user"
                WHERE "firstName" IN ('Tom', 'Tam')
            `
        )
    }

}
