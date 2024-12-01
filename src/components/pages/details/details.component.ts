import { Component, AfterViewInit } from '@angular/core';
import { TestNavigatorService } from '@srv/test-navigator.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.sass'
})
export class DetailsComponent {
  constructor(private testNavigatorService: TestNavigatorService) {}
  isNotChrome():boolean {
    return !this.testNavigatorService.isChrome()
  }
  ngAfterViewInit() {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.background-video'); // Fixed typo in selector

    videos.forEach((video) => {
      video.addEventListener('loadeddata', () => {
        video.style.opacity = '.2';
      });
      video.oncanplaythrough = () => {
        video.muted = true;
        video.play().catch(error => {
          console.error("Video playback failed:", error);
          video.style.display = 'none';
        });
      };
    });
  }
}
