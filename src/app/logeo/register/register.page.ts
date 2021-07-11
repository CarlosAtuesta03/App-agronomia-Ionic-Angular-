import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
//import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  afAuth: any;
  public login: FormGroup;
  cliente :any;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private authSvc: AuthService, private router: Router) {this.login = this.crearMiFormulario();}

  ngOnInit() {}
  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        console.log('email',email);
      console.log('pass',password);
      }
    } catch (error) {
      console.log('No cumple las Condiciones Necesarias', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['tabs']);
    } else {
      this.router.navigate(['verify-email']);
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
