import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import { Proveedor } from '../../../models/proveedor';
import { UserService } from '../../../api/user.service';


@Component({
  selector: 'app-editarproveedor',
  templateUrl: './editarproveedor.page.html',
  styleUrls: ['./editarproveedor.page.scss'],
})
export class EditarproveedorPage implements OnInit {

  proveedor: any;
  id:any;

  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getProveedor(this.id).forEach(res=>{
        this.proveedor=(<Proveedor>res);
    }); 
  }
  }

  Editar( pro_nit,pro_razonsocial,pro_email){
    let proveedor={
      pro_nit :pro_nit.value,
      pro_razonsocial:pro_razonsocial.value,
      pro_email:pro_email.value
    }
    this.userservice.editProveedor(this.id,proveedor).subscribe(res =>{
      console.log('Proveedor editado');
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
    this.router.navigate(['/menu/menu/proveedor']);
  }

}
