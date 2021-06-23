import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import { DummyItem } from '../models/DummyItem';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private _counterValue = 0;
  private _selectedItem: DummyItem | undefined;
  private _items: DummyItem[] = [
    { name: 'first', length: 10 },
    { name: 'second', length: 20 }
  ]
  constructor() { }

  getCounter$(countNumber: number): Observable<number> {
    return timer(1000).pipe(
      map(v => v + 1),
      tap(v => this._counterValue = v),
      takeWhile(v => v === countNumber)
    )
  }

  findItemByName(name: string): DummyItem | undefined {
    return this._items.find(x => x.name === name);
  }

  selectItemByName(name: string): void {
    this._selectedItem = this.findItemByName(name);
  }
}
