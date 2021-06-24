import { DummyItem } from '@pwtypes/DummyItem';
import { Observable } from 'rxjs';

export abstract class BaseDummyService {
  selectItemByName(name: string) {}
  getDummies(): any {}
}
