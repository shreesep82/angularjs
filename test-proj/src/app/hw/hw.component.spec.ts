import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwComponent } from './hw.component';

describe('HwComponent', () => {
  let component: HwComponent;
  let fixture: ComponentFixture<HwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
