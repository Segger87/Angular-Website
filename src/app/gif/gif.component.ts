import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif.service';
import { slideToRight, slideToLeft } from '../router.animations';

@Component({
 selector: 'app-gif',
 templateUrl: './gif.component.html',
 styleUrls: ['./gif.component.scss'],
 animations: [slideToLeft(), slideToRight()]
})
export class GifComponent implements OnInit {

 public urls: string[];
 public time: Date;

 constructor(private _gifService: GifService) { }

 ngOnInit() {
  const setInSessionStorage = this.getStorageData();
  const timeOfLastRetrieval = this.getStorageTime();

  if (setInSessionStorage.length == 0 || Date.now() - Date.parse(timeOfLastRetrieval) > 60000) { //hits api every 60seconds 
    this._gifService.retrieveGifData().subscribe(json => {
      this.urls = [];
      this.time = new Date();
      json.data.forEach(datum => {
        this.urls.push(datum.images.downsized.url);
        setInSessionStorage.push(datum.images.downsized.url);
        this.setStorage(setInSessionStorage, this.time);
        console.log('set');
      });
    });
  } else {
    this.urls = this.getStorageData();
    console.log('get');
    console.log(Date.now() - Date.parse(timeOfLastRetrieval) + 'seconds elapsed since last API hit');
  }
 }

 public getStorageData(): string[] {
   const sessionStorageItem = JSON.parse(sessionStorage.getItem('urls'));
   return sessionStorageItem == null ? [] : sessionStorageItem.urls;
 }

 public getStorageTime(): string {
  const sessionStorageTime = JSON.parse(sessionStorage.getItem('timeSet'));
  return sessionStorageTime == null ? "" : sessionStorageTime.time;
}

 private setStorage(urls: string[], timeRetrieved: Date): void {
  sessionStorage.setItem('urls', JSON.stringify({urls: urls}));
  sessionStorage.setItem('timeSet', JSON.stringify({ time: timeRetrieved}));
 }
}
