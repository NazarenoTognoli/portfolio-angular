import { Component, inject, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileNavDisplayService } from '@srv/mobile-nav-display.service'

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.sass'
})
export class MobileNavComponent {
  public mobileNavDisplayService = inject(MobileNavDisplayService);
  constructor(private renderer : Renderer2) {}
  bodyOverflowOnMobileNavVisible() {
    if (this.mobileNavDisplayService.returnValue()) {
     this.renderer.addClass(document.body, 'body-no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'body-no-scroll');
    }
  }
}
