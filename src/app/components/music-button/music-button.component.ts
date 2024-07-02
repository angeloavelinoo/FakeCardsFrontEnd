import { Component } from '@angular/core';

@Component({
  selector: 'app-music-button',
  templateUrl: './music-button.component.html',
  styleUrl: './music-button.component.scss'
})
export class MusicButtonComponent {

  audio = new Audio();
  isPlaying = false;

  ngOnInit(): void {
    this.playSound();
  }

  togglePlayPause(){
    if(this.isPlaying){
      this.stopAudio();
    }
    else{
      this.playSound();
    }
  }

  playSound(){
      this.audio.src = "../../assets/Medieval-Music-Cobblestone-Village.mp3";
      this.audio.play();
      this.isPlaying = true;
  }

  stopAudio(){
    this.audio.pause();
    this.isPlaying = false;
  }


}
