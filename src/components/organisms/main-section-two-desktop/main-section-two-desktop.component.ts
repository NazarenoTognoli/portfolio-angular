import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { TestNavigatorService } from '@srv/test-navigator.service';

import { SliderImageOneComponent } from '@atom/slider-image-one/slider-image-one.component';
import { SliderImageTwoComponent } from '@atom/slider-image-two/slider-image-two.component';
import { SliderImageThreeComponent } from '@atom/slider-image-three/slider-image-three.component';
import { SliderImageFourComponent } from '@atom/slider-image-four/slider-image-four.component';
import { SliderImageFiveComponent } from '@atom/slider-image-five/slider-image-five.component';
import { SliderImageSixComponent } from '@atom/slider-image-six/slider-image-six.component';
import { SliderImageSevenComponent } from '@atom/slider-image-seven/slider-image-seven.component';
import { SliderImageEightComponent } from '@atom/slider-image-eight/slider-image-eight.component'; 
  
@Component({
  standalone: true,
  selector: 'app-main-section-two-desktop',
  imports: [
    CommonModule, 
    SliderImageOneComponent, 
    SliderImageTwoComponent, 
    SliderImageThreeComponent, 
    SliderImageFourComponent,
    SliderImageFiveComponent,
    SliderImageSixComponent,
    SliderImageSevenComponent,
    SliderImageEightComponent],
  templateUrl: './main-section-two-desktop.component.html',
  styleUrls: ['./main-section-two-desktop.component.sass']
})
export class MainSectionTwoDesktopComponent implements OnInit, OnDestroy {
  sliderInHouse: boolean = true;
  // Definimos las propiedades booleanas
  sliderShowOne: boolean = true;
  sliderShowTwo: boolean = false;
  sliderShowThree: boolean = false;
  sliderShowFour: boolean = false;
  sliderOpacity: boolean = true;

  // Creamos una variable para manejar la suscripción del intervalo
  private intervalSubscription!: Subscription;
  private currentIndex: number = 1; // Índice actual del slider

  // Lista de propiedades para alternar entre ellas
  private sliders = ['sliderShowOne', 'sliderShowTwo', 'sliderShowThree', 'sliderShowFour'];

  constructor(private testNavigatorService: TestNavigatorService) {}
  
  isNotChrome():boolean {
    return !this.testNavigatorService.isChrome()
  }

  ngOnInit(): void {
    // Usamos `interval` para ejecutar cada 8 segundos (8000 ms)
    this.intervalSubscription = interval(7000).pipe(
      tap(() => {
        this.toggleSliders();
        this.sliderOpacity = false; // Acción principal
      }),
      delay(100) // Retrasa la siguiente acción en 1000 ms
    ).subscribe(() => {
      this.sliderOpacity = true; // Acción secundaria que ocurre después de 100 ms
    });
  }

  private toggleSliders(): void {
    // Restablecemos todos los sliders a `false`
    this.resetSliders();

    // Activamos el slider correspondiente al índice actual
    const slider = this.sliders[this.currentIndex];
    (this as any)[slider] = true;

    // Incrementamos el índice de forma circular
    this.currentIndex = (this.currentIndex + 1) % this.sliders.length;
  }

  private resetSliders(): void {
    // Establece todas las propiedades en `false`
    this.sliderShowOne = false;
    this.sliderShowTwo = false;
    this.sliderShowThree = false;
    this.sliderShowFour = false;
  }

  ngOnDestroy(): void {
    // Cancelamos la suscripción al intervalo para evitar fugas de memoria
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
}

