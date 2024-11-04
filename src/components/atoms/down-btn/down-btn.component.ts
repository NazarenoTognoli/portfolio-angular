import { Component, AfterViewInit, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTrackerService } from '@srv/scroll-tracker.service';

@Component({
  selector: 'app-down-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './down-btn.component.html',
  styleUrl: './down-btn.component.sass'
})
export class DownBtnComponent implements AfterViewInit {
  disabled(): boolean {
    return this.sectionIndex === 2;
  }
  sectionIndex = 0;
  
  @HostBinding('style.fill') fill = '#afd3ff';
  @HostBinding('style.cursor') cursor = 'pointer';

  constructor(private scrollTrackerService: ScrollTrackerService) {}
  
  ngAfterViewInit(): void {
    this.scrollTrackerService.currentSection$.subscribe((index) => {
      this.sectionIndex = index;
      this.fill = this.disabled() ? '#777' : '#afd3ff';
      this.cursor = this.disabled() ? 'default' : 'pointer';
    });
  }

  getBtnShadowActiveClass = () => ({
    'shadow-active': !this.disabled()
  });

  @HostListener('mouseenter') onMouseEnter() {
    if (this.disabled()) {
      this.fill = '#777'; // Cambiar el color al hacer hover
    } else {
      this.fill = '#fff';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.disabled()) {
      this.fill = '#777';
    } else {
      this.fill = '#afd3ff';
    }
  }
}
