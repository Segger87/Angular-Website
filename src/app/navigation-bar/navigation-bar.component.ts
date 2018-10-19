import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styles: ['.navbar-brand{font-family: Rancho, cursive; font-size: 2em;}']
})
export class NavigationBarComponent implements OnInit {
  navbarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
