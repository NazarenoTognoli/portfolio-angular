import { Component, HostListener, OnInit, inject, Renderer2 } from '@angular/core';

import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngClass

import { MobileHomeButtonComponent } from '@atom/mobile-home-button/mobile-home-button.component'
import { NavButtonComponent } from '@atom/nav-button/nav-button.component'

import { MobileNavDisplayService } from '@srv/mobile-nav-display.service'

@Component({
  selector: 'app-main-header-mobile',
  standalone: true,
  imports: [MobileHomeButtonComponent, NavButtonComponent, CommonModule],
  templateUrl: './main-header-mobile.component.html',
  styleUrl: './main-header-mobile.component.sass'
})
export class MainHeaderMobileComponent {
  mobileNavDisplayState: boolean = false;
  public mobileNavDisplayService = inject(MobileNavDisplayService);
  constructor(private renderer : Renderer2){}
  bodyOverflowOnMobileNavVisible() {
    if (this.mobileNavDisplayState) {
     this.renderer.addClass(document.body, 'body-no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'body-no-scroll');
    }
  }
  ngOnInit(){
    this.mobileNavDisplayService.mobileNavDisplayState.subscribe((newState: boolean)=>{
      this.mobileNavDisplayState = newState;
    });
  }
}
