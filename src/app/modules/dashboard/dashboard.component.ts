import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // TODO: FOOD, ANIMALS, ACHIEVEMENTS?, MATERIALS?
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}
