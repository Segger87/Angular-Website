import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../router.animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [slideToRight()]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
