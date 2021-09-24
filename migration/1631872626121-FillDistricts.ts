import { MigrationInterface, QueryRunner } from 'typeorm';
import districts from '../static/districts.json';
import { District } from '../src/modules/districts';

export class FillDistricts1631872626121 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(District, districts);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}