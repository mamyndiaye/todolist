import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Promise } from 'core-js';


@Injectable({  

  providedIn: 'root'
})
export class AuthService {
  authState: any = null;
  errorMessage: string;

  constructor(public afAuth: AngularFireAuth, private _firebaseAuth: AngularFireAuth){}
  
  SignInWithGoogle(){
    return this._firebaseAuth.auth.signInWithPopup ( 
      new firebase.auth.GoogleAuthProvider()
    )

  }
  SignInWithFacebook(){
    return this._firebaseAuth.auth.signInWithPopup ( 
      new firebase.auth.FacebookAuthProvider()
    )
}
doRegister(email:string, password:string){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res => {
      resolve(res);
    }, err => reject(err))
  })
}

}


