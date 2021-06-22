import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import { DummyItem } from '../models/DummyItem';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private _counterValue = 0;
  private _selectedItem: DummyItem;
  private _items: DummyItem[] = [
    { name: 'first', length: 10 },
    { name: 'second', length: 20 }
  ]
  constructor() { }

  getCounter$(countNumber) {
    return timer(1000).pipe(
      map(v => v + 1),
      tap(v => this._counterValue = v),
      takeWhile(v => v === countNumber)
    )
  }

  findItemByName(name) {
    return this._items.find(x => x.name === name);
  }

  selectItemByName(name) {
    this._selectedItem = this.findItemByName(name);
  }
}
