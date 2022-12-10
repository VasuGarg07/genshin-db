import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'animated-title',
  templateUrl: './animated-title.component.html',
  styleUrls: ['./animated-title.component.scss'],
})
export class AnimatedTitleComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
}
