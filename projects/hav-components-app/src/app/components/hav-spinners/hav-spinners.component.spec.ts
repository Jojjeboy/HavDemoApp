import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavSpinnersComponent } from './hav-spinners.component';

describe('HavSpinnersComponent', () => {
  let component: HavSpinnersComponent;
  let fixture: ComponentFixture<HavSpinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HavSpinnersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
