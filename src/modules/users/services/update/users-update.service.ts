import { Injectable } from '@nestjs/common';
import { CheckUsersBeforeUpdateService } from './check-users-before-update.service';
import { UsersUpdateRequestBodyDTO } from '../../dtos/update.dtos';
import { CheckGeneralUsersDataService } from '../common/check-general-users-data.service';
import { getFilteredUsersToUpdate } from '../../helpers/update.helpers';

@Injectable()
export class UsersUpdateService {
  constructor(
    private readonly usersCheckBeforeUpdateService: CheckUsersBeforeUpdateService,
    private readonly checkGeneralUsersDataService: CheckGeneralUsersDataService,
  ) {}

  async update({ users }: UsersUpdateRequestBodyDTO) {
    // ОТФИЛЬТРОВАТЬ ПО МАССИВАМ ЛЮДЕЙ У КОТОРЫХ ИЗМЕНИЛОИСЬ ПОЛЯ
    // EMAIL
    // DISTRICT ID
    // ЧТОБЫ ЕСЛИ У НАС БЫЛ EMAIL "test@mail.ru" И ОН ЛЕТИТ СНОВА - НЕ ПРОВЕРЯТЬ ЕГО НА СУЩ. И НЕ КИДАТЬ ОШИБКУ

    const emails = users.map(({ email }) => email);
    await this.checkGeneralUsersDataService.checkUsersEmailsOrFail(emails);

    // DO LOW CODE IF DISTRICT ID WAS CHANGED
    const { districtLeaders, engineers, others } =
      getFilteredUsersToUpdate(users);

    if (districtLeaders.length) {
      // DO SOMETHING
    }

    if (engineers.length) {
      // DO SOMETHING
    }

    if (others.length) {
      // DO SOMETHING
    }
  }
}