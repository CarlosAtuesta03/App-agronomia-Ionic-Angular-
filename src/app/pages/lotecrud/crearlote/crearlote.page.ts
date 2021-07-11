import { Component, OnInit } from '@angular/core';
import { Lote } from '../../../models/lote';
import { UserService } from '../../../api/user.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
//import { ViewController } from '@ionic/angular';

@Component({
  selector: 'app-crearlote',
  templateUrl: './crearlote.page.html',
  styleUrls: ['./crearlote.page.scss'],
})
export class CrearlotePage implements OnInit {

  lotes: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalCtrl: ModalController) {}

  ngOnInit() {
    
  }

  agregar(lot_area,lot_descripcion,lot_fin_id){
    let  lotes={
      
      lot_area:lot_area.value,
      lot_descripcion:lot_descripcion.value,
      lot_fin_id:lot_fin_id.value
    }
    this.userservice.agregarLote(lotes).subscribe(res =>{
      console.log('Lote creado');
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
