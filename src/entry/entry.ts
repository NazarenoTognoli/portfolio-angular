//Boilerplate stuff
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { Component, HostListener, OnInit, inject, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngClass

//Components
import { MainPageComponent } from '@page/main-page/main-page.component';
import { MainSectionOneComponent } from '@org/main-section-one/main-section-one.component';
import { MainSectionTwoComponent } from '@org/main-section-two/main-section-two.component';
import { MainSectionThreeComponent } from '@org/main-section-three/main-section-three.component';
import { MainHeaderComponent } from '@mol/main-header/main-header.component';
import { MobileNavComponent } from '@org/mobile-nav/mobile-nav.component';
//Services
import { MobileNavDisplayService } from '@srv/mobile-nav-display.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainPageComponent, 
    MainSectionOneComponent,
    MainSectionTwoComponent,
    MainSectionThreeComponent,
    MainHeaderComponent,
    MobileNavComponent,
    CommonModule
  ],
  templateUrl: './entry.html',
  styleUrls: ['./entry.sass']
})
export class AppComponent implements OnInit {
  mainHeaderScrolled: boolean = false;
  mobileNavDisplayState: boolean = false;

  public mobileNavDisplayService = inject(MobileNavDisplayService);
  constructor(private renderer : Renderer2) {}
  // Detectamos el evento scroll en la ventana
  @HostListener('window:scroll', ['$event'])
  public onMainHeaderScrolled(): void {
    if (window.scrollY > 25) {
      this.mainHeaderScrolled = true;
    } else {
      this.mainHeaderScrolled = false;
    }
  }
  bodyOverflowOnMobileNavVisible() {
    if (this.mobileNavDisplayState) {
     this.renderer.addClass(document.body, 'body-no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'body-no-scroll');
    }
  }
  getMainHeaderClasses() {
    return {
      'main-header-scrolled': this.mainHeaderScrolled,
      'main-header-while-nav-hidden': !this.mobileNavDisplayState,
      'main-header-while-nav-visible': this.mobileNavDisplayState
    };
  }
  ngOnInit(){
    this.mobileNavDisplayService.mobileNavDisplayState.subscribe((newState)=>{
      this.mobileNavDisplayState = newState;
    });
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
