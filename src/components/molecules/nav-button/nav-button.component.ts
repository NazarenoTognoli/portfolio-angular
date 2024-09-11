import { Component } from '@angular/core';

import { ButtonComponent } from '@atom/button/button.component'

@Component({
  selector: 'app-nav-button',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './nav-button.component.html',
  styleUrl: './nav-button.component.sass'
})
export class NavButtonComponent {

}
