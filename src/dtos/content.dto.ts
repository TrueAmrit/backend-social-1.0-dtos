import { ContentType } from '../enums/contentType.enum';
import { DtoBase } from './dtoBase';
import { OptionDto } from './option.dto';
import { UserDto } from './user.dto';

export class ContentDto extends DtoBase {
  tittle?: string;
  type?: ContentType;
  body?: string;
  imageUrls?: string;
  videoUrls?: string;
  users?: UserDto[];
  options?: OptionDto[];
}
