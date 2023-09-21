import { Component, OnInit } from '@angular/core';
import { LoginModel } from './model';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _autenticacaoService: AutenticacaoService){}

  loginUsuario = new LoginModel();

  ngOnInit(): void {

  }

  login(){
    this._autenticacaoService.autenticar(this.loginUsuario).subscribe(
      {
        next(ret) {
            console.log(ret);
        },
        error(err) {
          console.log(err.message);
        },
      }
    )
  }
}
