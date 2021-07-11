import { Component, OnInit } from '@angular/core';
import { Cultivo } from '../../../models/cultivo';
import { UserService } from '../../../api/user.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';




@Component({
  selector: 'app-crearcultivo',
  templateUrl: './crearcultivo.page.html',
  styleUrls: ['./crearcultivo.page.scss'],
})
export class CrearcultivoPage implements OnInit {

  cultivo: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalCtrl: ModalController) {}

  ngOnInit() {
    
  }

  agregar(cul_nombre,cul_inicio,cul_fin,cul_cantidad,cul_lot_id,cul_tip_id){
    let  cultivo={
      
      cul_nombre:cul_nombre.value,
      cul_inicio:cul_inicio.value,
      cul_fin:cul_fin.value,
      cul_cantidad:cul_cantidad.value,
      cul_lot_id:cul_lot_id.value,
      cul_tip_id:cul_tip_id.value
    }
    this.userservice.agregarCultivo(cultivo).subscribe(res =>{
      console.log('Cultivo agregado');
     // window.location.reload();
     // this.router.navigate(['/menu/menu/finca/lote']);
    });
  }

  
 

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
