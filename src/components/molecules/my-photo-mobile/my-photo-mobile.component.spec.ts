import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhotoMobileComponent } from './my-photo-mobile.component';

describe('MyPhotoMobileComponent', () => {
  let component: MyPhotoMobileComponent;
  let fixture: ComponentFixture<MyPhotoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPhotoMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPhotoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
