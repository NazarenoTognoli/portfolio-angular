import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MyNameMobileComponent } from '@mol/my-name-mobile/my-name-mobile.component'
import { MyPhotoMobileComponent } from '@mol/my-photo-mobile/my-photo-mobile.component'
import { MainDescriptionComponent } from '@mol/main-description/main-description.component'
@Component({
  selector: 'app-main-section-one-mobile',
  standalone: true,
  imports: [MyNameMobileComponent, MatButtonModule, MyPhotoMobileComponent, MainDescriptionComponent],
  templateUrl: './main-section-one-mobile.component.html',
  styleUrl: './main-section-one-mobile.component.sass'
})
export class MainSectionOneMobileComponent {

}
