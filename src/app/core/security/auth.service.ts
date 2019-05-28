import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { NotificationService } from '../notification/notification.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(private angularFireAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router, private notificationService: NotificationService) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.object(`/users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    this.authorization(credential.user);
    this.updateUserData(credential.user);
  }

  async googleSignOut() {
    await this.angularFireAuth.auth.signOut();
    return this.router.navigate(['login']);
  }

  updateUserData({ uid, email, displayName, photoURL }: User) {
    const data = { uid, email, displayName, photoURL };
    return this.db.object(`/users/${uid}`).set(data);
  }

  authorization({ email }: User) {
    this.db.list('/authenticated-users', ref => ref.orderByChild('email').equalTo(email)).valueChanges()
      .subscribe(v => {
        if (v.length) {
          this.router.navigate(['/']);
        } else {
          this.googleSignOut();
          this.notificationService.showWarningMessage('You are not authorized to access here.')
          this.router.navigate(['login']);
        }
      });
  }
}
