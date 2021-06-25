import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WebcomponentLoaderService } from '../../core/services/webcomponent-loader.service';

@Component({
  selector: 'pw-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {

  @ViewChild('customElement', {static: true}) elem!: ElementRef;
  constructor(private loader: WebcomponentLoaderService) {
    loader.load();
  }
  ngOnInit(): void {
    this.elem.nativeElement.initialValue = 10;
    this.elem.nativeElement.incrementValue = 2;

  }

  handleCount(e: any) {
    console.log(e.detail);
  }

}
