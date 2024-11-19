//Boilerplate stuff
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app.config';
import { Component, HostListener, OnInit, inject, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, provideRouter } from '@angular/router';
//Services
import { MobileNavDisplayService } from '@srv/mobile-nav-display.service';
//Components
import { MainComponent } from '@page/main/main.component';
import { DetailsComponent } from '@page/details/details.component';
import { ProjectsComponent } from '@page/projects/projects.component';
import { ContactComponent } from '@page/contact/contact.component';
import { MainHeaderComponent } from '@org/main-header/main-header.component';
import { MobileNavComponent } from '@org/mobile-nav/mobile-nav.component';
// Definimos las rutas
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    MainHeaderComponent,
    MobileNavComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './entry.html',
  styleUrls: ['./entry.sass']
})
export class AppComponent implements OnInit {
  mobileNavDisplayState: boolean = false;
  mainHeaderScrolled: boolean = false;

  public mobileNavDisplayService = inject(MobileNavDisplayService);
  constructor() {}
  // Detectamos el evento scroll en la ventana
  @HostListener('window:scroll', ['$event'])
  public onMainHeaderScrolled(): void {
    if (window.scrollY > 25) {
      this.mainHeaderScrolled = true;
    } else {
      this.mainHeaderScrolled = false;
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
    this.mobileNavDisplayService.mobileNavDisplayState.subscribe((newState: boolean)=>{
      this.mobileNavDisplayState = newState;
    });
  }
}

// Usamos bootstrapApplication para iniciar la app con enrutamiento
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
