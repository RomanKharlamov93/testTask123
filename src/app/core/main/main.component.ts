import { Component, OnInit } from '@angular/core';
import { debounceTime, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MainService } from './main.service';
import { FavouritesService } from '../favourites/favourites.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
})
export class MainComponent implements OnInit {
  keyword = new FormControl('');
  data: any[] = [];
  total = 0;

  constructor(
    private mainService: MainService,
    private favouritesService: FavouritesService
  ) {
    this.keyword.valueChanges
      .pipe(
        debounceTime(1000),
        tap((value) => {
          if (value) this.onChange(value);
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  clear() {
    this.keyword.setValue('');
  }

  onChange(keyword: string) {
    this.mainService.search({ q: keyword }).subscribe({
      next: ({ items, total_count }) => {
        this.total = total_count;
        this.data = items;
      },
    });
  }

  addToFavourites(project: any) {
    this.favouritesService.addToFavourites(project);
  }
}
