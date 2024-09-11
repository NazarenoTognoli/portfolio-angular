import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolNameComponent } from './rol-name.component';

describe('RolNameComponent', () => {
  let component: RolNameComponent;
  let fixture: ComponentFixture<RolNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
