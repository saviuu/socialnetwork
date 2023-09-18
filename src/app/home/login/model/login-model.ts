export class LoginModel {
  public usuario: string;
  public senha: string;

  constructor(obj?: LoginModel) {
		this.usuario = obj?.usuario || '';
		this.senha = obj?.senha || '';
	}
}
