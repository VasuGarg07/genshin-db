import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domain } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss'],
})
export class DomainsComponent implements OnInit {
  domains!: Domain[];
  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.domains = this.genshin.getAllDoamins();
  }

  lookup(name: string) {
    this.router.navigate(['/domain', name]);
  }

  thumb(domain: Domain) {
    return this.genshin.imageUrl(domain.images.namepic);
  }
}
