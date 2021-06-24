import { Component, OnInit } from '@angular/core';
import { BaseTwitterContent } from '../base-twitter-content.class';

@Component({
  selector: 'pw-twitter-img',
  templateUrl: './twitter-img.component.html',
  styleUrls: ['./twitter-img.component.scss'],
  providers: [{ provide: BaseTwitterContent, useExisting: TwitterImgComponent}]
})
export class TwitterImgComponent implements OnInit, BaseTwitterContent {

  constructor() { }

  ngOnInit(): void {
  }

  like() {
    console.log('I like this image!!!')
  }

}
