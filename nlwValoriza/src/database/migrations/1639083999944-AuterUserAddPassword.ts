import {MigrationInterface, QueryRunner, TableColumn, TableExclusion} from "typeorm";

export class AuterUserAddPassword1639083999944 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users","password");
    }

}
