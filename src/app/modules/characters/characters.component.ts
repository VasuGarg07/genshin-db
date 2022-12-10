import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'genshin-db';
import { Color } from 'src/app/helpers/enums';
import { GenshinService } from 'src/app/services/genshin.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters!: Character[];

  constructor(private genshin: GenshinService, private router: Router) {}

  ngOnInit(): void {
    this.characters = this.genshin.getAllCharacters();
  }

  getEnum(el: string): Color {
    return <Color>Color[el as keyof typeof Color];
  }

  getImage(nameIcon: string) {
    return this.genshin.imageUrl(nameIcon);
  }

  elementIcon(name: string) {
    return `/assets/elements/${name.toLocaleLowerCase()}.svg`;
  }

  lookCharacter(name: string) {
    this.router.navigate(['/characters', name]);
  }
}
