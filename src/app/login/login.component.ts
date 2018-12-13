import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import { log } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]


})
export class LoginComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit() {
  }
  SignGoogle(){
    this.auth.SignInWithGoogle();

    
  }
  SignFacebook(){
    this.auth.SignInWithFacebook();
}

}
