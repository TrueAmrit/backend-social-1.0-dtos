import { ContentDto } from './content.dto';
import { DtoBase } from './dtoBase';

export class OptionDto extends DtoBase {
  tittle: string;
  body: string;
  content?: ContentDto;
}
