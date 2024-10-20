import { Component } from '@angular/core';

import { MainHeaderDesktopComponent } from '@org/main-header-desktop/main-header-desktop.component'
import { MainHeaderMobileComponent } from '@org/main-header-mobile/main-header-mobile.component'

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [
    MainHeaderDesktopComponent,
    MainHeaderMobileComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.sass'
})
export class MainHeaderComponent {}
