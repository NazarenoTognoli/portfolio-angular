import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMpontntes
import { NextArrowComponent } from '@atom/next-arrow/next-arrow.component';
import { BackArrowComponent } from '@atom/back-arrow/back-arrow.component';

type NavigationDirection = "next" | "back";
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NextArrowComponent, BackArrowComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.sass'
})
export class ProjectsComponent {
  controlPanel: boolean = false;
  panelSections: Array<boolean> = [true, false, false];
  project = { index: 1 };
  image = {
    relativeIndex: 1,
    absoluteIndex: (): string => `${this.project.index}-${this.image.relativeIndex}`,
    limit: 3
  };
  diagram = {
    relativeIndex: 1,
    absoluteIndex: (): string => `${this.project.index}-${this.diagram.relativeIndex}`,
    limit: 3
  };

  refreshLimits() {
    switch (this.project.index) {
        case 1:
            this.image.limit = 3;
            this.diagram.limit = 5;
            break;
        case 2:
            this.image.limit = 7;
            this.diagram.limit = 2;
            break;
        default:
            this.image.limit = 3;
            this.diagram.limit = 3;
    }  
    this.image.relativeIndex = 1;
    this.diagram.relativeIndex = 1;
  }

  refreshProjectIndex(value: number) {
    this.project.index = value;
    this.refreshLimits();
    this.renderer.addClass(document.body, 'body-no-scroll-desktop');
  }

  normalizeScroll() {
    this.renderer.removeClass(document.body, 'body-no-scroll-desktop');
  }

  relativeIndexRefresh(value: NavigationDirection, target: 'image' | 'diagram' = 'image'): void {
    if (value !== "next" && value !== "back") {
      console.error(`Invalid navigation direction: ${value}`);
      return;
    } 
    const selectedTarget = this[target];
    const isAtUpperLimit = selectedTarget.relativeIndex >= selectedTarget.limit;
    const isAtLowerLimit = selectedTarget.relativeIndex <= 1; 

    if (value === "next") {
      if (isAtUpperLimit) return;
      selectedTarget.relativeIndex++;
      console.log(selectedTarget.absoluteIndex());
    } else if (value === "back") {
      if (isAtLowerLimit) return;
      selectedTarget.relativeIndex--;
      console.log(selectedTarget.absoluteIndex());
    }
  }

  constructor(private renderer : Renderer2) {
    this.refreshLimits();
  }

  toggleView(value: number) {
    this.panelSections.forEach((_, index) => {
      this.panelSections[index] = false;
    });
    this.panelSections[value] = true;
  }
}
