import { Component, OnInit } from '@angular/core';
import { Finca } from '../../models/finca';
import { UserService } from '../../api/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-finca',
  templateUrl: './finca.page.html',
  styleUrls: ['./finca.page.scss'],
})
export class FincaPage implements OnInit {
  fincas: any;

  constructor(private userservice:UserService, private rutaActiva: ActivatedRoute, private router:Router, private httpClient:HttpClient) { }

  ngOnInit():void {
    {
      this.userservice.getFincas().forEach(res=>{
        this.fincas=(<Finca>res);
    });
    }
  }

  editar(idx:number){
    this.router.navigate(['/menu/menu/editarfinca',idx]);
  }

  lotes(idx:number){
    this.router.navigate(['/menu/menu/finca/lote',idx]);
  }

  eliminar(idx:number){
    this.userservice.deleteFinca(idx).forEach(res=>{
    this.fincas=(<Finca>res);
    console.log('Finca eliminada');
    //window.location.reload();
    //this.router.navigate(['/menu/menu/finca']);
 });
}

doRefresh(event) {
  this.ngOnInit();
    setTimeout(() => {
      event.target.complete();
  }, 1000);
}

buscar2( event){
  this.router.navigate(['/menu/menu/finca/buscarfinca', event.detail.value]);
}

buscar (event){
  this.router.navigate(['/menu/menu/finca/buscarfinca', event.detail.value]);
}

}
