import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { IGif } from '../gif';
import { slideToRight } from '../router.animations';
import { slideToLeft } from '../router.animations';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss'],
  animations: [slideToLeft(), slideToRight()]
})
export class GifComponent implements OnInit {

  private gif: IGif;

  constructor(private _gifService: GifService) { }

  ngOnInit() {
    this._gifService.retrieveGifData().subscribe(data => {
      this.gif = data;
      console.log(this.gif.data);
    });
  }

}
