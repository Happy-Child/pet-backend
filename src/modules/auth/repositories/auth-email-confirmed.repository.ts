import { EntityRepository } from 'typeorm';
import { EmailConfirmedEntity } from '../entities';
import { ExceptionsUnprocessableEntity } from '@app/exceptions/errors';
import { AUTH_ERRORS } from '../constants';
import { ENTITIES_FIELDS } from '@app/entities';
import { GeneralRepository } from '@app/repositories';

@EntityRepository(EmailConfirmedEntity)
export class AuthEmailConfirmedRepository extends GeneralRepository<EmailConfirmedEntity> {
  protected entitySerializer = EmailConfirmedEntity;

  async findByTokenOrFail(token: string): Promise<EmailConfirmedEntity> {
    return this.getOneOrFail(
      { token },
      {
        exception: {
          type: ExceptionsUnprocessableEntity,
          messages: [
            {
              field: ENTITIES_FIELDS.TOKEN,
              messages: [AUTH_ERRORS.TOKEN_NOT_FOUND],
            },
          ],
        },
      },
    );
  }
}