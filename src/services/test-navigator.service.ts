import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestNavigatorService {

  constructor() { }

  isChrome(): boolean {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  }
}
