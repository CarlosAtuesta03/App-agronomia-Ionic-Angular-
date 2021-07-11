import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {

  afAuth: any;
  public login: FormGroup;
  cliente :any;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authSvc: AuthService, private router: Router) {this.login = this.crearMiFormulario();}

  async onResetPassword(email) {
    try {
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
    } catch (error) {
      console.log('Error->', error);
    }
  }

  

  //reactivo
  get codigo() { return this.login.get('codigo'); }
  get nombre() { return this.login.get('nombre'); }
  get direccion() { return this.login.get('direccion'); }

  crearMiFormulario() {
    return new FormGroup({
      codigo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(7), Validators.pattern(this.emailPattern)]),
     
    });
  }
 
  onResetForm(): void {
    this.login.reset();
  }

  salvarFormulario(): void {
   // console.log("valores en el home")
   // console.log(this.migrupo1.value)
    this.cliente=this.login.value
    //console.log(this.user)
    if (this.login.valid) {

      let objetoEnviar: NavigationExtras = {
        state: {
          infoCliente: this.cliente
        }
      };
      this.router.navigate(['informa'], objetoEnviar);

        this.onResetForm();
    }
  }

}
