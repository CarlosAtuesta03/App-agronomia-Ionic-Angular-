import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
constructor(private authservice : AuthService){}
  ngOnInit(){
    this.authservice.getUserAuth().subscribe(User=>console.log(User))
  }
}
