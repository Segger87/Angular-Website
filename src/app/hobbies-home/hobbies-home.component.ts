import { Component, OnInit } from '@angular/core';
import { slideToLeft } from '../router.animations';

@Component({
  selector: 'app-hobbies-home',
  templateUrl: './hobbies-home.component.html',
  styleUrls: ['./hobbies-home.component.scss'],
  animations: [slideToLeft()]
})
export class HobbiesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
