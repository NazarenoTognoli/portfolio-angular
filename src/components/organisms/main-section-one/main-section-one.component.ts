import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MyIntroductionMobileComponent } from '@org/my-introduction-mobile/my-introduction-mobile.component'
import { MyIntroductionDesktopComponent } from '@org/my-introduction-desktop/my-introduction-desktop.component'

@Component({
  selector: 'app-main-section-one',
  standalone: true,
  imports: [
    MyIntroductionMobileComponent, 
    MyIntroductionDesktopComponent],
  templateUrl: './main-section-one.component.html',
  styleUrl: './main-section-one.component.sass'
})
export class MainSectionOneComponent {
  // onVideoLoaded() {
  //   const video = document.querySelector('.background-video') as HTMLVideoElement;
  //   if (video) {
  //     video.play();
  //   }
  // }
}
