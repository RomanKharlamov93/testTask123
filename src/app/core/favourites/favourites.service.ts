import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from '../../shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  url = 'https://api.github.com/search/repositories';
  constructor(
    private fireStoreService: AngularFirestore,
    private authService: AuthService
  ) {
    this.authService.currentUser
  }

  public addToFavourites(project: any): any {
    this.fireStoreService
      .collection('users')
      .doc(this.authService.currentUser.uid)
      .update({
        data: firebase.firestore.FieldValue.arrayUnion(project),
      });
  }

  public removeFromFavourites(project: any): any {
    this.fireStoreService
      .collection('users')
      .doc(this.authService.currentUser.uid)
      .update({
        data: firebase.firestore.FieldValue.arrayRemove(project)
      });
  }

  public getFavourites(): any {
    console.log(this.authService.currentUser?.uid);
    return this.fireStoreService
      .collection('users')
      .doc(this.authService.currentUser?.uid)
      .get();
  }
}
