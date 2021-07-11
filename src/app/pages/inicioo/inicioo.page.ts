import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicioo',
  templateUrl: './inicioo.page.html',
  styleUrls: ['./inicioo.page.scss'],
})
export class IniciooPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doRefresh(event) {
    this.ngOnInit();
      setTimeout(() => {
        event.target.complete();
    }, 1000);
  }

}
