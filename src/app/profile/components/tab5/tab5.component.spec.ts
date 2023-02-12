import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab5Component } from './tab5.component';

describe('Tab5Component', () => {
  let component: Tab5Component;
  let fixture: ComponentFixture<Tab5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
