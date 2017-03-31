/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestmruComponent } from './testmru.component';

describe('TestmruComponent', () => {
  let component: TestmruComponent;
  let fixture: ComponentFixture<TestmruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestmruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
