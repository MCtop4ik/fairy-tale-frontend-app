import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.page.html',
  styleUrls: ['./admin-panel.page.scss'],
})
export class AdminPanelPage implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }
  slider = "talesAdminPanel";
  tales_data = []

  ngOnInit() {
    this.getTales();
  }

  segmentChanged(event: any){
    this.slider = event.detail.value;
    console.log(this.tales_data);
  }

  getTales(){
    this.tales_data = []
    // this.httpService.getTalesData(window.innerWidth, 'morning').subscribe((data_morning): void => {
    //   this.tales_data = this.tales_data.concat(data_morning);
    // });
    // this.httpService.getTalesData(window.innerWidth, 'night').subscribe((data_night): void => {
    //   this.tales_data = this.tales_data.concat(data_night);
    // });
  }

}
