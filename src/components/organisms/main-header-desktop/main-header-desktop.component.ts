import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArFlagComponent } from '@atom/ar-flag/ar-flag.component';
import { UsFlagComponent } from '@atom/us-flag/us-flag.component';
import { SwitchComponent } from '@atom/switch/switch.component';
import { LightModeIconComponent } from '@atom/light-mode-icon/light-mode-icon.component';
import { DarkModeIconComponent } from '@atom/dark-mode-icon/dark-mode-icon.component';
import { CircleIconComponent } from '@atom/circle-icon/circle-icon.component';
import { MobileHomeButtonComponent } from '@atom/mobile-home-button/mobile-home-button.component';

@Component({
  selector: 'app-main-header-desktop',
  standalone: true,
  imports: [
    ArFlagComponent, 
    UsFlagComponent, 
    SwitchComponent, 
    CommonModule, 
    LightModeIconComponent,
    DarkModeIconComponent,
    CircleIconComponent,
    RouterModule,
    MobileHomeButtonComponent],
  templateUrl: './main-header-desktop.component.html',
  styleUrl: './main-header-desktop.component.sass'
})
export class MainHeaderDesktopComponent {
  usFlag: boolean = true;
  darkMode: boolean = true;
  langOptions: boolean = false;
  english: boolean = true;
  spanish: boolean = false;
  normalizeScroll() {
    this.renderer.removeClass(document.body, 'body-no-scroll-desktop');
  }
  constructor(private renderer : Renderer2) {}
}
