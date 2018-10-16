import { Component, OnInit } from '@angular/core';
import { slideToBottom } from '../router.animations';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css'],
  animations: [slideToBottom()]
})
export class GamingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
