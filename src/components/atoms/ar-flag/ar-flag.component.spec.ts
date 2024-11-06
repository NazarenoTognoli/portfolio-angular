import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArFlagComponent } from './ar-flag.component';

describe('ArFlagComponent', () => {
  let component: ArFlagComponent;
  let fixture: ComponentFixture<ArFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArFlagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
