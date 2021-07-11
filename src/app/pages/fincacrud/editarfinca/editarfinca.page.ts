import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Finca } from '../../../models/finca';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-editarfinca',
  templateUrl: './editarfinca.page.html',
  styleUrls: ['./editarfinca.page.scss'],
})
export class EditarfincaPage implements OnInit {

  fincas: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getFinca(this.id).forEach(res=>{
        this.fincas=(<Finca>res);
    }); 
  }
  }

  Editar( fin_nombre,fin_area,fin_descripcion,fin_adm_cedula){
    let fincas={
      fin_nombre:fin_nombre.value,
      fin_area:fin_area.value,
      fin_descripcion:fin_descripcion.value,
      fin_adm_cedula:fin_adm_cedula.value
    }
    this.userservice.editFinca(this.id,fincas).subscribe(res =>{
     // window.location.reload();
     console.log('Finca editada');
     this.router.navigate(['/menu/menu/finca']);
    });
  }

}
