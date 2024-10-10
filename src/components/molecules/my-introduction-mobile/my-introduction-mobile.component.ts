import { Component } from '@angular/core';

import { MyNameMobileComponent } from '@mol/my-name-mobile/my-name-mobile.component'
import { MyPhotoMobileComponent } from '@mol/my-photo-mobile/my-photo-mobile.component'

@Component({
  selector: 'app-my-introduction-mobile',
  standalone: true,
  imports: [ MyNameMobileComponent, MyPhotoMobileComponent ],
  templateUrl: './my-introduction-mobile.component.html',
  styleUrl: './my-introduction-mobile.component.sass'
})
export class MyIntroductionMobileComponent {

}
