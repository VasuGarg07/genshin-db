import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as genshindb from 'genshin-db';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GenshinService {
  constructor(private http: HttpClient) {}

  imageUrl(nameIcon: string) {
    return `https://res.cloudinary.com/genshin/image/upload/sprites/${nameIcon}.png`;
  }

  getAllCharacters() {
    return genshindb.characters('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterCharacters(name: string) {
    return genshindb.characters(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getCharacter(name: string) {
    return genshindb.characters(name);
  }

  getCharacterStats(name: string, level: number, ascension: boolean = false) {
    const ascended = ascension ? '+' : '-';
    return genshindb.characters(name)?.stats(level, ascended);
  }

  getCharacterTalents(name: string) {
    return genshindb.talents(name);
  }

  getCharacterConstellations(name: string) {
    return genshindb.constellations(name);
  }

  getAllWeapons() {
    return genshindb.weapons('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterWeapons(name: string) {
    return genshindb.weapons(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getWeapon(name: string) {
    return genshindb.weapons(name);
  }

  getWeaponStats(name: string, level: number, ascension: boolean = false) {
    const ascended = ascension ? '+' : '-';
    return genshindb.weapons(name)?.stats(level, ascended);
  }

  getAll5Artifacts() {
    return genshindb.artifacts('5', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getArtifact(name: string) {
    return genshindb.artifacts(name, {
      verboseCategories: true,
      matchCategories: true,
    });
  }

  getAllTalents() {
    return genshindb.talents('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterTalents(name: string) {
    return genshindb.talents(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getTalent(name: string) {
    return genshindb.talents(name);
  }

  getAllWeaponMaterials() {
    return genshindb.weaponmaterialtypes('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterWeaponMaterial(name: string) {
    return genshindb.weaponmaterialtypes(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getWeaponMaterial(name: string) {
    return genshindb.weaponmaterialtypes(name);
  }

  getAllTalentMaterials() {
    return genshindb.talentmaterialtypes('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterTalentMaterial(name: string) {
    return genshindb.talentmaterialtypes(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getTalentMaterial(name: string) {
    return genshindb.talentmaterialtypes(name);
  }

  getAllDoamins() {
    return genshindb.domains('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterDomains(name: string) {
    return genshindb.domains(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getDomain(name: string) {
    return genshindb.domains(name);
  }

  getAllEnemies() {
    return genshindb.enemies('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  filterEnemies(name: string) {
    return genshindb.enemies(name, {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getEnemy(name: string) {
    return genshindb.enemies(name);
  }

  getElementThemes() {
    return genshindb.elements('names', {
      matchCategories: true,
      verboseCategories: true,
    });
  }

  getGameAreas() {
    return this.http
      .get(
        'https://genshin-db-api.vercel.app/api/geographies?query=names&matchCategories=true&verboseCategories=true'
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  filterGameAreas(name: string) {
    return this.http
      .get(
        `https://genshin-db-api.vercel.app/api/geographies?query=${name}&matchCategories=true&verboseCategories=true`
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
