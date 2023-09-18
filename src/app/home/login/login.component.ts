import { Component, OnInit } from '@angular/core';
import { LoginModel } from './model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario = new LoginModel();

  ngOnInit(): void {

  }

  login(){
    console.log(this.loginUsuario);
  }
}
