import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MyNameDesktopComponent } from '@mol/my-name-desktop/my-name-desktop.component'
import { MyPhotoDesktopComponent } from '@mol/my-photo-desktop/my-photo-desktop.component'
import { MainDescriptionComponent } from '@mol/main-description/main-description.component'

@Component({
  selector: 'app-my-introduction-desktop',
  standalone: true,
  imports: [MyNameDesktopComponent, 
            MyPhotoDesktopComponent,
            MainDescriptionComponent,
            MatButtonModule],
  templateUrl: './my-introduction-desktop.component.html',
  styleUrl: './my-introduction-desktop.component.sass'
})
export class MyIntroductionDesktopComponent {}
