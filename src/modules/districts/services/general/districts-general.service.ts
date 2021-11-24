import { Injectable } from '@nestjs/common';
import { NonEmptyArray } from '@app/types';
import { getPreparedChildrenErrors } from '@app/helpers/prepared-errors.helpers';
import { ExceptionsNotFound } from '@app/exceptions/errors';
import { DistrictsRepository } from '../../repositories';
import { getItemsByUniqueField } from '@app/helpers';
import { AUTH_ERRORS } from '../../../auth/constants';
import { ENTITIES_FIELDS } from '@app/constants';
import { DISTRICTS_ERRORS } from '../../constants';
import { DistrictEntity } from '@app/entities';

@Injectable()
export class DistrictsGeneralService {
  constructor(private readonly districtsRepository: DistrictsRepository) {}

  public async getDistrictOrFail(id: number): Promise<DistrictEntity> {
    return await this.districtsRepository.getOneOrFail(
      {
        id,
      },
      {
        exception: {
          type: ExceptionsNotFound,
          messages: [
            {
              field: ENTITIES_FIELDS.ID,
              messages: [DISTRICTS_ERRORS.DISTRICT_NOT_EXIST],
            },
          ],
        },
      },
    );
  }

  public async allDistrictsExistsOrFail(
    items: NonEmptyArray<{ districtId: number; index: number }>,
    exceptionField = 'leaderDistrictId',
  ): Promise<void> {
    const uniqueIds = getItemsByUniqueField<{ districtId: number }>(
      'districtId',
      items,
    );

    const foundEntities = await this.districtsRepository.getManyByColumn(
      uniqueIds,
    );
    const allIdsExists = foundEntities.length === uniqueIds.length;

    if (allIdsExists) return;

    const foundEntitiesIds = foundEntities.map(({ id }) => id);
    const result = items.filter(
      (item) => !foundEntitiesIds.includes(item.districtId),
    );

    const preparedErrors = getPreparedChildrenErrors(result, {
      field: exceptionField,
      messages: [AUTH_ERRORS.DISTRICT_NOT_EXIST],
    });
    throw new ExceptionsNotFound(preparedErrors);
  }
}
