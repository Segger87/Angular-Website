import { Component, OnInit } from '@angular/core';
import { slideToRight, slideToLeft, slideToTop } from '../router.animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [slideToLeft(), slideToRight(), slideToTop()]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
