import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngClass

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.sass'
})
export class MainHeaderComponent {}
