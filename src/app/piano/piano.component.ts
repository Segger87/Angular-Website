import { Component, OnInit } from '@angular/core';
import { slideToBottom } from '../router.animations';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
  animations: [slideToBottom()]
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
