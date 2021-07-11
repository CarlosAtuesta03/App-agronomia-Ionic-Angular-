import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Operacion } from '../../../models/operacion';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-editaroperacion',
  templateUrl: './editaroperacion.page.html',
  styleUrls: ['./editaroperacion.page.scss'],
})
export class EditaroperacionPage implements OnInit {

  operacion: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getOperacion(this.id).forEach(res=>{
        this.operacion=(<Operacion>res);
    }); 
  }
  }

  Editar( ope_nombre,ope_tiempo,ope_fecha,ope_fin,ope_cul_id){
    let operacion={
      ope_nombre:ope_nombre.value,
      ope_tiempo:ope_tiempo.value,
      ope_fecha:ope_fecha.value,
      ope_fin:ope_fin.value,
      ope_cul_id:ope_cul_id.value
    }
    this.userservice.editOperacion(this.id,operacion).subscribe(res =>{
      console.log('Operacion editada');
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
    this.router.navigate(['/menu/menu/finca/lote/cultivo/operacion',idx]);
  }

}
