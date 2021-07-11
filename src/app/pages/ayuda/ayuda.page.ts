import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {

  constructor(public authservice : AuthService) { }

  ngOnInit() {
  }
  cerrarAutenticacion()
  {
    this.authservice.logout();
  }
  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
