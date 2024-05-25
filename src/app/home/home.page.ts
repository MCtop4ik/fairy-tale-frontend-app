import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { Browser } from '@capacitor/browser';

interface Tale {
  title: string;
  image: string;
  link: string;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tales = this.server.server['all_tales']['all_tales_tiny']
  words = this.server.server['grammar']
  
  randomTale: any | null = null;
  randomWord: any | null = null;

  showTranslation: boolean = false;

  constructor(
    private router: Router,
    private server: ServerService
  ) {}

  ngOnInit() {
    this.getRandomTale();
    this.getRandomWord();
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  goToTales() {
    this.router.navigate(['tales', 'morning']);
  }

  getRandomTale() {
    const randomIndex = Math.floor(Math.random() * this.tales.length);
    this.randomTale = this.tales[randomIndex][0];
    this.randomTale.image = this.randomTale.image_src;
    this.randomTale.link = '/tales/morning/tale/' + this.randomTale.id;
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    this.randomWord = this.words[randomIndex];
    this.randomWord.exists = false;
    console.log(this.randomWord);
    if (this.randomWord.tale_ids){
      this.randomWord.link = '/tales/morning/tale/' + this.randomWord.tale_ids;
      this.randomWord.exists = true;
    }
  }

  async openCollection() {
    const pdfUrl = 'https://drive.google.com/file/d/1b4UKbbiVPhpglfEJsZp8Bw6tCL-4ln4l/view?usp=sharing';
    await Browser.open({ url: pdfUrl });
  }

  toggleTranslation(): void {
    this.showTranslation = !this.showTranslation;
  }

  reloadRandomWord() {
    this.showTranslation = false;
    this.getRandomWord();
  }

  reloadRandomTale() {
    this.getRandomTale();
  }

}
