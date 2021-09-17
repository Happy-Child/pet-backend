import {
  UsersCreateDistrictLeader,
  UsersCreateStationWorker,
  UsersCreateEngineer,
} from '../interfaces/create.interfaces';
import { getFilteredGeneralUsers } from '@app/helpers';
import { ClientMembersOrStationWorkerRolesType } from '@app/types';

interface GetFilteredUsersToCreate {
  districtLeaders: UsersCreateDistrictLeader[];
  engineers: UsersCreateEngineer[];
  stationWorkers: UsersCreateStationWorker[];
}
export const getFilteredUsersToCreate = (
  rawUsers: { role: ClientMembersOrStationWorkerRolesType }[],
): GetFilteredUsersToCreate => {
  const { districtLeaders, engineers, stationWorkers } =
    getFilteredGeneralUsers(rawUsers);
  return {
    districtLeaders,
    engineers,
    stationWorkers,
  } as GetFilteredUsersToCreate;
};
