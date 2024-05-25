import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tale',
  templateUrl: './tale.page.html',
  styleUrls: ['./tale.page.scss'],
})
export class TalePage implements OnInit {

  id = "1";
  tale = {'title': 'undefined', 'author': {'first_last': 'undefined'}, 'full_text': 'undefined', 'bg_img': 'https://pcvector.net/uploads/posts/2018-02/1517572511_bg-svg-gradient-min.png',
    'grammar': [{'phrase': 'undefined', 'transcription': 'undefined', 'translation': 'undefined'}], 'video_src': 'undefined'};
  segment_value = 'text';
  audioPlayer!: HTMLAudioElement;
  isPlaying: boolean = false;
  currentTime: string = '0:00';
  duration: string = '0:00';
  progress: number = 0;


  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    this.audioPlayer.addEventListener('timeupdate', this.updateTime.bind(this));
    this.route.params.subscribe(params=>this.id = params['id']);
    this.getTale(); 
  }

  getTale(){
    console.log(this.id);
    this.tale = this.httpService.getTaleData()[this.id];
    // this.httpService.getTaleData(this.id).subscribe((data): void => {this.tale = data});
  }

  segmentChanged(e: any){
    console.log(e.detail.value);
    this.segment_value = e.detail.value;
}

playPause() {
  if (this.isPlaying) {
    this.audioPlayer.pause();
  } else {
    this.audioPlayer.play();
  }
  this.isPlaying = !this.isPlaying;
}

updateTime() {
  this.progress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
  this.currentTime = this.formatTime(this.audioPlayer.currentTime);
  this.duration = this.formatTime(this.audioPlayer.duration);
}

formatTime(seconds: number): string {
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

}
