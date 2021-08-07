import { Component, OnInit } from '@angular/core';
import { Finca } from '../../../models/finca';
import { UserService } from '../../../api/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscarfinca',
  templateUrl: './buscarfinca.page.html',
  styleUrls: ['./buscarfinca.page.scss'],
})
export class BuscarfincaPage implements OnInit {

  text:string;
  productsArr: Finca [];
  fincas : any;
  

  constructor(private authService : AuthService,private userservice:UserService, private rutaActiva:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.text= this.rutaActiva.snapshot.params.text;
    this.productsArr= this.buscar(this.text);
  }

  buscar(text){
    let resc: Finca []=[];
    text = text.toLowerCase();
    this.authService.user$.subscribe(req=>
    this.userservice.getFinca(req.uid).forEach(res=>{
        this.fincas=(<Finca>res);
        for(const finca of this.fincas){
            const name = finca.fin_nombre.toLowerCase();
            if(name.indexOf(text) >= 0){
              resc.push(finca)
            }
        }
    }));
    return resc; 
  }

  lotes (idfinca:number){
    this.router.navigate(['/tabs/tabs/lote', idfinca]);
  }

  update (idfinca:number){
    this.router.navigate(['/tabs/tabs/editfinca', idfinca]);
  }
  eliminar(idx:number){
      this.userservice.deleteFinca(idx).forEach(res=>{
      this.fincas=(<Finca>res);
    });
  }


}
