import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactButtonContentComponent } from '@atom/contact-button-content/contact-button-content.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactButtonContentComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
  ngAfterView() {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.background-video'); // Fixed typo in selector  
      videos.forEach((video) => {
        video.addEventListener('loadeddata', () => {
          video.style.opacity = '.2';
        });
        video.oncanplaythrough = () => {
          video.muted = true;
          video.play().catch(error => {
            //console.error("Video playback failed:", error);
            //this.showPlaybackError();
            video.style.display = 'none';
          });
        };
      });
  }
}
