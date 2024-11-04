import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactButtonContentComponent } from './contact-button-content.component';

describe('ContactButtonContentComponent', () => {
  let component: ContactButtonContentComponent;
  let fixture: ComponentFixture<ContactButtonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactButtonContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactButtonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
