import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ext-comp',
  templateUrl: './ext-comp.component.html',
  styleUrls: ['./ext-comp.component.scss']
})
export class ExtCompComponent implements OnInit {

  counterValue = 0;
  @Output() count = new EventEmitter();
  @Input() initialValue = 0;
  @Input() incrementValue = 1;
  constructor() { }

  ngOnInit(): void {
    this.counterValue = this.initialValue;
  }

  increment() {
    this.counterValue += this.incrementValue;
    this.count.emit(this.counterValue);
  }

}
