import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionOneComponent } from './main-section-one.component';

describe('MainSectionOneComponent', () => {
  let component: MainSectionOneComponent;
  let fixture: ComponentFixture<MainSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
