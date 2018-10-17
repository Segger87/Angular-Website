import { Component, OnInit } from '@angular/core';
import { slideToBottom, slideToTop } from '../router.animations';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss'],
  animations: [slideToBottom(), slideToTop()]
})
export class PianoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
