import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
//import SmoothScroll from 'smooth-scroll'; npm i @types/smooth-scroll npm i smooth-scroll (for browser with disabled scroll-smooth)
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngClass s
import { ScrollTrackerService } from '@srv/scroll-tracker.service';

import { MainSectionOneDesktopComponent } from '@org/main-section-one-desktop/main-section-one-desktop.component';
import { MainSectionTwoDesktopComponent } from '@org/main-section-two-desktop/main-section-two-desktop.component';
import { MainSectionThreeDesktopComponent } from '@org/main-section-three-desktop/main-section-three-desktop.component';
import { UpBtnComponent } from '@atom/up-btn/up-btn.component';
import { DownBtnComponent } from '@atom/down-btn/down-btn.component';
import { MainSectionOneMobileComponent } from '@org/main-section-one-mobile/main-section-one-mobile.component';



@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ 
    MainSectionOneMobileComponent, 
    MainSectionOneDesktopComponent, 
    MainSectionTwoDesktopComponent, 
    MainSectionThreeDesktopComponent,
    UpBtnComponent,
    DownBtnComponent,
    CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass'
})
export class MainPageComponent implements AfterViewInit { // Implementing AfterViewInit
  notificationAppear: boolean = false;
  notificationDisappear: boolean = false;

  @ViewChild('sec1') sec1!: ElementRef;
  @ViewChild('sec2') sec2!: ElementRef;
  @ViewChild('sec3') sec3!: ElementRef;

  sectionIndex = 0;
  upBtn():undefined {
    if (this.sectionIndex === 0) return;
    else if (this.sectionIndex === 1){
      window.location.hash = ''; //reset default
      window.location.hash = 'sec0';
    } else if (this.sectionIndex === 2) {
      window.location.hash = ''; //reset default
      //this.scrollToSection(this.sec2);
      window.location.hash = 'sec1';
    }
  }
  downBtn():undefined {
    if (this.sectionIndex === 2) return;
    else if (this.sectionIndex === 0){
      window.location.hash = ''; //reset default
      //this.scrollToSection(this.sec2);
      window.location.hash = 'sec1';
    } else if (this.sectionIndex === 1) {
      window.location.hash = ''; //reset default
      //this.scrollToSection(this.sec3); 
      window.location.hash = 'sec2';
    }
  }
  ngAfterViewInit(): void { // Using Angular lifecycle hook
    // const scroll = new SmoothScroll('a[href*="#"]', {
    //   speed: 3000,
    //   speedAsDuration: true
    // });
    // setTimeout(()=>{
    //   console.log("exeeeeee");
    //   scroll.animateScroll(document.querySelector('#sec1'));
    // }, 5000);
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.background-video'); // Fixed typo in selector

    videos.forEach((video) => {
      video.addEventListener('loadeddata', () => {
        video.style.opacity = '.2';
      });
      video.oncanplaythrough = () => {
        video.muted = true;
        video.play().catch(error => {
          //console.error("Video playback failed:", error);
          this.showPlaybackError();
          video.style.display = 'none';
        });
      };
    });

    // Calcula las posiciones de cada sección
    const sectionOffsets = [
      this.sec1.nativeElement.offsetTop,
      this.sec2.nativeElement.offsetTop,
      this.sec3.nativeElement.offsetTop,
    ];

    // Pasa las posiciones al servicio para iniciar el seguimiento
    this.scrollTrackerService.startTracking(sectionOffsets);

    // Suscríbete al observable para obtener la sección actual en tiempo real
    this.scrollTrackerService.currentSection$.subscribe((index) => {
      this.sectionIndex = index;
    });
  }
  constructor(private scrollTrackerService: ScrollTrackerService) {}
  getNotificationClasses() {
    return {
      'notification-appear': this.notificationAppear,
      'notification-disappear': this.notificationDisappear
    };
  }
  showPlaybackError() {
    // Create a notification element
    this.notificationAppear = true;
    this.notificationDisappear = false;
    
    // Auto-remove the notification after 5 seconds
    setTimeout(() => {
      this.notificationDisappear = true;
      setTimeout(() => {
        this.notificationAppear = false;
      }, 500); // Wait for the fade-out transition to finish
    }, 5000);
  }
}