import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Cultivo } from '../../../models/cultivo';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-editarcultivo',
  templateUrl: './editarcultivo.page.html',
  styleUrls: ['./editarcultivo.page.scss'],
})
export class EditarcultivoPage implements OnInit {
  cultivos: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getcultivo(this.id).forEach(res=>{
        this.cultivos=(<Cultivo>res);
    }); 
  }
  }

  Editar( cul_nombre,cul_inicio,cul_fin,cul_cantidad,cul_lot_id,cul_tip_id){
    let cultivos={
      cul_nombre:cul_nombre.value,
      cul_inicio:cul_inicio.value,
      cul_fin:cul_fin.value,
      cul_cantidad:cul_cantidad.value,
      cul_lot_id:cul_lot_id.value,
      cul_tip_id:cul_tip_id.value
    }
    this.userservice.editCultivo(this.id,cultivos).subscribe(res =>{
      console.log('Cultivo editado');
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
    this.router.navigate(['/menu/menu/finca/lote/cultivo',idx]);
  }

}
