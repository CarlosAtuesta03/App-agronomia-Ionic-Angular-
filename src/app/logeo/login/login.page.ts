import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
//import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { materialize, switchMap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  afAuth: any;
  public login: FormGroup;
  cliente :any;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authSvc: AuthService, private router: Router) {this.login = this.crearMiFormulario();}

  async onLogin(email, password) {
    try {
      const user = await this.authSvc.mibellologin(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
        console.log('Usuario ->', user);
      }
    } catch (error) {
      console.log('No Cumple con las Condiciones ', error);
    }
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }


  async onLoginFacebook() {
   try {
      const user = await this.authSvc.loginFacebook();
      if (user) {
       const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['menu']);
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






