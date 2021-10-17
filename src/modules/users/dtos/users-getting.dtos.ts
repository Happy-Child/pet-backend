import { PaginationRequestDTO, PaginationResponseDTO } from '@app/dtos';
import {
  ArrayUnique,
  IsEnum,
  IsIn,
  IsOptional,
  IsString,
} from 'class-validator';
import { ENTITIES_FIELDS, SORT_DURATION } from '@app/constants';
import { ALLOWED_ROLES } from '../constants';
import { AllowedRoles, TMemberDTO } from '../types';
import { SimpleUserDTO } from './users-members.dtos';
import { getSerializedMemberUser } from '../helpers';

export class UsersGetListRequestQueryDTO extends PaginationRequestDTO {
  @IsOptional()
  @IsIn([
    ENTITIES_FIELDS.NAME,
    ENTITIES_FIELDS.EMAIL,
    ENTITIES_FIELDS.CREATED_AT,
    ENTITIES_FIELDS.ROLE,
  ])
  sortBy?:
    | ENTITIES_FIELDS.NAME
    | ENTITIES_FIELDS.EMAIL
    | ENTITIES_FIELDS.CREATED_AT
    | ENTITIES_FIELDS.ROLE;

  @IsOptional()
  @IsEnum(SORT_DURATION)
  sortDuration?: SORT_DURATION;

  @IsOptional()
  @ArrayUnique()
  @IsIn(ALLOWED_ROLES, { each: true })
  role?: AllowedRoles[];

  @IsOptional()
  @IsString()
  search?: string;
}

export class UsersGetListResponseBodyDTO extends PaginationResponseDTO<
  TMemberDTO | SimpleUserDTO
> {
  constructor(data: UsersGetListResponseBodyDTO) {
    super();
    Object.assign(this, data);
    this.items = data.items.map((item) => getSerializedMemberUser(item));
  }
}