import { Component, AfterViewInit } from '@angular/core';

import { MainSectionOneDesktopComponent } from '@org/main-section-one-desktop/main-section-one-desktop.component';
import { MainSectionTwoDesktopComponent } from '@org/main-section-two-desktop/main-section-two-desktop.component';
import { MainSectionThreeDesktopComponent } from '@org/main-section-three-desktop/main-section-three-desktop.component';

import { MainSectionOneMobileComponent } from '@org/main-section-one-mobile/main-section-one-mobile.component';
import { MainSectionTwoMobileComponent } from '@org/main-section-two-mobile/main-section-two-mobile.component';
import { MainSectionThreeMobileComponent } from '@org/main-section-three-mobile/main-section-three-mobile.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ 
    MainSectionOneMobileComponent, 
    MainSectionTwoMobileComponent, 
    MainSectionThreeMobileComponent,
    MainSectionOneDesktopComponent, 
    MainSectionTwoDesktopComponent, 
    MainSectionThreeDesktopComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass'
})
export class MainPageComponent implements AfterViewInit { // Implementing AfterViewInit

  ngAfterViewInit() { // Using Angular lifecycle hook
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.background-video'); // Fixed typo in selector

    videos.forEach((video) => {
      video.oncanplaythrough = () => {
        video.muted = true;
        video.play().catch(error => {
          //console.error("Video playback failed:", error);
          this.showPlaybackError();
        });
      };
    });
  }
  showPlaybackError() {
    // Create a notification element
    const notification = document.createElement('div');
    notification.innerText = "Video playback is restricted in your browser. Please enable autoplay for a better experience.";
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // Red background
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '1000'; // High z-index to overlay
    notification.style.transition = 'opacity 0.5s';
    
    document.body.appendChild(notification);
    
    // Auto-remove the notification after 5 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 500); // Wait for the fade-out transition to finish
    }, 5000);
  }
}