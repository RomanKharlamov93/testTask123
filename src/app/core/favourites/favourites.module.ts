import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FavouritesRoutingModule } from './favourites-routing.module';
import { FavouritesComponent } from './favourites.component';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    FavouritesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
  ],
})
export class FavouritesModule {}
