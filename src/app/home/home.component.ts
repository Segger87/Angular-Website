import { Component, OnInit, HostBinding } from '@angular/core';
import { slideToLeft } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ slideToLeft()]
})
export class HomeComponent implements OnInit {

  myName = 'Sam Egger';

  constructor() { }

  ngOnInit() {
  }
}
