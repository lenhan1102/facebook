import {MigrationInterface, QueryRunner} from "typeorm";

export class Gen1593340729376 implements MigrationInterface {
    name = 'Gen1593340729376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `username` ON `users`");
        await queryRunner.query("DROP INDEX `FK_ae05faaa55c866130abef6e1fee` ON `posts`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `username`");
        await queryRunner.query("ALTER TABLE `users` ADD `username` varchar(20) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_fe0bb3f6520ee0469504521e71`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `username`");
        await queryRunner.query("ALTER TABLE `users` ADD `username` varchar(255) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users` (`username`)");
        await queryRunner.query("CREATE INDEX `FK_ae05faaa55c866130abef6e1fee` ON `posts` (`userId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `username` ON `users` (`username`)");
    }

}
