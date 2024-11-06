import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { MyNameDesktopComponent } from '@mol/my-name-desktop/my-name-desktop.component';
import { MyPhotoDesktopComponent } from '@mol/my-photo-desktop/my-photo-desktop.component';
import { MainDescriptionComponent } from '@mol/main-description/main-description.component';
import { ContactButtonContentComponent } from '@atom/contact-button-content/contact-button-content.component';
import { XpBtnContentComponent } from '@atom/xp-btn-content/xp-btn-content.component';
import { ProjBtnContentComponent } from '@atom/proj-btn-content/proj-btn-content.component';
import { TestNavigatorService } from '@srv/test-navigator.service';

@Component({
  selector: 'app-main-section-one-desktop',
  standalone: true,
  imports: [MyNameDesktopComponent, 
            MyPhotoDesktopComponent,
            MainDescriptionComponent,
            MatButtonModule,
            ContactButtonContentComponent,
            CommonModule,
            XpBtnContentComponent,
            ProjBtnContentComponent],
  templateUrl: './main-section-one-desktop.component.html',
  styleUrl: './main-section-one-desktop.component.sass'
})
export class MainSectionOneDesktopComponent {
  constructor(private testNavigatorService: TestNavigatorService) {}
  isNotChrome():boolean {
    return !this.testNavigatorService.isChrome()
  }
}
