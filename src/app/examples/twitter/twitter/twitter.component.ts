import { TwitterVideoComponent } from './../twitter-video/twitter-video.component';
import { TwitterImgComponent } from './../twitter-img/twitter-img.component';
import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { BaseTwitterContent } from '../base-twitter-content.class';

@Component({
  selector: 'pw-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {

  @ContentChildren(BaseTwitterContent) twitterContent!: QueryList<BaseTwitterContent>
  @ContentChildren('twitterContent') twitterContent2!: QueryList<BaseTwitterContent>
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.twitterContent)
    console.log(this.twitterContent2)
  }

}
