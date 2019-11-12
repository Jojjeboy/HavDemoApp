import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAndValidationComponent } from './forms-and-validation.component';

describe('FormsAndValidationComponent', () => {
  let component: FormsAndValidationComponent;
  let fixture: ComponentFixture<FormsAndValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsAndValidationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAndValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
