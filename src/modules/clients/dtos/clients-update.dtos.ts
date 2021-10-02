import { IsString, Length } from 'class-validator';
import { CLIENT_NAME_LENGTH } from '../constants';

export class ClientsUpdateBodyDTO {
  @IsString()
  @Length(CLIENT_NAME_LENGTH.MIN, CLIENT_NAME_LENGTH.MAX)
  name!: string;
}