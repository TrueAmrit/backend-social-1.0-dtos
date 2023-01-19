import { GroupType } from '../enums/groupType.enum';
import { ContentDto } from './content.dto';
import { DtoBase } from './dtoBase';
import { UserDto } from './user.dto';

export class GroupDto extends DtoBase {
  tittle?: string;

  type?: string;

  content?: ContentDto;

  users?: UserDto[];
}
