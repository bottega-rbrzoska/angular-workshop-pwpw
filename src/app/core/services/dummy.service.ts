import { debug } from './../../utils/debug-operator';
import { DummyItem } from './../../models/DummyItem';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, timer } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';
import * as yup from 'yup';
@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private dummyItemValidator = yup.object().shape({
    name: yup.string().required(),
    length: yup.number().required()
  })
  private _counterValue = 0;

  private _selectedItem: DummyItem | undefined;
  private _items: DummyItem[] = [
    { name: 'first', length: 10 },
    { name: 'second', length: 20 }
  ]
  constructor(private http: HttpClient) { }

  getCounter$(countNumber: number): Observable<number> {
    return interval(1000).pipe(
      map(v => v + 1),
      tap(v => this._counterValue = v),
      takeWhile(v => v <= countNumber)
    )
  }

  getDummies() {
    return this.http.get<DummyItem[]>('/api/dummies').pipe(
      debug('Dummies response'),
      tap(v => {
        v.forEach((dummyItem: DummyItem) => {
          this.dummyItemValidator.validateSync(dummyItem)
        })
      })
    )
  }

  findItemByName(name: string): DummyItem | undefined {
    return this._items.find(x => x.name === name);
  }

  selectItemByName(name: string): void {
    this._selectedItem = this.findItemByName(name);
  }
}
