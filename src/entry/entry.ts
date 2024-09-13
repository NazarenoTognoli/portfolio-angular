//Boilerplate stuff
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngClass

//Components
import { MainPageComponent } from '@page/main-page/main-page.component';
import { MainSectionOneComponent } from '@org/main-section-one/main-section-one.component'
import { MainSectionTwoComponent } from '@org/main-section-two/main-section-two.component'
import { MainSectionThreeComponent } from '@org/main-section-three/main-section-three.component'
import { MainHeaderComponent } from '@mol/main-header/main-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainPageComponent, 
    MainSectionOneComponent,
    MainSectionTwoComponent,
    MainSectionThreeComponent,
    MainHeaderComponent,
    CommonModule
  ],
  templateUrl: './entry.html',
  styleUrls: ['./entry.sass']
})
export class AppComponent {
  scrolled: boolean = false;
  // Detectamos el evento scroll en la ventana
  @HostListener('window:scroll', ['$event'])
  public asd(): void {
    if (window.scrollY > 25) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
  ngOnInit() {
    console.log("executed block " + this.scrolled)
  }
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
