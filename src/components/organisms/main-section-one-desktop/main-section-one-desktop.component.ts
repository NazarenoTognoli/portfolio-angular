import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MyNameDesktopComponent } from '@mol/my-name-desktop/my-name-desktop.component'
import { MyPhotoDesktopComponent } from '@mol/my-photo-desktop/my-photo-desktop.component'
import { MainDescriptionComponent } from '@mol/main-description/main-description.component'

@Component({
  selector: 'app-main-section-one-desktop',
  standalone: true,
  imports: [MyNameDesktopComponent, 
            MyPhotoDesktopComponent,
            MainDescriptionComponent,
            MatButtonModule],
  templateUrl: './main-section-one-desktop.component.html',
  styleUrl: './main-section-one-desktop.component.sass'
})
export class MainSectionOneDesktopComponent {

}
