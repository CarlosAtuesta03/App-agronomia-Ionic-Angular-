import { Component, OnInit } from '@angular/core';
import { Operacion } from '../../models/operacion';
import { Cultivo } from '../../models/cultivo';
import { UserService } from '../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CrearoperacionPage } from '../operacioncrud/crearoperacion/crearoperacion.page';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.page.html',
  styleUrls: ['./operacion.page.scss'],
})
export class OperacionPage implements OnInit {

  
  operaciones: any;
  id:any;
  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalController: ModalController) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getOperacion(this.id).forEach(res=>{
        this.operaciones=(<Operacion>res);  
                                                    });
  }
  }
  editar(idx:number){
    this.router.navigate(['/menu/menu/finca/lote/cultivo/operacion/editaroperacion',idx]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }
  eliminar(idx:number){
    this.userservice.deleteOperacion(idx).forEach(res=>{
    this.operaciones=(<Operacion>res);
    //window.location.reload();
    //this.router.navigate(['/menu/menu/finca']);
  });
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: CrearoperacionPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
