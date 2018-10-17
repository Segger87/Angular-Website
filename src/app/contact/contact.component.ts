import { Component, OnInit } from '@angular/core';
import { slideToLeft, slideToRight, slideToBottom, slideToTop } from '../router.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [slideToLeft(), slideToRight(), slideToBottom(), slideToTop()]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
