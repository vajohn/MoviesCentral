import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {auth} from 'firebase/app';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: User;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    public angularFirestore: AngularFirestore,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(this.getDecodedUserInfo());
    this.currentUser = this.currentUserSubject.asObservable();

    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        sessionStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(sessionStorage.getItem('user'));
      } else {
        sessionStorage.setItem('user', null);
        JSON.parse(sessionStorage.getItem('user'));
      }
    });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {

        this.SetUserData(result.user);
        this.currentUserSubject.next(this.getDecodedUserInfo());
        this.router.navigate(['/account/dashboard']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  // Send email verification when new user sign up
  SendVerificationMail() {
    return this.angularFireAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/authorization/user/verify']);
      });
  }

  // Reset Forgot password
  ForgotPassword(passwordResetEmail) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Sign in with Facebook
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.angularFireAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
        this.SetUserData(result.user);
        this.currentUserSubject.next(this.getDecodedUserInfo());
      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out
  SignOut() {
    return this.angularFireAuth.auth.signOut().then(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['/authorization/user/sign-in']);
    });
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public getDecodedUserInfo(): User {
    try {
      return JSON.parse(sessionStorage.getItem('user'));
    } catch (Error) {

      return null;
    }
  }
}
