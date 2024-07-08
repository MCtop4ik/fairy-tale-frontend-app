import { ChangeDetectorRef, Component, ElementRef, OnInit, SecurityContext, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tale',
  templateUrl: './tale.page.html',
  styleUrls: ['./tale.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TalePage implements OnInit {

  id = "1";
  tale = {
    'title': 'undefined', 'author': { 'first_last': 'undefined' }, 'full_text': 'undefined', 'bg_img': 'https://pcvector.net/uploads/posts/2018-02/1517572511_bg-svg-gradient-min.png',
    'grammar': [{ 'phrase': 'undefined', 'transcription': 'undefined', 'translation': 'undefined' }], 'video_src': 'undefined'
  };
  segment_value = 'text';
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  audioLink: string = 'https://sndup.net/' + this.tale["video_src"] + '/d'; // Update this path
  isPlaying: boolean = false;
  currentTime: string = '0:00';
  duration: string = '0:00';
  progress: number = 0;
  isLoading: boolean = true;
  isAudio: boolean = true;
  sanitizedFullText: SafeHtml | null = "";


  constructor(private route: ActivatedRoute, private httpService: HttpService,
    private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    if (this.isAudio) {
      const audio = this.audioPlayer.nativeElement;
      audio.addEventListener('timeupdate', this.updateTime.bind(this));
      audio.addEventListener('loadedmetadata', this.loadedMetadata.bind(this));
      audio.addEventListener('canplaythrough', this.canPlayThrough.bind(this));
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id'])
    this.getTale();
  }


  getTale() {
    console.log(this.id);
    this.tale = this.httpService.getTaleData()[this.id];
    this.tale['full_text'] = `<div class="styled-content">${this.wrapWordsInDiv(this.tale['full_text'], this.tale['grammar'])}</div>`;
    console.log(this.tale['full_text']);
    this.sanitizedFullText = this.sanitizer.bypassSecurityTrustHtml(this.tale['full_text']);
    console.log(this.tale['full_text']);
    console.log(this.tale['grammar']);
    
    if (this.tale['video_src'] == "no audio") {
      this.audioLink = "https://sndup.net/qjvx/"
      this.isAudio = false;
    } else {
      this.audioLink = 'https://sndup.net/' + this.tale["video_src"] + '/d';
      this.isAudio = true;
    }

    this.cdr.detectChanges();
  }

  wrapWordsInDiv(text: string, grammar: Array<{ phrase: string, transcription: string, translation: string }>): string {
    grammar.forEach(item => {
      const cnt = Math.random().toString(36).substring(2, 9);
      const regex = new RegExp(`\\b${item.phrase}\\b`, 'gi');
      text = text.replace(regex, 
        `<span id="${cnt}" class='highlighted-word'>${item.phrase}</span>
          <ion-popover trigger="${cnt}" side="bottom" alignment="center" triggerAction="click">
            <ng-template [ngTemplateOutlet]="popoverTemplate">
              <ion-card>
                <ion-content>
                  <ion-title class="phrase">${item.phrase}</ion-title>
                  <ion-title class="transcription">${item.transcription}</ion-title>
                  <ion-title class="phrase">${item.translation}</ion-title>
                </ion-content>
              </ion-card>
            </ng-template>
          </ion-popover>`
      );
      console.log(text);
    });
    return text;
  }
  playPause() {
    const audio = this.audioPlayer.nativeElement;
    if (audio.paused) {
      audio.play();
      this.isPlaying = true;
    } else {
      audio.pause();
      this.isPlaying = false;
    }
  }

  updateTime(event: Event) {
    const audio = this.audioPlayer.nativeElement;
    const current = audio.currentTime;
    const duration = audio.duration;
    this.currentTime = this.formatTime(current);
    this.progress = (current / duration) * 100;
  }

  loadedMetadata(event: Event) {
    const audio = this.audioPlayer.nativeElement;
    this.duration = this.formatTime(audio.duration);
  }

  canPlayThrough(event: Event) {
    this.isLoading = false; // Скрываем лоадер, когда аудио загружено
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
    this.segment_value = event.detail.value;
  }
}
