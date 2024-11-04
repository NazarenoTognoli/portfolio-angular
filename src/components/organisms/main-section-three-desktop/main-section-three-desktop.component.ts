import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestNavigatorService } from '@srv/test-navigator.service';

@Component({
  selector: 'app-main-section-three-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-section-three-desktop.component.html',
  styleUrl: './main-section-three-desktop.component.sass'
})
export class MainSectionThreeDesktopComponent {
  constructor(private testNavigatorService: TestNavigatorService) {}
  isNotChrome():boolean {
    return !this.testNavigatorService.isChrome()
  }
}
