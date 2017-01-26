/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UiLandingComponent } from './ui-landing.component';

describe('UiLandingComponent', () => {
  let component: UiLandingComponent;
  let fixture: ComponentFixture<UiLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
