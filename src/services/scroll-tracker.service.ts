import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollTrackerService {
  private currentSection = new BehaviorSubject<number>(0);
  currentSection$ = this.currentSection.asObservable();

  // Método para inicializar el seguimiento de secciones con las posiciones de las secciones
  startTracking(sectionOffsets: number[]): void {
    window.addEventListener('scroll', () => this.onScroll(sectionOffsets));
  }
  
  private onScroll(sectionOffsets: number[]): void {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Verifica en qué sección está el scroll usando las posiciones proporcionadas
    if (scrollPosition < sectionOffsets[1]) {
      this.currentSection.next(0); // Sección 1
    } else if (scrollPosition >= sectionOffsets[1] && scrollPosition < sectionOffsets[2]) {
      this.currentSection.next(1); // Sección 2
    } else if (scrollPosition >= sectionOffsets[2]) {
      this.currentSection.next(2); // Sección 3
    }
  }
}