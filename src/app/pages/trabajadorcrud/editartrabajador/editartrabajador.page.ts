import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Trabajador } from '../../../models/trabajador';
import { UserService } from '../../../api/user.service';

@Component({
  selector: 'app-editartrabajador',
  templateUrl: './editartrabajador.page.html',
  styleUrls: ['./editartrabajador.page.scss'],
})
export class EditartrabajadorPage implements OnInit {

  trabajador: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getTrabajador(this.id).forEach(res=>{
        this.trabajador=(<Trabajador>res);
    }); 
  }
  }

  Editar( tra_nombre,tra_telefono,tra_foto){
    let trabajador={
      tra_nombre :tra_nombre.value,
      tra_telefono:tra_telefono.value,
      tra_foto:tra_foto.value
    }
    this.userservice.editTrabajador(this.id,trabajador).subscribe(res =>{
      console.log('Trabajador editado');
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

  regresar(){
    this.router.navigate(['/menu/menu/trabajadores']);
  }

}
