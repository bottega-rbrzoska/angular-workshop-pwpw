import { PwCardHeaderDirective } from './../../directives/pw-card-header.directive';
import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';

@Component({
  selector: 'pw-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {

  @ContentChild(PwCardHeaderDirective) header!: PwCardHeaderDirective
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.header)
  }

}
