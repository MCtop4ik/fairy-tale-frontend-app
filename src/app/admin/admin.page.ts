import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  secret_page: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  open_secret() {
    this.secret_page = !this.secret_page;
  }


}
