import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-korolev-school',
  templateUrl: './korolev-school.component.html',
  styleUrls: ['./korolev-school.component.scss'],
})
export class KorolevSchoolComponent  implements OnInit {

  full_text: boolean = false;

  constructor() { }

  ngOnInit() {}

  openFullText() {
    this.full_text = true;
  }

  closeFullText() {
    this.full_text = false;
  }
}
