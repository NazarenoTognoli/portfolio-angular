import { Component } from '@angular/core';

import { MainSectionOneComponent } from '@org/main-section-one/main-section-one.component';
import { MainSectionTwoComponent } from '@org/main-section-two/main-section-two.component';
import { MainSectionThreeComponent } from '@org/main-section-three/main-section-three.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ MainSectionOneComponent, MainSectionTwoComponent, MainSectionThreeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.sass'
})
export class MainPageComponent {}
