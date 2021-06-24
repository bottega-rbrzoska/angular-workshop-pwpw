import { Component, OnInit } from '@angular/core';
import { BaseTwitterContent } from '../base-twitter-content.class';

@Component({
  selector: 'pw-twitter-video',
  templateUrl: './twitter-video.component.html',
  styleUrls: ['./twitter-video.component.scss'],
  providers: [{ provide: BaseTwitterContent, useExisting: TwitterVideoComponent}]
})
export class TwitterVideoComponent implements OnInit, BaseTwitterContent {

  constructor() { }

  ngOnInit(): void {
  }


  like() {
    console.log('I like this video!!!')
  }

}
