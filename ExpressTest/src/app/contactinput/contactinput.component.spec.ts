import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinputComponent } from './contactinput.component';

describe('ContactinputComponent', () => {
  let component: ContactinputComponent;
  let fixture: ComponentFixture<ContactinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
