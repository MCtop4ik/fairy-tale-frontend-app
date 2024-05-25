import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.page.html',
  styleUrls: ['./glossary.page.scss'],
})
export class GlossaryPage implements OnInit {

  constructor(private httpService: HttpService, private server: ServerService, private router: Router) { }

  tales: any = {};
  glossary_data = [];

  ngOnInit() {
    this.getGlossaryData();
    this.getTales();
  }

  getGlossaryData(){
    this.glossary_data = this.httpService.getGlossaryData();
    // this.httpService.getGlossaryData().subscribe((data): void => {this.glossary_data = data});
  }

  goToTale(tale_ids: string): string[]{
    return ["..", "tales", "morning", "tale", tale_ids];
  }

  getTales() {
    this.tales = this.server.server["tales"]
  }

  getTaleName(tale_id: string) {
    try {
      return this.tales[tale_id].title
    }catch{
    }
    
  }

  routeToTale(route: string[]) {
    this.router.navigate(route);
  }

}
