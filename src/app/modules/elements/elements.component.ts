import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Element } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss'],
})
export class ElementsComponent implements OnInit {
  elements: Element[];
  constructor(private router: Router, private genshin: GenshinService) {
    this.elements = this.genshin.getElementThemes();
  }

  ngOnInit(): void {
    console.log(this.elements);
  }
}
