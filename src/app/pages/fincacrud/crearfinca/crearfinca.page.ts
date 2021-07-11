import { Component, OnInit } from '@angular/core';

import { Finca } from '../../../models/finca';
import { UserService } from '../../../api/user.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearfinca',
  templateUrl: './crearfinca.page.html',
  styleUrls: ['./crearfinca.page.scss'],
})
export class CrearfincaPage implements OnInit {

  fincas: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit() {
  }

  agregar(fin_nombre,fin_area,fin_descripcion,fin_adm_cedula){
    let  fincas={
      fin_nombre:fin_nombre.value,
      fin_area:fin_area.value,
      fin_descripcion:fin_descripcion.value,
      fin_adm_cedula:fin_adm_cedula.value
    }
    this.userservice.agregarFinca(fincas).subscribe(res =>{
      console.log('Finca agreagada');
     // window.location.reload();
      this.router.navigate(['/menu/menu/finca']);
    });
  }

}
