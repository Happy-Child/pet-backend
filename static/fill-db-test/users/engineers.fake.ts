import { FAKE_USER_DEFAULT_PASSWORD } from '../constants';
import { EngineerEntity, UserEntity } from '@app/entities';
import { USER_ROLES } from '@app/constants';

// 16 entities
const engineers: Partial<UserEntity & EngineerEntity>[] = [
  {
    name: 'engineer_1',
    email: 'engineer_1@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 1,
  },
  {
    name: 'engineer_2',
    email: 'engineer_2@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 1,
  },
  {
    name: 'engineer_3',
    email: 'engineer_3@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 110,
  },
  {
    name: 'engineer_4',
    email: 'engineer_4@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 5,
  },
  {
    name: 'engineer_5',
    email: 'engineer_5@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 7,
  },
  {
    name: 'engineer_6',
    email: 'engineer_6@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 25,
  },
  {
    name: 'engineer_7',
    email: 'engineer_7@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 45,
  },
  {
    name: 'engineer_8',
    email: 'engineer_8@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 90,
  },
  {
    name: 'engineer_9',
    email: 'engineer_9@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 90,
  },
  {
    name: 'engineer_10',
    email: 'engineer_10@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: 50,
  },
  {
    name: 'engineer_11',
    email: 'engineer_11@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: null,
  },
  {
    name: 'engineer_12',
    email: 'engineer_12@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: null,
  },
  {
    name: 'engineer_13',
    email: 'engineer_13@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: null,
  },
  {
    name: 'engineer_14',
    email: 'engineer_14@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: null,
  },
  {
    name: 'engineer_15',
    email: 'engineer_15@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: null,
  },
  {
    name: 'engineer_16',
    email: 'engineer_16@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    password: FAKE_USER_DEFAULT_PASSWORD,
    districtId: null,
  },
];

export default engineers;