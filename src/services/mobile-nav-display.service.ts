import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileNavDisplayService {
  private mobileNavSubject = new BehaviorSubject<boolean>(false);
  mobileNavDisplayState = this.mobileNavSubject.asObservable();
  alterState() {
    const current = this.mobileNavSubject.getValue();
    this.mobileNavSubject.next(!current); // Alterna el estado
  }
  returnValue():boolean {
    return this.mobileNavSubject.getValue()
  }
}
