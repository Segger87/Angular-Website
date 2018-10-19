import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { slideToRight } from '../router.animations';
import { slideToLeft } from '../router.animations';

@Component({
 selector: 'app-gif',
 templateUrl: './gif.component.html',
 styleUrls: ['./gif.component.scss'],
 animations: [slideToLeft(), slideToRight()]
})
export class GifComponent implements OnInit {

 public urls: string[];

 constructor(private _gifService: GifService) { }

 ngOnInit() {
     this._gifService.retrieveGifData().subscribe(json => {
     this.urls = [];
     json.data.forEach(datum => {
       this.urls.push(datum.images.downsized.url);
     });
   });
 }
}
