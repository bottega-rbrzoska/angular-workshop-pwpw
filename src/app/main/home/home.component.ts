import { NotificationsService } from '@pw/my-lib';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test = 1;
  constructor(private notifications: NotificationsService) { }

  ngOnInit(): void {
  }

}
