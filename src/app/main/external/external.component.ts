import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'pw-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent {

  loaded = false;
  @ViewChild('customElement', {static: true}) elem!: ElementRef;

  constructor() {
    this.load();
  }

  ngOnInit(): void {
    this.elem.nativeElement.initialValue = 20;
    this.elem.nativeElement.incrementValue = 2;

  }

  handleCount(e: any) {
    console.log(e.detail);
  }

  load(): void {
    if (this.loaded) return;
    this.loaded = true;

    const script = document.createElement('script');
    script.src = 'assets/main.js';
    document.body.appendChild(script);
  }

}
