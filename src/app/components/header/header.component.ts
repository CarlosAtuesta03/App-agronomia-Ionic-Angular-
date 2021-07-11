import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

 
  name:string;
  photo:string;
  email: string;
  afAuth: any;
  //<ion-icon name="eye-outline"></ion-icon>
  //<ion-icon name="finger-print-sharp"></ion-icon>
    constructor(private authservice : AuthService,private menu: MenuController) { }
  async cerrarAutenticacion()
  {
    this.authservice.logout();
  }
  ngOnInit() {
    this.authservice.getUserAuth().subscribe(user=>{
      this.name=user.displayName;
      this.email=user.email;
      this.photo=user.photoURL;
      console.log(user); 
    })
  }
 
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  


}
