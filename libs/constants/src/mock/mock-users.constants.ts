import { USER_ROLES } from '@app/constants/app.constants';
import {
  DistrictLeaderEntity,
  EngineerEntity,
  StationWorkerEntity,
  UserEntity,
} from '@app/entities';

export const FAKE_USER_PASSWORD = 'qwertyuiop123';

export const FAKE_USER_PASSWORD_HASH =
  '$2b$10$Ot8RO0QNehpElstVY.RpouT7fh.V1AtdHz1ms6DYD8XRrpRdgldrS';

export const FAKE_STATIONS_WORKERS_MAP: Record<
  string,
  Partial<UserEntity & StationWorkerEntity>
> = {
  WORKER_1: {
    id: 1,
    name: 'station_worker_1',
    email: 'station_worker_1@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: true,
    clientId: 1,
    stationId: 2,
  },
  WORKER_2: {
    id: 2,
    name: 'station_worker_2',
    email: 'station_worker_2@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: false,
    clientId: 1,
    stationId: 3,
  },
  WORKER_3: {
    id: 3,
    name: 'station_worker_3',
    email: 'station_worker_3@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: true,
    clientId: 1,
    stationId: null,
  },
  WORKER_4: {
    id: 4,
    name: 'station_worker_4',
    email: 'station_worker_4@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: false,
    clientId: 2,
    stationId: 6,
  },
  WORKER_5: {
    id: 5,
    name: 'station_worker_5',
    email: 'station_worker_5@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: true,
    clientId: 2,
    stationId: 7,
  },
  WORKER_6: {
    id: 6,
    name: 'station_worker_6',
    email: 'station_worker_6@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: true,
    clientId: 3,
    stationId: 8,
  },
  WORKER_7: {
    id: 7,
    name: 'station_worker_7',
    email: 'station_worker_7@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: true,
    clientId: 4,
    stationId: null,
  },
  WORKER_8: {
    id: 8,
    name: 'station_worker_8',
    email: 'station_worker_8@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: true,
    clientId: null,
    stationId: null,
  },
  WORKER_9: {
    id: 9,
    name: 'station_worker_9',
    email: 'station_worker_9@mail.ru',
    role: USER_ROLES.STATION_WORKER,
    emailConfirmed: false,
    clientId: null,
    stationId: null,
  },
};

export const FAKE_DISTRICTS_LEADERS_MAP: Record<
  string,
  Partial<UserEntity & DistrictLeaderEntity>
> = {
  LEADER_1: {
    id: 10,
    name: 'district_leader_1',
    email: 'district_leader_1@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: true,
    leaderDistrictId: 1,
  },
  LEADER_2: {
    id: 11,
    name: 'district_leader_2',
    email: 'district_leader_2@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: false,
    leaderDistrictId: 75,
  },
  LEADER_3: {
    id: 12,
    name: 'district_leader_3',
    email: 'district_leader_3@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: true,
    leaderDistrictId: 3,
  },
  LEADER_4: {
    id: 13,
    name: 'district_leader_4',
    email: 'district_leader_4@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: false,
    leaderDistrictId: 4,
  },
  LEADER_5: {
    id: 14,
    name: 'district_leader_5',
    email: 'district_leader_5@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: true,
    leaderDistrictId: null,
  },
  LEADER_6: {
    id: 15,
    name: 'district_leader_6',
    email: 'district_leader_6@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: true,
    leaderDistrictId: 5,
  },
  LEADER_7: {
    id: 16,
    name: 'district_leader_7',
    email: 'district_leader_7@mail.ru',
    role: USER_ROLES.DISTRICT_LEADER,
    emailConfirmed: false,
    leaderDistrictId: null,
  },
};

export const FAKE_ENGINEERS_MAP: Record<
  string,
  Partial<UserEntity & EngineerEntity>
> = {
  ENGINEER_1: {
    id: 17,
    name: 'engineer_1',
    email: 'engineer_1@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 1,
  },
  ENGINEER_2: {
    id: 18,
    name: 'engineer_2',
    email: 'engineer_2@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: false,
    engineerDistrictId: 1,
  },
  ENGINEER_3: {
    id: 19,
    name: 'engineer_3',
    email: 'engineer_3@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 110,
  },
  ENGINEER_4: {
    id: 20,
    name: 'engineer_4',
    email: 'engineer_4@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: false,
    engineerDistrictId: 5,
  },
  ENGINEER_5: {
    id: 21,
    name: 'engineer_5',
    email: 'engineer_5@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 7,
  },
  ENGINEER_6: {
    id: 22,
    name: 'engineer_6',
    email: 'engineer_6@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 25,
  },
  ENGINEER_7: {
    id: 23,
    name: 'engineer_7',
    email: 'engineer_7@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 45,
  },
  ENGINEER_8: {
    id: 24,
    name: 'engineer_8',
    email: 'engineer_8@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 90,
  },
  ENGINEER_9: {
    id: 25,
    name: 'engineer_9',
    email: 'engineer_9@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: 90,
  },
  ENGINEER_10: {
    id: 26,
    name: 'engineer_10',
    email: 'engineer_10@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: false,
    engineerDistrictId: 50,
  },
  ENGINEER_11: {
    id: 27,
    name: 'engineer_11',
    email: 'engineer_11@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: false,
    engineerDistrictId: null,
  },
  ENGINEER_12: {
    id: 28,
    name: 'engineer_12',
    email: 'engineer_12@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: null,
  },
  ENGINEER_13: {
    id: 29,
    name: 'engineer_13',
    email: 'engineer_13@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: null,
  },
  ENGINEER_14: {
    id: 30,
    name: 'engineer_14',
    email: 'engineer_14@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: false,
    engineerDistrictId: null,
  },
  ENGINEER_15: {
    id: 31,
    name: 'engineer_15',
    email: 'engineer_15@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: null,
  },
  ENGINEER_16: {
    id: 32,
    name: 'engineer_16',
    email: 'engineer_16@mail.ru',
    role: USER_ROLES.ENGINEER,
    emailConfirmed: true,
    engineerDistrictId: null,
  },
};

export const FAKE_ACCOUNTANT = {
  id: 33,
  name: 'accountant',
  email: 'accountant@mail.ru',
  role: USER_ROLES.ACCOUNTANT,
  emailConfirmed: true,
};

export const FAKE_MASTER = {
  id: 34,
  name: 'master',
  email: 'master@mail.ru',
  role: USER_ROLES.MASTER,
  emailConfirmed: true,
};
