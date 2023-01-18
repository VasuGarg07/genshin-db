import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'artifacts',
    loadChildren: () =>
      import('./modules/artifacts/artifacts.module').then(
        (m) => m.ArtifactsModule
      ),
  },
  {
    path: 'artifact/:name',
    loadChildren: () =>
      import('./modules/artifact-details/artifact-details.module').then(
        (m) => m.ArtifactDetailsModule
      ),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./modules/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: 'character/:name',
    loadChildren: () =>
      import('./modules/character-details/character-details.module').then(
        (m) => m.CharacterDetailsModule
      ),
  },
  {
    path: 'domains',
    loadChildren: () =>
      import('./modules/domains/domains.module').then((m) => m.DomainsModule),
  },
  {
    path: 'domain/:name',
    loadChildren: () =>
      import('./modules/domain-detail/domain-detail.module').then(
        (m) => m.DomainDetailModule
      ),
  },
  {
    path: 'enemies',
    loadChildren: () =>
      import('./modules/enemies/enemies.module').then((m) => m.EnemiesModule),
  },
  {
    path: 'enemy/:name',
    loadChildren: () =>
      import('./modules/enemy-details/enemy-details.module').then(
        (m) => m.EnemyDetailsModule
      ),
  },
  {
    path: 'foods',
    loadChildren: () =>
      import('./modules/foods/foods.module').then((m) => m.FoodsModule),
  },
  {
    path: 'food/:name',
    loadChildren: () =>
      import('./modules/food-details/food-details.module').then(
        (m) => m.FoodDetailsModule
      ),
  },
  {
    path: 'geographies',
    loadChildren: () =>
      import('./modules/geographies/geographies.module').then(
        (m) => m.GeographiesModule
      ),
  },
  {
    path: 'materials',
    loadChildren: () =>
      import('./modules/materials/materials.module').then(
        (m) => m.MaterialsModule
      ),
  },
  {
    path: 'material/:name',
    loadChildren: () =>
      import('./modules/material-details/material-details.module').then(
        (m) => m.MaterialDetailsModule
      ),
  },
  {
    path: 'ranks',
    loadChildren: () =>
      import('./modules/adventure-ranks/adventure-ranks.module').then(
        (m) => m.AdventureRanksModule
      ),
  },
  {
    path: 'weapons',
    loadChildren: () =>
      import('./modules/weapons/weapons.module').then((m) => m.WeaponsModule),
  },
  {
    path: 'weapon/:name',
    loadChildren: () =>
      import('./modules/weapon-details/weapon-details.module').then(
        (m) => m.WeaponDetailsModule
      ),
  },
  {
    path: 'windgliders',
    loadChildren: () =>
      import('./modules/windgliders/windgliders.module').then(
        (m) => m.WindglidersModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
