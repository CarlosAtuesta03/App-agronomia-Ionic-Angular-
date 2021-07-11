import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../services/auth.service';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  name:string;
  photo:string;
  email: string;
  afAuth: any;
  //<ion-icon name="eye-outline"></ion-icon>
  //<ion-icon name="finger-print-sharp"></ion-icon>
  //<ion-icon name="diamond-outline"></ion-icon>
//<ion-icon name="game-controller-outline"></ion-icon>
  
  public rutaspages=[
    {title:'Inicio',url:'/menu/menu/inicioo', icon: 'eye'},
    {title:'Fincas',url:'/menu/menu/finca', icon: 'home'},
    {title:'Provedores',url:'/menu/menu/proveedor', icon: 'car'},
    {title:'Trabajadores',url:'/menu/menu/trabajadores', icon: 'people'},
    {title:'juego',url:'/menu/menu/juego', icon: 'game-controller'},
    {title:'Ayuda',url:'/menu/menu/ayuda', icon: 'information'}
  ];
  constructor(private authservice : AuthService,private menu: MenuController,private router:Router) {}
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
  cerrar(): void {
    this.authservice.logout();
    this.router.navigate(['/login']);
  }

}


