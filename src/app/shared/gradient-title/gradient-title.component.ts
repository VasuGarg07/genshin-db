import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradient-title',
  templateUrl: './gradient-title.component.html',
  styleUrls: ['./gradient-title.component.scss'],
})
export class GradientTitleComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
