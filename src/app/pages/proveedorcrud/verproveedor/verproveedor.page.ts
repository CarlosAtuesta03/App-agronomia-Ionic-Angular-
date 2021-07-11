import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { Cultivo } from '../../../models/cultivo';
import { UserService } from '../../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verproveedor',
  templateUrl: './verproveedor.page.html',
  styleUrls: ['./verproveedor.page.scss'],
})
export class VerproveedorPage implements OnInit {
  proveedores: any;
  id:any;
  constructor(private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router, private httpClient:HttpClient) {}

  ngOnInit(){
    {
      this.id = this.rutaActiva.snapshot.params.id;
      this.userservice.getProveedor(this.id).forEach(res=>{
        this.proveedores=(<Proveedor>res);  
                                                    });
  }
  }

doRefresh(event) {
  this.ngOnInit();
    setTimeout(() => {
      event.target.complete();
  }, 1000);
}

editar(idx:number){
  this.router.navigate(['/menu/menu/proveedor/verproveedor/editarproveedor',idx]);
}

eliminar(idx:number){
  this.userservice.deleteProveedor(idx).forEach(res=>{
  this.proveedores=(<Proveedor>res);
  //window.location.reload();
  this.router.navigate(['/menu/menu/proveedor']);
});
}
}
