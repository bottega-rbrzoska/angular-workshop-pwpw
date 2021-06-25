import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
