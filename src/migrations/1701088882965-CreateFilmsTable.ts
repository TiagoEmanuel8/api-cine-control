import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFilmsTable1701088882965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'films',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'image_url',
            type: 'varchar',
          },
          {
            name: 'sinopse',
            type: 'varchar',
          },
          {
            name: 'release_date',
            type: 'timestamp',
          },
          {
            name: 'stars',
            type: 'real',
          },
          {
            name: 'trailer_url',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('films');
  }
}
