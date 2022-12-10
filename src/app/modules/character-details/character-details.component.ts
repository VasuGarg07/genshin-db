import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'genshin-db';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character: Character | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genshin: GenshinService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    if (name && this.genshin.getCharacter(name)) {
      this.character = this.genshin.getCharacter(name);
    } else {
      this.router.navigate(['/characters']);
    }
  }

  ngOnInit(): void {}
}
