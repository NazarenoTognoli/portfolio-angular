import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjBtnContentComponent } from './proj-btn-content.component';

describe('ProjBtnContentComponent', () => {
  let component: ProjBtnContentComponent;
  let fixture: ComponentFixture<ProjBtnContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjBtnContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjBtnContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
