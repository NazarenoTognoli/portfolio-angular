import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownBtnComponent } from './down-btn.component';

describe('DownBtnComponent', () => {
  let component: DownBtnComponent;
  let fixture: ComponentFixture<DownBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
