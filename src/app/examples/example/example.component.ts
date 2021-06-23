import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  showBox = false;

  col = [ 'test1', 'test2']
  constructor() { }

  ngOnInit(): void {
  }

  handleDelayedClick(ev: MouseEvent) {
    console.log(ev);
  }

}
