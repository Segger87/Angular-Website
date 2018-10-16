import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { IGif } from '../gif';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
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
