import { DtoBase } from './dtoBase';
import { GroupDto } from './group.dto';

export class UserDto extends DtoBase {
  firstname?: string;

  lastname?: string;

  email?: string;

  phoneNumber?: string;

  password?: string;

  groups?: GroupDto[];
}
