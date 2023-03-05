import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Utils } from './helpers/utilties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'genshin-db';
  time!: string;
  isMobile = Utils.isMobile();
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  routes = [
    'characters',
    'weapons',
    'artifacts',
    'domains',
    'enemies',
    'Foods',
    'materials',
    'geographies',
    // 'ranks',
    'windgliders',
  ];

  constructor(private router: Router, private location: Location) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  navigate(route: string) {
    this.drawer.close();
    this.router.navigate([`/${route.toLocaleLowerCase()}`]);
  }

  back() {
    this.location.back();
  }
}
