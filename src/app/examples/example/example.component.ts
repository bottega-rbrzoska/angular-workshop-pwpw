import { SelectableDirective } from './../../shared/directives/selectable.directive';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pw-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, AfterViewInit {

  @ViewChild(SelectableDirective) myToggleButton!: SelectableDirective;
  @ViewChildren(SelectableDirective) selectables!: QueryList<SelectableDirective>;
  @ViewChild('myInput', {static: true}) myInput!: ElementRef;
  showBox = false;

  col = [ 'test1', 'test2'];
  constructor() { }

  ngOnInit(): void {
    fromEvent(this.myInput.nativeElement, 'input').pipe(
      debounceTime(300)
    ).subscribe(e => console.log(e))
  }

  ngAfterViewInit() {
    this.selectables.first.toggleSelection();
    this.selectables.changes.subscribe(c => console.log(c))
  }

  handleDelayedClick(ev: MouseEvent) {
    console.log(ev);
  }

  checkElements() {
    console.log(this.selectables)
  }

}
