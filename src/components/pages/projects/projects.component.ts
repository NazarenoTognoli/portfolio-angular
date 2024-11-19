import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMpontntes
import { NextArrowComponent } from '@atom/next-arrow/next-arrow.component';
import { BackArrowComponent } from '@atom/back-arrow/back-arrow.component';

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
  
  projectIndex: string = '1';
  imageIndex: string = `${projectIndex}-1`;
  diagramIndex: string = `${projectIndex}-1`;
  descriptionIndex: string = projectIndex;

  imageIndexRefresh(value: string): string {
    this.imageIndex =  projectIndex + "-" + value;
  }
  diagramIndexRefresh(value: string): string {
    this.diagramIndex = projectIndex + "-" + value;
  }
  toggleView(value: number) {
    this.panelSections.forEach((_, index) => {
      this.panelSections[index] = false;
    });
    this.panelSections[value] = true;
  }
}
