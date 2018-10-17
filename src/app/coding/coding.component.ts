import { Component, OnInit } from '@angular/core';
import { slideToLeft, slideToRight, slideToBottom, slideToTop } from '../router.animations';

@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.scss'],
  animations: [slideToLeft(), slideToRight(), slideToBottom()]
})
export class CodingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
