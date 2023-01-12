import { GroupType } from '../enums/groupType.enum';
import { ContentDto } from './content.dto';
import { DtoBase } from './dtoBase';

export class GroupDto extends DtoBase {
  tittle?: string;

  type?: GroupType;

  content?: ContentDto;
}
