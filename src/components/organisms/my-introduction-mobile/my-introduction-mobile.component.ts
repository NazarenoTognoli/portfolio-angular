import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MyNameMobileComponent } from '@mol/my-name-mobile/my-name-mobile.component'
import { MyPhotoMobileComponent } from '@mol/my-photo-mobile/my-photo-mobile.component'
import { MainDescriptionComponent } from '@mol/main-description/main-description.component'

@Component({
  selector: 'app-my-introduction-mobile',
  standalone: true,
  imports: [ MyNameMobileComponent, MatButtonModule, MyPhotoMobileComponent, MainDescriptionComponent ],
  templateUrl: './my-introduction-mobile.component.html',
  styleUrl: './my-introduction-mobile.component.sass'
})
export class MyIntroductionMobileComponent {

}
