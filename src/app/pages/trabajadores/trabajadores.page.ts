import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../models/trabajador';
import { UserService } from '../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.page.html',
  styleUrls: ['./trabajadores.page.scss'],
})
export class TrabajadoresPage implements OnInit {

  trabajadores: any;

  constructor(private userservice:UserService, private rutaActiva: ActivatedRoute, private router:Router, private httpClient:HttpClient) { }

  ngOnInit():void {
    {
      this.userservice.getTrabajadores().forEach(res=>{
        this.trabajadores=(<Trabajador>res);
    });
    }
  }

  ver(idx:number){
    this.router.navigate(['/menu/menu/trabajadores/vertrabajador',idx]);
  }

  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }
}
