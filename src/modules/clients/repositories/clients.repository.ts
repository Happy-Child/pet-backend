import { EntityRepository } from 'typeorm';
import { ClientEntity, StationEntity } from '@app/entities';
import { GeneralRepository } from '@app/repositories';
import {
  ClientExtendedDTO,
  ClientsGettingRequestQueryDTO,
  ClientsGettingResponseBodyDTO,
} from '../dtos';
import { CLIENTS_DEFAULT_SORT_BY } from '../constants';
import { ENTITIES_FIELDS, SORT_DURATION_DEFAULT } from '@app/constants';

@EntityRepository(ClientEntity)
export class ClientsRepository extends GeneralRepository<ClientEntity> {
  protected entitySerializer = ClientEntity;

  public async getClientById(
    id: number,
  ): Promise<ClientExtendedDTO | undefined> {
    const client = await this.createQueryBuilder('cl')
      .where(`cl.id = ${id}`)
      .loadRelationCountAndMap(
        `cl.${ENTITIES_FIELDS.STATIONS_COUNT}`,
        'cl.stations',
      )
      .getOne();

    return client as ClientExtendedDTO;
  }

  public async getClientsWithPagination(
    data: ClientsGettingRequestQueryDTO,
  ): Promise<ClientsGettingResponseBodyDTO> {
    const totalSkip = data.skip || 0;

    const queryBuilder = await this.createQueryBuilder('cl').select(
      `cl.*, COUNT(st.clientId)::int AS "${ENTITIES_FIELDS.STATIONS_COUNT}"`,
    );

    if (data.searchByName) {
      queryBuilder.where(`name LIKE '%${data.searchByName}%'`);
    }

    const items = await queryBuilder
      .leftJoin(StationEntity, 'st', '"st"."clientId" = cl.id')
      .groupBy('cl.id')
      .orderBy(
        `"${data.sortBy || CLIENTS_DEFAULT_SORT_BY}"`,
        data.sortDuration || SORT_DURATION_DEFAULT,
      )
      .offset(totalSkip)
      .limit(data.take)
      .getRawMany<ClientExtendedDTO>();

    const totalItemsCount = await this.count();

    return {
      totalItemsCount,
      items,
      skip: totalSkip,
      take: data.take,
    };
  }
}
