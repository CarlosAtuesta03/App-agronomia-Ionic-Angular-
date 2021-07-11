import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../../models/trabajador';
import { Cultivo } from '../../../models/cultivo';
import { UserService } from '../../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreartrabajadorPage } from '../creartrabajador/creartrabajador.page';


@Component({
  selector: 'app-vertrabajador',
  templateUrl: './vertrabajador.page.html',
  styleUrls: ['./vertrabajador.page.scss'],
})
export class VertrabajadorPage implements OnInit {
  trabajadores: any;
  id:any;
  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalController: ModalController) {}


  async presentModal() {
    const modal = await this.modalController.create({
      component: CreartrabajadorPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getTrabajador(this.id).forEach(res=>{
        this.trabajadores=(<Trabajador>res);  
                                                    });
  }
  }
  editar(idx:number){
    this.router.navigate(['/menu/menu/trabajadores/vertrabajador/editartrabajador',idx]);
  }

doRefresh(event) {
  this.ngOnInit();
    setTimeout(() => {
      event.target.complete();
  }, 1000);
}

eliminar(idx:number){
  this.userservice.deleteTrabajador(idx).forEach(res=>{
  this.trabajadores=(<Trabajador>res);
  //window.location.reload();
  this.router.navigate(['/menu/menu/trabajadores']);
});
}

}
