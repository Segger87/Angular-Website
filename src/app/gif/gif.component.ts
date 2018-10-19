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
  const setInSessionStorage = this.getStorage();

  if (setInSessionStorage.length == 0) {
    this._gifService.retrieveGifData().subscribe(json => {
      this.urls = [];
      json.data.forEach(datum => {
        this.urls.push(datum.images.downsized.url);
        setInSessionStorage.push(datum.images.downsized.url);
        this.setStorage(setInSessionStorage);
        console.log('set');
      });
    });
  } else {
    this.urls = this.getStorage();
    console.log('get');
  }
 }

 public getStorage(): string[] {
   const sessionStorageItem = JSON.parse(sessionStorage.getItem('urls'));
   return sessionStorageItem == null ? [] : sessionStorageItem.urls;
 }

 private setStorage(urls: string[]): void {
  sessionStorage.setItem('urls', JSON.stringify({urls: urls}));
 }
}
