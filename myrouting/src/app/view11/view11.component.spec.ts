import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View11Component } from './view11.component';

describe('View11Component', () => {
  let component: View11Component;
  let fixture: ComponentFixture<View11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
