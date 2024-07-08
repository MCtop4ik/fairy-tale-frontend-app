import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levchenko-poem',
  templateUrl: './levchenko-poem.component.html',
  styleUrls: ['./levchenko-poem.component.scss'],
})
export class LevchenkoPoemComponent  implements OnInit {

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
