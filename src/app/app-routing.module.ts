import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
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
    path: 'characters/:name',
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
    path: 'weapons',
    loadChildren: () =>
      import('./modules/weapons/weapons.module').then((m) => m.WeaponsModule),
  },
  {
    path: 'weapons/:name',
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
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: '/dashboard',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
