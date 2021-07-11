import { Component, OnInit } from '@angular/core';
import { Finca } from '../../models/finca';
import { Lote } from '../../models/lote';
import { Cultivo } from '../../models/cultivo';
import { UserService } from '../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

import { ModalController } from '@ionic/angular';
import { CrearlotePage } from '../lotecrud/crearlote/crearlote.page';
//import { EditarlotePage } from '../lotecrud/editarlote/editarlote.page';

@Component({
  selector: 'app-lote',
  templateUrl: './lote.page.html',
  styleUrls: ['./lote.page.scss'],
})
export class LotePage implements OnInit {

  lotess: any;
  id:any;
  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient,private modalController: ModalController) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getLotesid(this.id).forEach(res=>{
        this.lotess=(<Lote>res);  
                                                    });
  }
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: CrearlotePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
/*
  async presentModal() {
    const modal = await this.modalController.create({
      component: CrearlotePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentModal2(id) {
    const modal = await this.modalController.create({
      component: EditarlotePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }*/

doRefresh(event) {
  this.ngOnInit();
    setTimeout(() => {
      event.target.complete();
  }, 1000);
}

cultivos(idx:number){
  this.router.navigate(['/menu/menu/finca/lote/cultivo',idx]);
}

editar(idx:number){
  this.router.navigate(['/menu/menu/finca/lote/editarlote',idx]);
}

crear(){
  this.router.navigate(['/menu/menu/finca/lote/crearlote']);
}

eliminar(idx:number){
  this.userservice.deleteLote(idx).forEach(res=>{
  this.lotess=(<Lote>res);
  //window.location.reload();
  //this.router.navigate(['/menu/menu/finca']);
});
}
}
