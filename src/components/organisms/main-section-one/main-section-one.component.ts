import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MyNameMobileComponent } from '@mol/my-name-mobile/my-name-mobile.component'
import { MyIntroductionMobileComponent } from '@mol/my-introduction-mobile/my-introduction-mobile.component'
import { MyIntroductionDesktopComponent } from '@mol/my-introduction-desktop/my-introduction-desktop.component'
import { MainDescriptionComponent } from '@mol/main-description/main-description.component'

@Component({
  selector: 'app-main-section-one',
  standalone: true,
  imports: [
    MyNameMobileComponent, 
    MyIntroductionMobileComponent, 
    MyIntroductionDesktopComponent,
    MainDescriptionComponent,
    MatButtonModule],
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
