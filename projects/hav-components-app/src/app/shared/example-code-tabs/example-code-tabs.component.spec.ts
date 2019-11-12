import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCodeTabsComponent } from './example-code-tabs.component';

describe('ExampleCodeTabsComponent', () => {
  let component: ExampleCodeTabsComponent;
  let fixture: ComponentFixture<ExampleCodeTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCodeTabsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCodeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
