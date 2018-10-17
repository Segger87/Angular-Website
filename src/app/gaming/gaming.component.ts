import { Component, OnInit } from '@angular/core';
import { slideToBottom, slideToTop } from '../router.animations';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.scss'],
  animations: [slideToBottom(), slideToTop()]
})
export class GamingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
