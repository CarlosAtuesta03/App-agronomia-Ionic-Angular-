import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { UserService } from '../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {
  proveedores: any;

  constructor(private userservice:UserService, private rutaActiva: ActivatedRoute, private router:Router, private httpClient:HttpClient) { }

  ngOnInit():void {
    {
      this.userservice.getProveedores().forEach(res=>{
        this.proveedores=(<Proveedor>res);
    });
    }
  }

  ver(idx:number){
    this.router.navigate(['/menu/menu/proveedor/verproveedor',idx]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
