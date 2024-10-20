import { Component } from '@angular/core';

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
export class MainPageComponent {}
