import { Component } from '@angular/core';

import { NameComponent } from '@mol/name/name.component'
import { RolNameComponent } from '@mol/rol-name/rol-name.component'

@Component({
  selector: 'app-main-section-one',
  standalone: true,
  imports: [NameComponent, RolNameComponent],
  templateUrl: './main-section-one.component.html',
  styleUrl: './main-section-one.component.sass'
})
export class MainSectionOneComponent {}
