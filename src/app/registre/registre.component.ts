import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css'],
  providers: [AuthService]

})
export class RegistreComponent implements OnInit {
  constructor(public authService:AuthService ) { }

  ngOnInit() {
  }
  tryRegister(email,password){

    this.authService.doRegister(email,password)
    .then(res => {
      console.log("bravo");
  }, err => {
    console.log(err);


})
  }
}
