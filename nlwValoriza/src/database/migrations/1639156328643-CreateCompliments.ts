import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompliments1639156328643 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "complements",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true                      
                    },
                    {
                        name: "user_sender",
                        type: "uuid"                   
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid",                  
                    },
                    {
                        name: "message",
                        type: "varchar",                   
                    },
                    {
                        name: "created_at",
                        type: "timestamp", 
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "User",
                        referencedColumnNames: ["id"],
                        columnNames: ["User_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserRceiverCompliments",
                        referencedTableName: "User",
                        referencedColumnNames: ["id"],
                        columnNames: ["User_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliments",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("complements");
    }

}
