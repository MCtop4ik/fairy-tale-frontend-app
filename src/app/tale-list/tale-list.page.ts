import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tale-list',
  templateUrl: 'tale-list.page.html',
  styleUrls: ['tale-list.page.scss'],
})
export class TaleListPage {

  timestamp: string | undefined;
  tales = [];

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.timestamp=params['timestamp']);
    this.getTales()
  }

  getTales(){
    this.tales = this.httpService.getTalesData(window.innerWidth);
    // this.httpService.getTalesData(window.innerWidth, this.timestamp).subscribe((data): void => {this.tales = data});
  }

}
