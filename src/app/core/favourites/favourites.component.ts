import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { FavouritesService } from '../favourites/favourites.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.sass'],
})
export class FavouritesComponent implements OnInit {

  data: any[] = [];
  counter = 0;
  total = 0;

  constructor(private favouritesService: FavouritesService, private router: Router) {}

  ngOnInit(): void {
    this.getFavourites();
  }

  public getFavourites(): void {
    this.favouritesService.getFavourites().subscribe({
      next: (data: any) => {
        if (data.exists) {
          this.data = data.data().data;
        }
      },
    });
    this.counter = this.data.length;
    console.log(this.counter);
  }

   removeFromFavourites(project: any): void {
    this.favouritesService.removeFromFavourites(project);
    this.getFavourites();
  }
}
