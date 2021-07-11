import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { UserService } from '../../../api/user.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crearoperacion',
  templateUrl: './crearoperacion.page.html',
  styleUrls: ['./crearoperacion.page.scss'],
})
export class CrearoperacionPage implements OnInit {

  operacion: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalCtrl: ModalController) {}

  ngOnInit() {
    
  }

  agregar(ope_nombre,ope_tiempo,ope_fecha,ope_fin,ope_cul_id){
    let  operacion={
      
      ope_nombre:ope_nombre.value,
      ope_tiempo:ope_tiempo.value,
      ope_fecha:ope_fecha.value,
      ope_fin:ope_fin.value,
      ope_cul_id:ope_cul_id.value
    }
    this.userservice.agregarOperacion(operacion).subscribe(res =>{
      console.log('Operacion creada');
     // window.location.reload();
     // this.router.navigate(['/menu/menu/finca/lote']);
    });
  }


  regresar(idx:number){
    
    this.router.navigate(['/menu/menu/finca/lote',idx]);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
