import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tale',
  templateUrl: './tale.page.html',
  styleUrls: ['./tale.page.scss'],
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

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngAfterViewInit() {
    if (this.isAudio) {
      const audio = this.audioPlayer.nativeElement;
      audio.addEventListener('timeupdate', this.updateTime.bind(this));
      audio.addEventListener('loadedmetadata', this.loadedMetadata.bind(this));
      audio.addEventListener('canplaythrough', this.canPlayThrough.bind(this));
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.id=params['id'])
    this.getTale();
  }


  getTale() {
    console.log(this.id);
    this.tale = this.httpService.getTaleData()[this.id];
    if (this.tale['video_src'] == "no audio") {
      this.audioLink = "https://sndup.net/qjvx/"
      this.isAudio = false;
    } else {
      this.audioLink = 'https://sndup.net/' + this.tale["video_src"] + '/d'
      this.isAudio = true;
    }
    
    // this.httpService.getTaleData(this.id).subscribe((data): void => {this.tale = data});
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

  segmentChanged(event: any){
    console.log(event.detail.value);
    this.segment_value = event.detail.value;
  }
}
