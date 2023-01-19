import { ContentDto } from './content.dto';
import { DtoBase } from './dtoBase';
import { UserDto } from './user.dto';

export class ReactionDto extends DtoBase {
  type: string;
  comment: string;
  emojiUrl: string;
  users?: UserDto[];
  contents?: ContentDto[];
}
