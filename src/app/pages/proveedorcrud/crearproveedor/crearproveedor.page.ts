import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../../models/trabajador';
import { Cultivo } from '../../../models/cultivo';
import { UserService } from '../../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-crearproveedor',
  templateUrl: './crearproveedor.page.html',
  styleUrls: ['./crearproveedor.page.scss'],
})
export class CrearproveedorPage implements OnInit {

  proveedor: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}


  ngOnInit() {
  }


  agregar(pro_nit,pro_razonsocial,pro_email){
    let  proveedor={
      pro_nit:pro_nit.value,
      pro_razonsocial:pro_razonsocial.value,
      pro_email:pro_email.value
    }
    this.userservice.agregarProveedor(proveedor).subscribe(res =>{
      console.log('Proveedor creado');
     // window.location.reload();
      this.router.navigate(['/menu/menu/proveedor']);
    });
  }

}
