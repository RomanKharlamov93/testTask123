import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: any = this.getPersistedUser();

  constructor(
    private fireAuthService: AngularFireAuth,
    private fireStoreService: AngularFirestore,
    private router: Router
  ) {
    this.fireAuthService.authState.subscribe({
      next: (user) => {
        if (!this.currentUser) { this.currentUser = user; }

      },
    });
  }

  public signIn(email: string, password: string): void {
    this.fireAuthService
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        localStorage.setItem('fb-user-email', email);
        return this.fireAuthService.signInWithEmailAndPassword(email, password).then(() => {
          this.router.navigate(['/main']);
        });
      })
      .catch(console.log);
  }

  public signUp(email: string, password: string): void {
    this.fireAuthService
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return this.fireAuthService
          .createUserWithEmailAndPassword(email, password)
          .then(({ user }) => {
            localStorage.setItem('fb-user-email', email);
            this.fireStoreService.collection('users').doc(user?.uid).set({});
            this.router.navigate(['/main']);
          });
      })
      .catch(console.log);
  }

  public signOut(): any {
    this.currentUser = null;
    localStorage.clear();
    return this.fireAuthService.signOut().then(() => {
      this.router.navigate(['auth']);
    });
  }

  public getPersistedUser(): any {
    const userKey = Object.keys(window.sessionStorage).filter((it) =>
      it.startsWith('firebase:authUser')
    )[0];

    const user = userKey
      ? JSON.parse(window.sessionStorage.getItem(userKey) as string)
      : undefined;

    return user;
  }
}
