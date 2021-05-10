import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { AuthService } from '../../shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  url = 'https://api.github.com/search/repositories';
  constructor(
    private fireStoreService: AngularFirestore,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  search(params: any): Observable<any> {
    return this.http.get(this.url, { params });
  }
}
