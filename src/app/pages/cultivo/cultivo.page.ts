import { Component, OnInit } from '@angular/core';
//import { Finca } from '../../models/finca';
import { Lote } from '../../models/lote';
import { Cultivo } from '../../models/cultivo';
import { UserService } from '../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Operacion } from '../../models/operacion';
import { ModalController } from '@ionic/angular';
import { CrearcultivoPage } from '../cultivocrud/crearcultivo/crearcultivo.page';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.page.html',
  styleUrls: ['./cultivo.page.scss'],
})
export class CultivoPage implements OnInit {

  cultivoss: any;
  id:any;
  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalController: ModalController) {}

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }
  
  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getCultivosid(this.id).forEach(res=>{
        this.cultivoss=(<Cultivo>res);
    }); 
  }
  }

  regresar(idx:number){
    this.router.navigate(['/menu/menu/finca/lote',idx]);
  }

  Operacion(idx:number){
    this.router.navigate(['/menu/menu/finca/lote/cultivo/operacion',idx]);
  }


  eliminar(idx:number){
    this.userservice.deleteCultivo(idx).forEach(res=>{
    this.cultivoss=(<Cultivo>res);
    //window.location.reload();
    //this.router.navigate(['/menu/menu/finca']);
  });
  }

  editar(idx:number){
    this.router.navigate(['/menu/menu/finca/lote/cultivo/editarcultivo',idx]);
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: CrearcultivoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
