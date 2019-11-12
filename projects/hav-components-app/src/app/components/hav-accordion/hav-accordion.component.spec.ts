import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavAccordionComponent } from './hav-accordion.component';

describe('HavAccordionComponent', () => {
  let component: HavAccordionComponent;
  let fixture: ComponentFixture<HavAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HavAccordionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
