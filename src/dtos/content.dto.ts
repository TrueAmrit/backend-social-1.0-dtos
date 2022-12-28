import { ContentType } from 'src/enums/contentType.enum';
import { DtoBase } from './dtoBase';
import { UserDto } from './user.dto';

export class ContentDto extends DtoBase {
  tittle?: string;

  type?: ContentType;

  body?: string;

  imageUrls?: string;

  videoUrls?: string;

  users?: UserDto[];
}
