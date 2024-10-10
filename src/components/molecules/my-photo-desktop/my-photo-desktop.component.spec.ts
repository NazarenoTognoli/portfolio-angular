import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhotoDesktopComponent } from './my-photo-desktop.component';

describe('MyPhotoDesktopComponent', () => {
  let component: MyPhotoDesktopComponent;
  let fixture: ComponentFixture<MyPhotoDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPhotoDesktopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPhotoDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
