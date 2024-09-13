import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-section-one',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './main-section-one.component.html',
  styleUrl: './main-section-one.component.sass'
})
export class MainSectionOneComponent {}
