import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.default.User | null | undefined>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
   }

  logIn(){
    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());
    this.router.navigate(['']);
  }

  logOut(){
    this.afAuth.signOut();
    this.router.navigate(['']);
  }

}
