import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pw-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() counter: number;

  constructor() { }

  ngOnInit(): void {
  }

}
