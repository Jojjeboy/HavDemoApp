import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavFocusOutlineComponent } from './hav-focus-outline.component';

describe('HavFocusOutlineComponent', () => {
  let component: HavFocusOutlineComponent;
  let fixture: ComponentFixture<HavFocusOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HavFocusOutlineComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavFocusOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
