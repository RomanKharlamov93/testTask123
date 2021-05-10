import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./core/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'favourites',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./core/favourites/favourites.module').then(
        (m) => m.FavouritesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
