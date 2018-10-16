import { Component, OnInit } from '@angular/core';
import { slideToLeft, slideToBottom } from '../router.animations';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css'],
  animations: [slideToBottom()]
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
