import { Component, AfterViewInit, HostBinding, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ScrollTrackerService } from '@srv/scroll-tracker.service';

@Component({
  selector: 'app-up-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './up-btn.component.html',
  styleUrl: './up-btn.component.sass'
})
export class UpBtnComponent implements AfterViewInit {
  disabled(): boolean {
    return this.sectionIndex === 0;
  }
  sectionIndex = 0;
  @HostBinding('style.fill') fill = '#777';
  @HostBinding('style.cursor') cursor = 'default';
  getBtnShadowActiveClass = () => ({
    'shadow-active': this.sectionIndex !== 0
  });
  constructor(private scrollTrackerService: ScrollTrackerService) {}
  ngAfterViewInit(): void {
    this.scrollTrackerService.currentSection$.subscribe((index) => {
      this.sectionIndex = index;
      this.fill = this.disabled() ? '#777' : '#afd3ff';
      this.cursor = this.disabled() ? 'default' : 'pointer';
    });
  }
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
