import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'genshin-db';
  time!: string;

  routes = [
    'characters',
    'weapons',
    'artifacts',
    'domains',
    'enemies',
    'Foods',
    'geographies',
  ];

  constructor(private router: Router) {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  navigate(route: string) {
    this.router.navigate([`/${route.toLocaleLowerCase()}`]);
  }
}
