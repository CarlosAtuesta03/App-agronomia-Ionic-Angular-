import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../api/user.service';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-creartrabajador',
  templateUrl: './creartrabajador.page.html',
  styleUrls: ['./creartrabajador.page.scss'],
})
export class CreartrabajadorPage implements OnInit {

 
  trabajador: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}


  ngOnInit() {
  }


  agregar(tra_nombre,tra_telefono,tra_foto){
    let  trabajador={
      tra_nombre:tra_nombre.value,
      tra_telefono:tra_telefono.value,
      tra_foto:tra_foto.value
    }
    this.userservice.agregarTrabajador(trabajador).subscribe(res =>{
      console.log('Trabajador creado');
     // window.location.reload();
      this.router.navigate(['/menu/menu/trabajadores']);
    });
  }

}
