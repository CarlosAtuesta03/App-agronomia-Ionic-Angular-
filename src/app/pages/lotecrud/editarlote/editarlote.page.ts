import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Lote } from '../../../models/lote';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-editarlote',
  templateUrl: './editarlote.page.html',
  styleUrls: ['./editarlote.page.scss'],
})
export class EditarlotePage implements OnInit {

  Lotes: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getLote(this.id).forEach(res=>{
        this.Lotes=(<Lote>res);
    }); 
  }
  }

  Editar( lot_id,lot_area,lot_descripcion,lot_fin_id){
    let Lotes={
      lot_id:lot_id.value,
      lot_area:lot_area.value,
      lot_descripcion:lot_descripcion.value,
      lot_fin_id:lot_fin_id.value
    }
    this.userservice.editLote(this.id,Lotes).subscribe(res =>{
      console.log('Lote editado');
     // window.location.reload();
    // this.router.navigate(['/menu/menu/finca/lote']);
    });
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

  regresar(idx:number){
    this.router.navigate(['/menu/menu/finca/lote',idx]);
  }

}
