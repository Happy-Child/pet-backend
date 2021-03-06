import { MigrationInterface, QueryRunner } from 'typeorm';
import clients from '../static/mock-data/clients';
import { ClientEntity } from '@app/entities';

export class FillClients1632588333687 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(ClientEntity, clients);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
