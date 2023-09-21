import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../home/login/model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private _httpClient: HttpClient) {

   }

   autenticar(credUsuario: LoginModel): Observable<any>
   {
      return this._httpClient.post('http://localhost:3000/user/login', {
      userName: credUsuario.usuario,
      password: credUsuario.senha
    });
   }
}
